import type { Attacher } from "unified";
import type { Element, Properties } from "hast";
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import { getHighlighter, Highlighter } from "shiki";
import { Parent } from "unist";

interface CodeNode extends Element {
  tagName: "code";
  data?: {
    meta?: string;
  };
}

interface PreNode extends Element {
  tagName: "pre";
  properties?: Properties;
}

type CodeMetadata = {
  highlightedLines: number[];
};

function parseMeta(value: string | null | undefined): CodeMetadata {
  return value
    ? { highlightedLines: JSON.parse(value) }
    : { highlightedLines: [] };
}

function parseLanguage(className?: string): string | null {
  if (!className || className === "") return null;

  const languageClasses = className
    .split(" ")
    .filter((c) => c.startsWith("language-"))
    .map((c) => c.substring(c.indexOf("-") + 1));
  return languageClasses.length > 0 ? languageClasses[0] : null;
}

function transformInlineCode(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  highlighter: Highlighter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  lang: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  node: CodeNode
) {
  // TODO
}

function transformCodeBlock(
  highlighter: Highlighter,
  lang: string,
  node: CodeNode,
  parent: PreNode
) {
  const meta = parseMeta(node.data?.meta);

  const code = node.children[0].value as string; // We know it's a string because of the condition in `transformCode`
  const tokens = highlighter.codeToThemedTokens(code, lang);
  node.children = tokens.map((line, zeroIndexedLineNumber) =>
    h(
      ".codeblock-line",
      meta.highlightedLines.includes(zeroIndexedLineNumber + 1)
        ? { dataHighlight: true }
        : {},
      line.length === 0
        ? " " // empty div would collapse to zero height.
        : line.map((token) =>
            h(
              "span",
              { style: `color: ${token.color || "inherit"}` },
              token.content
            )
          )
    )
  );

  // Colors on the "pre" element
  if (!parent.properties) {
    parent.properties = { style: "" };
  }

  parent.properties.style = `padding: 0.5em; color: ${highlighter.getForegroundColor()}; background-color: ${highlighter.getBackgroundColor()}; ${
    parent.properties.style || ""
  }`;
}

const advancedCodeBlock: Attacher = function advancedCodeBlock() {
  const transformCode =
    (highlighter: Highlighter) =>
    (node: CodeNode, index: number | null, parent: Parent | null) => {
      const lang = parseLanguage(String(node.properties?.className));

      if (
        lang === null ||
        node.children.length !== 1 ||
        node.children[0].type !== "text"
      ) {
        return;
      }

      if (
        parent === null ||
        parent.type !== "element" ||
        parent.tagName !== "pre"
      ) {
        return transformInlineCode(highlighter, lang, node);
      } else {
        return transformCodeBlock(highlighter, lang, node, parent as PreNode);
      }
    };

  return async function codeBlockProcessor(tree) {
    const highlighter = await getHighlighter({ theme: "monokai" });

    visit<CodeNode>(
      tree,
      { type: "element", tagName: "code" },
      transformCode(highlighter)
    );
  };
};

export default advancedCodeBlock;

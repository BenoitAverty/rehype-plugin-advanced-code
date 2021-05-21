import type { Attacher } from "unified";
import type { Element, Properties } from "hast";
import { getHighlighter, Highlighter, Lang } from "shiki";
import { Parent } from "unist";
import { codeblockLine, stylesheet, token } from "./elements";
import type { CodeNode } from "./utils";
import { findCodeNodes, findHeadNode, s } from "./utils";
import clsx from "clsx";

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

function parseLanguage(className?: string): Lang | null {
  if (!className || className === "") return null;

  const languageClasses = className
    .split(" ")
    .filter((c) => c.startsWith("language-"))
    .map((c) => c.substring(c.indexOf("-") + 1));
  return languageClasses.length > 0 ? (languageClasses[0] as Lang) : null;
}

function transformInlineCode(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  highlighter: Highlighter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  lang: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  node: CodeNode,
) {
  // TODO
}

function transformCodeBlock(
  highlighter: Highlighter,
  lang: string,
  node: CodeNode,
  parent: PreNode,
) {
  const meta = parseMeta(node.data?.meta);

  const code = node.children[0].value as string; // We know it's a string because of the condition in `transformCode`
  const lines = highlighter.codeToThemedTokens(code, lang);
  node.children = lines.map((line, zeroIndexedLineNumber) =>
    codeblockLine(
      meta.highlightedLines.includes(zeroIndexedLineNumber + 1),
      line.map((t) => token(t.color, t.content)),
    ),
  );

  // Colors on the "pre" element
  if (!parent.properties) {
    parent.properties = { style: "" };
  }

  parent.properties = {
    ...parent.properties,
    className: clsx("advanced-code", parent.properties.className),
  };

  parent.properties.style =
    s({
      color: highlighter.getForegroundColor(),
      backgroundColor: highlighter.getBackgroundColor(),
    }) + (parent.properties.style || "");
}

const advancedCodeBlock: Attacher = function advancedCodeBlock() {
  const transformCode = async (
    node: CodeNode,
    index: number | null,
    parent: Parent | null,
  ) => {
    const lang: Lang | null = parseLanguage(String(node.properties?.className));

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
      const highlighter = await getHighlighter({
        theme: "monokai",
        langs: [lang],
      });
      return transformInlineCode(highlighter, lang, node);
    } else {
      const highlighter = await getHighlighter({
        theme: "monokai",
        langs: [lang],
      });
      return transformCodeBlock(highlighter, lang, node, parent as PreNode);
    }
  };

  return async function codeBlockProcessor(tree) {
    const nodes = findCodeNodes(tree);
    const headNode = findHeadNode(tree);

    if (headNode && !headNode.children) {
      headNode.children = [stylesheet()];
    } else if (headNode) {
      (headNode as Parent).children.push(stylesheet());
    } else if (nodes.length > 0) {
      const root = tree as Parent;
      root.children = [stylesheet(), ...root.children];
    }

    await Promise.all(
      nodes.map(({ node, index, parent }) =>
        transformCode(node, index, parent),
      ),
    );
  };
};

export default advancedCodeBlock;

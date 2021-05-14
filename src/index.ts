import type {Attacher} from "unified";
import type {Element} from "hast";
import {visit} from "unist-util-visit";
import {h} from "hastscript";
import {getHighlighter, Highlighter,} from "shiki";

interface CodeNode extends Element {
    tagName: "code"
    data?: {
        meta?: string;
    };
}

type CodeMetadata = {
    highlightedLines: number[];
};

function parseMeta(value: string | null | undefined): CodeMetadata {
    return value ? { highlightedLines: JSON.parse(value) } : { highlightedLines: [] };
}

function parseLanguage(className?: string): string | null {
    if(!className || className === "") return null;

    let languageClasses = className.split(" ").filter(c => c.startsWith("language-")).map(c => c.substring(c.indexOf("-")+1));
    return languageClasses.length > 0 ? languageClasses[0] : null;
}

const advancedCodeBlock: Attacher = function advancedCodeBlock() {
    const transformCode = (highlighter: Highlighter) => (
        node: CodeNode,
    ) => {
        const lang = parseLanguage(String(node.properties?.className))

        if (lang === null || node.children.length !== 1 || node.children[0].type !== "text") {
            return;
        }

        const meta = parseMeta(node.data?.meta);

        const tokens = highlighter.codeToThemedTokens(node.children[0].value, lang);
        node.children = tokens.map((line, zeroIndexedLineNumber) =>
            h(
                ".codeblock-line",
                meta.highlightedLines.includes(zeroIndexedLineNumber + 1)
                    ? {dataHighlight: true}
                    : {},
                line.length === 0
                    ? " " // empty div would collapse to zero height.
                    : line.map(token =>
                        h("span", {style: `color: ${token.color || "inherit"}`}, token.content),
                    ),
            ),
        );

        if(!node.properties) {
            node.properties = { style: "" }
        }

        node.properties.style = `color: ${highlighter.getForegroundColor()}; background-color: ${highlighter.getBackgroundColor()};` + node.properties.style
    };

    return async function codeBlockProcessor(tree) {
        const highlighter = await getHighlighter({ theme: 'monokai' });
        visit<CodeNode>(tree, { type: 'element', tagName: 'code' }, transformCode(highlighter));
    };
};

export default advancedCodeBlock;

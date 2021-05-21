import { Properties as CssProperties } from "csstype";
import { Parent } from "unist";
import { visit } from "unist-util-visit";
import type { Element, Node } from "hast";

export interface CodeNode extends Element {
  tagName: "code";
  data?: {
    meta?: string;
  };
}

export function s(css: CssProperties): string {
  // This doesn't work for 1 letter words. aBCd => a-bcd instead of a-b-cd.
  // I'm hoping this isn't a problem for CSS properties but I haven't checked.
  const toKebabCase = (s: string) =>
    s.replace(/(.)([A-Z])/g, "$1-$2").toLowerCase();

  return Object.entries(css)
    .map(([k, v]) => `${toKebabCase(k)}: ${v}`)
    .join("; ");
}

export function findCodeNodes(tree: Node) {
  const nodes: Array<{
    node: CodeNode;
    index: number | null;
    parent: Parent | null;
  }> = [];
  visit<CodeNode>(
    tree,
    { type: "element", tagName: "code" },
    (node, index, parent) => nodes.push({ node, index, parent }),
  );

  return nodes;
}

export function findHeadNode(tree: Node): Node | null {
  let headNode = null;

  visit(tree, { type: "element", tagName: "head" }, (head) => {
    headNode = head;
  });

  return headNode;
}

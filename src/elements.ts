import type { Element } from "hast";
import { h } from "hastscript";
import { s } from "./utils";
// @ts-ignore
import style from "./style.css";

export function token(color: string | undefined, content: string): Element {
  const style = color ? s({ color }) : s({});
  return h("span", { style }, content);
}

export function codeblockLine(highlighted: boolean, children: Element[]) {
  const props = highlighted ? { dataHighlight: "true" } : {};
  const c = children.length === 0 ? " " : children;

  return h(".codeblock-line", props, c);
}

export function stylesheet() {
  return h("style", { type: "text/css" }, style);
}

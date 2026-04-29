import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

/** Блоки текста: браузер выставит RTL для арабского и LTR для кириллицы/latin (dir="auto"). */
const BLOCK_TAGS = new Set([
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "blockquote",
  "li",
  "td",
  "th",
]);

export function rehypeDirAuto() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (!BLOCK_TAGS.has(node.tagName)) return;
      node.properties ??= {};
      if (node.properties.dir == null) {
        node.properties.dir = "auto";
      }
    });
    return tree;
  };
}

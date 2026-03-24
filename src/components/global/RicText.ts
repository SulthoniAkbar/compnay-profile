import React from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

type RichTextProps = {
  document: RichTextDocument | undefined;
};

export default function RichText({ document }: RichTextProps) {
  if (!document) return null;

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (_node, children) =>
        React.createElement("h2", { className: "richtext-h2" }, children),
      [BLOCKS.HEADING_3]: (_node, children) =>
        React.createElement("h3", { className: "richtext-h3" }, children),
      [BLOCKS.PARAGRAPH]: (_node, children) =>
        React.createElement("p", { className: "richtext-p" }, children),
      [BLOCKS.UL_LIST]: (_node, children) =>
        React.createElement("ul", { className: "richtext-ul" }, children),
      [BLOCKS.OL_LIST]: (_node, children) =>
        React.createElement("ol", { className: "richtext-ol" }, children),
      [BLOCKS.LIST_ITEM]: (_node, children) =>
        React.createElement("li", { className: "richtext-li" }, children),
    },
  };

  return React.createElement(
    "div",
    { className: "richtext" },
    documentToReactComponents(document, options)
  );
}

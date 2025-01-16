import React from "react";
import { HelpPanel } from "../../../../../../bpl-tools/Components";
import DefaultSettings from "./DefaultSettings";
import StickySettings from "./StickySettings";
import TableContentSettings from "./TableContentSettings";

const General = (props) => {
  const { attributes, setAttributes } = props;
  const { theme } = attributes;
  return (
    <>
      <HelpPanel slug="b-blocks" docsLink="https://bplugins.com/docs/content-slider-block/guides/general" />
      <TableContentSettings attributes={attributes} setAttributes={setAttributes} />
      {theme === "default" && <DefaultSettings attributes={attributes} setAttributes={setAttributes} />}
      <StickySettings attributes={attributes} setAttributes={setAttributes} />
    </>
  );
};
export default General;

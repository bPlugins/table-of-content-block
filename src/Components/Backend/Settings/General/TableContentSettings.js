import { PanelBody, PanelRow, SelectControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React from "react";
import { Label } from "../../../../../../bpl-tools/Components";
import { bullets, htmlTags, markups, themes } from "../../../../utils/options";
import IconPicker from "../../Panel/IconPicker/IconPicker";
import SelectTokenField from "../../Panel/SelectTokenField/SelectTokenField";

const TableContentSettings = ({ attributes, setAttributes }) => {
  const { title, theme, markup,tagName } = attributes;
  const tagOptions=[{label:"H1",value:"h1"},{label:"H2",value:"h2"},{label:"H3",value:"h3"},{label:"H4",value:"h4"},{label:"H5",value:"h5"},{label:"H6",value:"h6"}]
  return (
    <PanelBody className="bPlPanelBody" title={__("Table of Contents", "table-of-content-block")} initialOpen={true}>
      <TextControl label={__("Title", "table-of-content-block")} value={title.text} onChange={(value) => setAttributes({ title: { ...title, text: value } })} />

      <PanelRow className="mt20">
        <Label className="">{__("HTML Tag", "table-of-content-block")}</Label>
        <SelectControl value={title.tag} onChange={(value) => setAttributes({ title: { ...title, tag: value } })} options={htmlTags} />
      </PanelRow>

      <Label>{__("Anchors By Tags", "table-of-content-block")}</Label>
      <SelectTokenField options={tagOptions} value={tagName} onChange={(value) => setAttributes({ tagName: value })} />

      <PanelRow className="mt20">
        <Label className="">Theme</Label>
        <SelectControl value={theme} onChange={(value) => setAttributes({ theme: value })} options={themes} />
      </PanelRow>

      {"default" === theme && (
        <>
          <PanelRow className="mt20">
            <Label className="">Markup view</Label>
            <SelectControl
              value={markup.view}
              options={markups}
              onChange={(value) =>
                setAttributes({
                  markup: {
                    ...markup,
                    view: value,
                    icon: value === "disc" && "fa-solid fa-circle",
                  },
                })
              }
            />
          </PanelRow>

          {markup.view === "disc" && (
            <IconPicker
              icons={bullets}
              label={"Icon"}
              renderFunction={(value) =>
                setAttributes({
                  markup: {
                    ...markup,
                    icon: value,
                    view: value === "decimal" ? "decimal" : "disc",
                  },
                })
              }
              value={markup.icon}
              default={"decimal"}
            />
          )}
        </>
      )}
    </PanelBody>
  );
};

export default TableContentSettings;

import { Flex, PanelBody, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import React from "react";
import { Background, BoxControl, Device, Label, ShadowControl } from "../../../../../../bpl-tools/Components";
import { BorderControl } from "../../../../../../bpl-tools/Components/Deprecated";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const units = [
  { value: "px", label: "px", default: 0 },
  { value: "%", label: "%", default: 0 },
  { value: "em", label: "em", default: 0 },
];

const BoxStyle = ({ attributes, setAttributes, device }) => {
  const { table, theme } = attributes;
  return (
    <PanelBody className="bPlPanelBody" title={__("Box", "table-of-content-block")} initialOpen={true}>
      <Flex justify="space-between">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Label className="mt0">{__("Width", "table-of-content-block")}</Label>
          <Device />
        </div>
        <div style={{ maxWidth: "70px" }}>
          <UnitControl
            value={table.width[device]}
            onChange={(val) =>
              setAttributes({
                table: updateData(table, val, "width", device),
              })
            }
          />
        </div>
      </Flex>
      <Background label={__("Background Color", "table-of-content-block")} value={table.bgColor} defaults="#fff" onChange={(value) => setAttributes({ table: { ...table, bgColor: value } })} />
      <BorderControl label={__("Border", "table-of-content-block")} value={table.border} onChange={(value) => setAttributes({ table: updateData(table, value, "border") })} />

      <ShadowControl
        label={__("Box Shadow", "table-of-content-block")}
        value={table.shadow}
        onChange={(value) => setAttributes({ table: { ...table, shadow: value } })}
        defaults={[
          {
            hOffset: "0px",
            vOffset: "0px",
            blur: "5px",
            spread: "1px",
            color: "#b3b3b3",
          },
        ]}
      />

      {theme !== "default" && (
        <div className="panelPosition">
          <Device className="devicePosition" style={{ left: "60px" }} />
          <BoxControl
            label={__("Padding", "table-of-content-block")}
            values={table.padding[device]}
            resetValues={{
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
            }}
            units={units}
            onChange={(value) =>
              setAttributes({
                table: updateData(table, value, "padding", device),
              })
            }
          />
        </div>
      )}
    </PanelBody>
  );
};
export default withSelect((select) => {
  return {
    device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase(),
  };
})(BoxStyle);

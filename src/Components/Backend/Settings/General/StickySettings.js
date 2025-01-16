import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import React from "react";
import { Device, Label } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiOutlineArrowDown, HiOutlineArrowUp, LeftRightArrow } from "../../../../utils/icons";
import RangeUnitControl from "../../Panel/RangeUnitControl/RangeUnitControl";
import SelectTokenField from "../../Panel/SelectTokenField/SelectTokenField";
import PanelAlign from "../../Panel/PanelAlign/PanelAlign";
const StickySettings = ({ attributes, setAttributes, device }) => {
  const { sticky } = attributes;
  return (
    <PanelBody className="bPlPanelBody" title={__("Sticky", "table-of-content-block")} initialOpen={false}>
      <ToggleControl
        label={__("Sticky", "table-of-content-block")}
        checked={sticky.toggle}
        onChange={(value) =>
          setAttributes({
            sticky: updateData(sticky, value, "toggle"),
          })
        }
      />
      {sticky.toggle && (
        <>
          <Label>{__("Sticky on", "b-blocks")}</Label>
          <SelectTokenField
            options={[
              { label: "Desktop", value: "Desktop" },
              { label: "Tablet", value: "Tablet" },
              { label: "Mobile", value: "Mobile" },
            ]}
            value={sticky.device}
            onChange={(value) => setAttributes({ sticky: updateData(sticky, value, "device") })}
          />

          <div style={{ marginTop: "10px" }}>
            <PanelAlign
              label={__("Horizontal Align", "table-of-content-block")}
              options={[
                { label: "Left", value: "left", icon: <HiArrowNarrowLeft /> },
                {
                  label: "Right",
                  value: "right",
                  icon: <HiArrowNarrowRight />,
                },
              ]}
              value={sticky.horizonAlign}
              onChange={(value) =>
                setAttributes({
                  sticky: updateData(sticky, value, "horizonAlign"),
                })
              }
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <PanelAlign
              label={__("Vertical Align", "table-of-content-block")}
              options={[
                { label: "Top", value: "top", icon: <HiOutlineArrowUp /> },
                {
                  label: "Center",
                  value: "center",
                  icon: <LeftRightArrow />,
                },
                {
                  label: "Bottom",
                  value: "bottom",
                  icon: <HiOutlineArrowDown />,
                },
              ]}
              value={sticky.verticalAlign}
              onChange={(value) =>
                setAttributes({
                  sticky: updateData(sticky, value, "verticalAlign"),
                })
              }
            />
          </div>
          <div style={{ marginTop: "10px" }} className="panelPosition">
            <Device className="devicePosition" />
            <RangeUnitControl
              label={__(`${sticky.horizonAlign === "left" ? "Left" : "Right"}`, "table-of-content-block")}
              value={sticky[sticky.horizonAlign][device]}
              min={0}
              max={sticky[sticky.horizonAlign][device].includes("px") ? 1000 : 100}
              onChange={(value) =>
                setAttributes({
                  sticky: updateData(sticky, value, sticky.horizonAlign, device),
                })
              }
            />
          </div>

          {sticky.verticalAlign !== "center" && (
            <div style={{ marginTop: "10px" }} className="panelPosition">
              <Device className="devicePosition" style={{ left: "50px" }} />
              <RangeUnitControl
                label={__(`${sticky.verticalAlign === "top" ? "Top" : "Bottom"}`, "table-of-content-block")}
                value={sticky[sticky.verticalAlign][device]}
                min={0}
                max={sticky[sticky.verticalAlign][device].includes("px") ? 1000 : 100}
                onChange={(value) =>
                  setAttributes({
                    sticky: updateData(sticky, value, sticky.verticalAlign, device),
                  })
                }
              />
            </div>
          )}

          <div style={{ marginTop: "10px" }} className="panelPosition">
            <Device className="devicePosition" style={{ left: "55px" }} />
            <RangeControl
              label={__("Z-Index", "table-of-content-block")}
              value={sticky.zIndex[device]}
              min={0}
              max={10000}
              onChange={(value) =>
                setAttributes({
                  sticky: updateData(sticky, value, "zIndex", device),
                })
              }
            />
          </div>
        </>
      )}
    </PanelBody>
  );
};

export default withSelect((select) => {
  return {
    device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase(),
  };
})(StickySettings);

import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import React, { Fragment } from "react";
import { BoxControl, Device,ColorControl } from "../../../../../../bpl-tools/Components";
import { updateData} from "../../../../../../bpl-tools/utils/functions";
import RangeUnitControl from "../../Panel/RangeUnitControl/RangeUnitControl";
import { Tab } from "../../Panel/Tab/Tab";

const DefaultHeaderStyle = ({ attributes, setAttributes, device }) => {
  const { header, boxList, markup } = attributes;
  return (
    <Fragment>
      <PanelBody className="bPlPanelBody" title={__("Header", "table-of-content-block")} initialOpen={true}>
        <ColorControl
          label={__("Background Color", "table-of-content-block")}
          value={header.bgColor}
          colors={[
            { name: "red", color: "#f00" },
            { name: "white", color: "#fff" },
            { name: "blue", color: "#00f" },
          ]}
          onChange={(value) =>
            setAttributes({
              header: updateData(header, value, "bgColor"),
            })
          }
        />
        <ColorControl
          label={__("Text Color", "table-of-content-block")}
          value={header.txtColor}
          colors={[
            { name: "red", color: "#f00" },
            { name: "white", color: "#fff" },
            { name: "blue", color: "#00f" },
          ]}
          onChange={(value) =>
            setAttributes({
              header: updateData(header, value, "txtColor"),
            })
          }
        />
        <ColorControl
          label={__("Icon Color", "table-of-content-block")}
          value={header.iconColor}
          colors={[
            { name: "red", color: "#f00" },
            { name: "white", color: "#fff" },
            { name: "blue", color: "#00f" },
          ]}
          onChange={(value) =>
            setAttributes({
              header: updateData(header, value, "iconColor"),
            })
          }
        />
        <RangeControl
          label={__("Separator Width", "table-of-content-block")}
          value={header.separatorWidth}
          onChange={(value) =>
            setAttributes({
              header: updateData(header, value, "separatorWidth"),
            })
          }
          min={0}
          max={100}
          step={1}
        />
        <ColorControl
          label={__("Separator Color", "table-of-content-block")}
          value={header.separatorColor}
          defaults="#ccc"
          colors={[
            { name: "red", color: "#f00" },
            { name: "white", color: "#fff" },
            { name: "blue", color: "#00f" },
          ]}
          onChange={(value) =>
            setAttributes({
              header: updateData(header, value, "separatorColor"),
            })
          }
        />
      </PanelBody>

      <PanelBody title={__("List Item", "table-of-content-block")} initialOpen={false}>
        <div style={{ marginTop: "10px" }} className="panelPosition">
          <Device className="devicePosition" style={{ left: "60px", top: "0px" }} />
          <BoxControl
            label={__("Padding", "table-of-content-block")}
            values={boxList.padding[device]}
            resetValues={{
              top: "0px",
              left: "20px",
              right: "0px",
              bottom: "0px",
            }}
            onChange={(value) =>
              setAttributes({
                boxList: updateData(boxList, value, "padding", device),
              })
            }
          />
        </div>

        <div style={{ marginTop: "10px" }} className="panelPosition">
          <Device className="devicePosition" style={{ left: "80px", top: "0px" }} />
          <RangeControl
            label={__("Max Height", "table-of-content-block")}
            value={boxList.maxHeight[device]}
            onChange={(value) =>
              setAttributes({
                boxList: updateData(boxList, value, "maxHeight", device),
              })
            }
            min={0}
            max={1000}
            step={1}
          />
        </div>

        <Tab
          options={[{label:"Normal",value:"normal"}, {label:"Normal",value:"hover"}]}
          value={boxList.txtStyle}
          onChange={(val) =>
            setAttributes({
              boxList: { ...boxList, txtStyle: val },
            })
          }
        />
        {boxList.txtStyle === "normal" ? (
          <>
            <ColorControl
              label={__("Text Color", "table-of-content-block")}
              value={boxList.nTxtColor}
              colors={[
                { name: "red", color: "#f00" },
                { name: "white", color: "#fff" },
                { name: "blue", color: "#00f" },
              ]}
              onChange={(value) =>
                setAttributes({
                  boxList: { ...boxList, nTxtColor: value },
                })
              }
            />
            <div style={{ marginTop: "10px" }}>
              <ToggleControl
                label={__("Underline", "table-of-content-block")}
                checked={boxList.nTxtDecoration}
                onChange={(value) =>
                  setAttributes({
                    boxList: {
                      ...boxList,
                      nTxtDecoration: value,
                    },
                  })
                }
              />
            </div>
          </>
        ) : (
          <>
            <ColorControl
              label={__("Text Color", "table-of-content-block")}
              value={boxList.hTxtColor}
              colors={[
                { name: "red", color: "#f00" },
                { name: "white", color: "#fff" },
                { name: "blue", color: "#00f" },
              ]}
              onChange={(value) =>
                setAttributes({
                  boxList: { ...boxList, hTxtColor: value },
                })
              }
            />
            <div style={{ marginTop: "10px" }}>
              <ToggleControl
                label={__("Underline", "table-of-content-block")}
                checked={boxList.hTxtDecoration}
                onChange={(value) =>
                  setAttributes({
                    boxList: {
                      ...boxList,
                      hTxtDecoration: value,
                    },
                  })
                }
              />
            </div>
          </>
        )}
        <div
          style={{
            borderTop: "1px solid #ccc",
            margin: "15px 0",
            paddingTop: "10px",
          }}
        >
          <strong>Marker</strong>
        </div>
        <ColorControl
          label={__("Color", "table-of-content-block")}
          value={markup.color}
          colors={[
            { name: "red", color: "#f00" },
            { name: "white", color: "#fff" },
            { name: "blue", color: "#00f" },
          ]}
          onChange={(value) =>
            setAttributes({
              markup: updateData(markup, value, "color"),
            })
          }
        />
        <div style={{ marginTop: "10px" }}>
          <div style={{ marginTop: "10px" }} className="panelPosition">
            <Device className="devicePosition" />
            <RangeUnitControl
              label={__("Size", "table-of-content-block")}
              value={markup.markupSize[device]}
              min={0}
              step={1}
              max={markup.markupSize[device].includes("px") ? 50 : 100}
              onChange={(value) =>
                setAttributes({
                  markup: updateData(markup, value, "markupSize", device),
                })
              }
            />
          </div>
        </div>
      </PanelBody>
    </Fragment>
  );
};

export default withSelect((select) => {
  return {
    device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase(),
  };
})(DefaultHeaderStyle);

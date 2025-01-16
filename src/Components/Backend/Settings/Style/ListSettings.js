import { PanelBody } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { Fragment } from "react";
import { ColorControl, Device } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import RangeUnitControl from "../../Panel/RangeUnitControl/RangeUnitControl";
import { Tab } from "../../Panel/Tab/Tab";
const ListSettings = ({ attributes, setAttributes, device }) => {
  const { slideTitle, slideList, boxList } = attributes;
  return (
    <Fragment>
      <PanelBody className="bPlPanelBody" title={__("List", "table-of-content-block")} initialOpen={true}>
        <strong style={{ marginBottom: "15px", color: "gray" }}>Heading</strong>
        <ColorControl
          label={__("Title Color", "table-of-content-block")}
          value={slideTitle.titleColor}
          colors={[
            { name: "Orange", color: "#F57C00" },
            { name: "Purple", color: "#9C27B0" },
            { name: "Gray", color: "#9E9E9E" },
            { name: "Cyan", color: "#00BCD4" },
            { name: "Pink", color: "#E91E63" },
            { name: "Lime", color: "#CDDC39" },
            { name: "Brown", color: "#795548" },
          ]}
          onChange={(value) =>
            setAttributes({
              slideTitle: { ...slideTitle, titleColor: value },
            })
          }
        />

        <div style={{ marginTop: "10px" }} className="panelPosition">
          <Device className="devicePosition" style={{ left: "110px" }} />
          <RangeUnitControl
            label={__("Space Top", "table-of-content-block")}
            value={slideTitle.space[device]}
            min={0}
            max={slideTitle.space[device].includes("%") ? 100 : 200}
            onChange={(value) =>
              setAttributes({
                slideTitle: updateData(slideTitle, value, "space", device),
              })
            }
          />
        </div>

        <div style={{ marginTop: "10px" }} className="panelPosition">
          <Device className="devicePosition" style={{ left: "110px" }} />
          <RangeUnitControl
            label={__("Space Bottom", "table-of-content-block")}
            value={slideTitle.spaceBottom[device]}
            min={0}
            max={slideTitle.spaceBottom[device].includes("%") ? 100 : 200}
            onChange={(value) =>
              setAttributes({
                slideTitle: updateData(slideTitle, value, "spaceBottom", device),
              })
            }
          />
        </div>

        <div
          style={{
            marginTop: "10px",
            borderTop: "1px solid #ccc",
            paddingTop: "10px",
          }}
        >
          <strong style={{ marginBottom: "15px", color: "gray" }}>List Item</strong>

          <div style={{ marginTop: "10px" }} className="panelPosition">
            <Device className="devicePosition" style={{ left: "110px" }} />
            <RangeUnitControl
              label={__("List Space Bottom", "table-of-content-block")}
              value={slideList.space[device]}
              min={0}
              max={slideList.space[device].includes("%") ? 100 : 200}
              onChange={(value) =>
                setAttributes({
                  slideList: updateData(slideList, value, "space", device),
                })
              }
            />
          </div>

          <div style={{ marginTop: "10px" }} className="panelPosition">
            <Device className="devicePosition" style={{ left: "110px" }} />
            <RangeUnitControl
              label={__("List Font Size", "table-of-content-block")}
              value={slideList.fontSize[device]}
              min={0}
              max={slideList.fontSize[device].includes("%") ? 100 : 200}
              onChange={(value) =>
                setAttributes({
                  slideList: updateData(slideList, value, "fontSize", device),
                })
              }
            />
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Tab
            options={[
              { label: "Normal", value: "normal" },
              { label: "Normal", value: "hover" },
            ]}
            value={boxList.txtStyle}
            onChange={(value) =>
              setAttributes({
                boxList: { ...boxList, txtStyle: value },
              })
            }
          />
        </div>
        {boxList.txtStyle === "normal" ? (
          <Fragment>
            <ColorControl
              label={__("Text Color", "table-of-content-block")}
              value={boxList.nTxtColor}
              colors={[
                { name: "Purple", color: "#9C27B0" },
                { name: "Gray", color: "#9E9E9E" },
                { name: "Pink", color: "#E91E63" },
                { name: "Orange", color: "#F57C00" },
                { name: "Lime", color: "#CDDC39" },
                { name: "Brown", color: "#795548" },
              ]}
              onChange={(value) =>
                setAttributes({
                  boxList: { ...boxList, nTxtColor: value },
                })
              }
            />
            <ColorControl
              label={__("Bar Color", "table-of-content-block")}
              value={boxList.nbarColor}
              defaults="#b0aeb1"
              colors={[
                { name: "Purple", color: "#9C27B0" },
                { name: "Gray", color: "#9E9E9E" },
                { name: "Pink", color: "#E91E63" },
                { name: "Orange", color: "#F57C00" },
                { name: "Lime", color: "#CDDC39" },
                { name: "Brown", color: "#795548" },
              ]}
              onChange={(value) =>
                setAttributes({
                  boxList: { ...boxList, nbarColor: value },
                })
              }
            />
          </Fragment>
        ) : (
          <Fragment>
            <ColorControl
              label={__("Text Color", "table-of-content-block")}
              value={boxList.hTxtColor}
              colors={[
                { name: "Purple", color: "#9C27B0" },
                { name: "Gray", color: "#9E9E9E" },
                { name: "Pink", color: "#E91E63" },
                { name: "Orange", color: "#F57C00" },
                { name: "Lime", color: "#CDDC39" },
                { name: "Brown", color: "#795548" },
              ]}
              onChange={(value) =>
                setAttributes({
                  boxList: { ...boxList, hTxtColor: value },
                })
              }
            />
            <ColorControl
              label={__("Bar Color", "table-of-content-block")}
              value={boxList.hBarColor}
              defaults="#b0aeb1"
              colors={[
                { name: "Purple", color: "#9C27B0" },
                { name: "Gray", color: "#9E9E9E" },
                { name: "Pink", color: "#E91E63" },
                { name: "Orange", color: "#F57C00" },
                { name: "Lime", color: "#CDDC39" },
                { name: "Brown", color: "#795548" },
              ]}
              onChange={(value) =>
                setAttributes({
                  boxList: { ...boxList, hBarColor: value },
                })
              }
            />
          </Fragment>
        )}
      </PanelBody>
    </Fragment>
  );
};

export default withSelect((select) => {
  return {
    device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase(),
  };
})(ListSettings);

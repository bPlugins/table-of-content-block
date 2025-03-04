
import { __experimentalUnitControl as UnitControl } from "@wordpress/components";
import DefaultHeaderStyle from "./DefaultHeaderStyle";
import ListSettings from "./ListSettings";
import SlideSettings from "./SlideSettings";
import TimelineSettings from "./TimelineSettings";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { Flex } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Device } from "../../../../../../bpl-tools/Components";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { PanelBody } from "@wordpress/components";


const Style = ({ attributes, setAttributes, device }) => {
  const { theme, sticky } = attributes;
  return (
    <>
      {
        sticky.toggle && <PanelBody title={__("Container", "table-fo-content-block")}>
          <UnitControl
            value={sticky.width[device]}
            label={<Flex>{__("Width", "table-of-content-block")} <Device /></Flex>}
            onChange={(val) =>
              setAttributes({
                sticky: updateData(sticky, val, "width", device),
              })
            }
          />
        </PanelBody>
      }

      {/* <BoxStyle attributes={attributes} setAttributes={setAttributes} /> */}
      {theme === "default" && <DefaultHeaderStyle attributes={attributes} setAttributes={setAttributes} />}
      {"slide" === theme && <SlideSettings attributes={attributes} setAttributes={setAttributes} />}
      {"timeline" === theme && <TimelineSettings attributes={attributes} setAttributes={setAttributes} />}
      {"list" === theme && <ListSettings attributes={attributes} setAttributes={setAttributes} />}
    </>
  );
};
export default compose(
  withSelect((select) => {
    const { getDeviceType } = select('core/editor');

    return {
      device: getDeviceType()?.toLowerCase(),
    };
  })
)(Style);
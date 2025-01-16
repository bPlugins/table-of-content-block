import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { Fragment } from "react";
import IconPicker from "../../Panel/IconPicker/IconPicker";

const DefaultSettings = ({ attributes, setAttributes }) => {
  const { minimize } = attributes;
  return (
    <PanelBody className="bPlPanelBody" title={__("Settings", "table-of-content-block")} initialOpen={false}>
      <ToggleControl label={__("Minimize Box", "table-of-content-block")} checked={minimize.toggle} onChange={(value) => setAttributes({ minimize: { ...minimize, toggle: value } })} />
      {minimize.toggle && (
        <Fragment>
          <IconPicker
            icons={[
              {
                label: "Chevron Down",
                value: "fa-solid fa-chevron-down",
              },
              {
                label: "Circle Chevron Down",
                value: "fa-solid fa-circle-chevron-down",
              },
              {
                label: "Angel Down",
                value: "fa-solid fa-angle-down",
              },
              {
                label: "Angel Double Down",
                value: "fa-solid fa-angles-down",
              },
              {
                label: "Caret Down",
                value: "fa-solid fa-caret-down",
              },
              {
                label: "Squire Caret Down",
                value: "fa-solid fa-square-caret-down",
              },
              {
                label: "Squire Caret Down",
                value: "fa-regular fa-square-caret-down",
              },
            ]}
            default={"fa-solid fa-chevron-down"}
            label={__("Expand Icon", "table-of-content-block")}
            value={minimize.expandIcon}
            renderFunction={(value) =>
              setAttributes({
                minimize: { ...minimize, expandIcon: value },
              })
            }
          />
          <div style={{ marginTop: "10px" }}>
            <IconPicker
              icons={[
                {
                  label: "Chevron Up",
                  value: "fa-solid fa-chevron-up",
                },
                {
                  label: "Circle Chevron Up",
                  value: "fa-solid fa-circle-chevron-up",
                },
                {
                  label: "Angel Up",
                  value: "fa-solid fa-angle-up",
                },
                {
                  label: "Angel Double Up",
                  value: "fa-solid fa-angles-up",
                },
                {
                  label: "Caret Up",
                  value: "fa-solid fa-caret-up",
                },
                {
                  label: "Squire Caret Up",
                  value: "fa-solid fa-square-caret-up",
                },
                {
                  label: "Squire Caret Up",
                  value: "fa-regular fa-square-caret-up",
                },
              ]}
              default={"fa-solid fa-chevron-up"}
              label={__("Collapse Icon", "table-of-content-block")}
              value={minimize.collapseIcon}
              renderFunction={(value) =>
                setAttributes({
                  minimize: {
                    ...minimize,
                    collapseIcon: value,
                  },
                })
              }
            />
          </div>
        </Fragment>
      )}
    </PanelBody>
  );
};

export default DefaultSettings;

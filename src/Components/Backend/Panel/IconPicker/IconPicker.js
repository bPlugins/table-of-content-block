import { Popover } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useEffect, useRef } from "react";

const IconPicker = ({ icons, label, default: defaultIcon, renderFunction, value }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const iconComp = useRef();
  useEffect(() => {
    const handle = (e) => {
      if (!iconComp?.current?.contains(e.target)) {
        setPopoverVisible(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ width: "50%", margin: "0" }}>{label}</p>
        <div
          style={{
            display: "flex",
            height: "27px",
            width: "57px",
            border: "1px solid #ccc",
          }}
        >
          <div onClick={() => renderFunction(defaultIcon)} className="single-icon-admin-panel">
            <i className="fa-solid fa-ban"></i>
          </div>
          <div style={{ background: "#e9e9ed" }} onClick={() => setPopoverVisible(!popoverVisible)} className="single-icon-admin-panel">
            <i className={`${value !== "decimal" && value}`}></i>
          </div>
        </div>
      </div>
      {popoverVisible && (
        <Popover ref={iconComp} className="popover-icon-picker-admin">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexWrap: "wrap",
              border: "1px solid #ccc",
            }}
            className="icon-picker-admin-panel-popover-section"
          >
            {icons &&
              icons.map((icon, idx) => (
                <div onClick={() => renderFunction(icon.value)} key={idx} className={`single-icon-picker-admin ${icon.value === value && "selectIcon"}`}>
                  <div className="icon-picker-tooltip-container">
                    <div className="icon-picker-tooltip">
                      <span>{icon.label}</span>
                      <i className="fa-solid fa-caret-down"></i>
                    </div>
                  </div>
                  <i className={`${icon.value}`}></i>
                </div>
              ))}
          </div>
        </Popover>
      )}
    </div>
  );
};

export default IconPicker;

import "./panelAlign.scss";

const PanelAlign = (props) => {
  const { label, options, onChange = () => {}, value, style, labelPosition = "left", className, activeBg = "#4527a4", activeColor = "#fff", hoverBg = "#ebebeb", hoverColor, iconHeight = "18px", iconWidth = "auto" } = props;
  const labelAlign = labelPosition == "left" || labelPosition == "right";
  const id = Math.floor(Math.random() * 99999999);
  return (
    <div style={style} className={className}>
      <style>{`
        .single-icon-${id}.bPl_single-icon-admin-panel.isActive {
          background-color: ${activeBg};
        }
        .single-icon-${id}.bPl_single-icon-admin-panel.hover-color:hover {
          background: ${hoverBg};
        }
        .single-icon-${id}.bPl_single-icon-admin-panel.hover-color:hover .single-icon{
          color:${hoverColor};
          fill:${hoverColor};
        }
        .single-icon-${id}.bPl_single-icon-admin-panel.isActive .single-icon{
          color:${activeColor};
          fill:${activeColor};
        }
        .single-icon-${id}.bPl_single-icon-admin-panel .single-icon >svg{
          height:${iconHeight};
          width:${iconWidth};
        }

        }
      `}</style>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: `${labelAlign ? "center" : "normal"}`,
          flexDirection: `${labelPosition === "left" ? "row" : labelPosition == "right" ? "row-reverse" : labelPosition === "top" ? "column" : "column-reverse"}`,
        }}
      >
        <p
          style={{
            margin: `${labelAlign ? "0" : "8px 0"}`,
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          {label}
        </p>
        <div
          style={{
            display: "flex",
            border: "1px solid #ccc",
          }}
        >
          {options &&
            options.map((icon, i) => (
              <div key={i} onClick={() => onChange(icon.label.toLowerCase())} className={`single-icon-${id} bPl_single-icon-admin-panel panelAlign ${value === icon.label.toLowerCase() ? "isActive" : "hover-color"}`}>
                <span className="single-icon">{icon.icon}</span>
                <div className="icon-picker-tooltip-container">
                  <div style={{ padding: "2px 6px" }} className="icon-picker-tooltip">
                    <span>
                      {icon.label}
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default PanelAlign;

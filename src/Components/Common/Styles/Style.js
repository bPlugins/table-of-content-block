import { isValidCSS } from "../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { header, boxList, markup, sticky} = attributes;
  const blockWrapper = `#${id}`;
  const accordion = `${blockWrapper} .accordion`;
  const titleWrapper = `${accordion} .accordion-title`;
  // eslint-disable-next-line no-unused-vars
  const title = `${titleWrapper} .content-table-title`;
  const panelWrapper = `${accordion} .panel`;
  const panelLists = `${panelWrapper} .panel-table-container-order-list`;
  const panelItem = `${panelLists} .panel-table-list-items`;

  const listSl = `${blockWrapper} ol>li>a.table-content-anchor-list`;
  return (
    <>
      <style>
        {`
        ${listSl}:hover{
          color:${boxList.hTxtColor} !important; 
          text-decoration:${boxList.hTxtDecoration ? "underline" : "none"} !important;
        }
        ${listSl}{
          color:${boxList.nTxtColor} !important;
          text-decoration:${boxList.nTxtDecoration ? "underline" : "none"};
          margin-left:5px;
        }
        ${accordion}.sticky {
        ${isValidCSS("width", sticky.width.desktop)}
          z-index: ${sticky.zIndex.desktop} !important;

          position:fixed;
        }
        ${["left", "right"]
          .map(
            (val) => `${accordion}.sticky.${val}{
            ${val}:${sticky[val].desktop};
          }`
          )
          .join("")}

      ${["top", "bottom"]
        .map(
          (val) => `${accordion}.sticky.${val}{
        ${val}:${sticky[val]?.desktop}
        }`
        )
        .join("")}
        ${sticky.verticalAlign === "center" ? `${accordion}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
      ${
        markup.view === "decimal"
          ? `
          
        ${panelLists}{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.desktop?.left};
        }
        ${panelItem}::marker{
          color:${markup.color};
          font-size:${markup.markupSize.desktop};
        }
        `
          : `
        ${panelLists}{
          list-style-type:none;
        }
        ${panelLists}>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        ${panelItem}>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.desktop} !important;
        }
        `
      }
      ${titleWrapper}{
        background:${header.bgColor};
        border-bottom: ${header.separatorWidth}px solid ${header.separatorColor};
        margin-bottom:-2px;
      }
      ${accordion}>.panel{
        ${boxList.maxHeight.desktop > 0 ? "max-height:" + boxList.maxHeight.desktop + "px;" : ""}
        ${boxList.maxHeight.desktop > 0 ? "overflow-y:auto;" : ""}
        
        
      }
      a.table-content-anchor-list.item-active{
        color:${boxList.hTxtColor} !important;
      }
      ${panelItem}{
        padding-top:${boxList.padding.desktop?.top};
        padding-bottom:${boxList.padding.desktop?.bottom};
        padding-right:${boxList.padding.desktop?.right};
      }
      ${panelLists}{
        padding-left:${boxList.padding.desktop?.left};
        padding-top:10px;
      }
      ${panelItem}::marker{
          font-size: 40px;
        }
      @media screen and (min-width: 1024px) {
        ${accordion}.sticky {
          z-index: ${sticky.zIndex.desktop} !important;
          position:${sticky?.device.includes("Desktop") ? "fixed" : "initial"};
        }
        ${["left", "right"]
          .map(
            (val) => `${accordion}.sticky.${val}{
            ${val}:${sticky[val].desktop};
          }`
          )
          .join("")}
        ${["top", "bottom"]
          .map(
            (val) => `${accordion}.sticky.${val}{
        ${val}:${sticky[val].desktop}
        }`
          )
          .join("")}
        ${sticky.verticalAlign === "center" ? `${accordion}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${panelWrapper}{
          ${boxList.maxHeight.desktop > 0 ? "max-height:" + boxList.maxHeight.desktop + "px;" : ""}
          ${boxList.maxHeight.desktop > 0 ? "overflow-y:auto;" : ""}
      }
      ${panelItem}{
        padding-top:${boxList.padding.desktop?.top};
        padding-bottom:${boxList.padding.desktop?.bottom};
        padding-right:${boxList.padding.desktop?.right};
      }
      ${panelLists}{
        padding-left:${boxList.padding.desktop?.left};
      }
      ${
        markup.view === "decimal"
          ? `
          
        ${panelLists}{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.desktop?.left};
        }
        ${panelItem}::marker{
          color:${markup.color};
          font-size:${markup.markupSize.desktop};
        }
        `
          : `
        ${panelLists}{
          list-style-type:none;
        }
        ${panelLists}>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        ${panelItem}>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.desktop} !important;
        }
        `
      }
      }
      @media only screen and (min-width:641px) and (max-width: 1024px){
        ${accordion}.sticky {
        ${isValidCSS("width", sticky.width.tablet)}
          z-index: ${sticky.zIndex.tablet} !important;
          position:${sticky.device.includes("Tablet") ? "fixed" : "initial"};
        }
      ${["left", "right"]
        .map(
          (val) => `${accordion}.sticky.${val}{
          ${val}:${sticky[val].tablet};
        }`
        )
        .join("")}
        ${["top", "bottom"]
          .map(
            (val) => `${accordion}.sticky.${val}{
        ${val}:${sticky[val].tablet}
        }`
          )
          .join("")}
        ${sticky.verticalAlign === "center" ? `${accordion}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${panelWrapper}{
          ${boxList.maxHeight.tablet > 0 ? "max-height:" + boxList.maxHeight.tablet + "px;" : ""}
          ${boxList.maxHeight.tablet > 0 ? "overflow-y:auto;" : ""}
        }
      ${panelItem}{
        padding-top:${boxList.padding.tablet?.top};
        padding-bottom:${boxList.padding.tablet?.bottom};
        padding-right:${boxList.padding.tablet?.right};
      }
      ${panelLists}{
        padding-left:${boxList.padding.tablet?.left};
      }
      ${
        markup.view === "decimal"
          ? `
          
        ${panelLists}{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.tablet?.left};
        }
        ${panelItem}::marker{
          color:${markup.color};
          font-size:${markup.markupSize.tablet};
        }
        `
          : `
        ${panelLists}{
          list-style-type:none;
        }
        ${panelLists}>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        ${panelItem}>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.tablet} !important;
        }
        `
      }

      }
      @media only screen and (max-width: 640px) {
        ${accordion}.sticky {
        ${isValidCSS("width", sticky.width.mobile)}
          z-index: ${sticky.zIndex.mobile} !important;
          position:${sticky.device.includes("Mobile") ? "fixed" : "initial"};
        }
        ${["left", "right"]
          .map(
            (val) => `${accordion}.sticky.${val}{
          ${val}:${sticky[val].mobile};
        }`
          )
          .join("")}
        ${["top", "bottom"]
          .map(
            (val) => `${accordion}.sticky.${val}{
          ${val}:${sticky[val].mobile}
          }`
          )
          .join("")}
          ${sticky.verticalAlign === "center" ? `${accordion}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${panelWrapper}{
          ${boxList.maxHeight.mobile > 0 ? "max-height:" + boxList.maxHeight.mobile + "px;" : ""}
          ${boxList.maxHeight.mobile > 0 ? "overflow-y:auto;" : ""}
        }
      ${panelItem}{
        padding-top:${boxList.padding.mobile?.top};
        padding-bottom:${boxList.padding.mobile?.bottom};
        padding-right:${boxList.padding.mobile?.right};
      }
      ${panelLists}{
        padding-left:${boxList.padding.mobile?.left};
      }
      ${
        markup.view === "decimal"
          ? `
        ${panelLists}{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.mobile?.left};
        }
        ${panelItem}::marker{
          color:${markup.color};
          font-size:${markup.markupSize.mobile};
        }
        `
          : `
        ${panelLists}{
          list-style-type:none;
        }
        ${panelLists}>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        ${panelItem}>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.mobile} !important;
        }
        `
      }
      }
      `}
      </style>
    </>
  );
};

export default Style;

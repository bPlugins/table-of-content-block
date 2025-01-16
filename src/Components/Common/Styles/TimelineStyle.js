import React from "react";
import {getMultiShadowCSS } from "../../../../../bpl-tools/utils/getCSS";

const TimelineStyle = ({ attributes, id }) => {
  const {sticky, slideTitle, slideList, boxList } = attributes;
  const blockSl = `#${id}`;
  const timelineSl = `${blockSl} .timeline-container`;
  const titleContainer = `${timelineSl} .timeline-title-container`;
  const timelineTitle = `${titleContainer} .timeline-title`;
  const timelineItems = `${timelineSl} .timeline-list-items`;
  const timelineItem = `${timelineItems} .timeline-list`;

  return (
    <>
      <style>
        {`
${timelineItems} {
  height: 90%;
  list-style: none;
  position: relative;
  margin-left: 10px;
  border-left: 2px dashed ${boxList.treeColor};
}
${timelineTitle} {
  padding-top:${slideTitle.space.desktop};
  padding-bottom: ${slideTitle.spaceBottom.desktop};
}
${timelineItem} {
  margin-bottom:${slideList.space.desktop};
  margin-left:25px;
}

${timelineItem}>a {
  text-decoration: none;
  font-size:${slideList.fontSize.desktop}
}
${timelineItem} a.item-active{
  color:${boxList.hTxtColor} !important;
}
${timelineItem}>a.item-active::before{
  background-color:${boxList.hTxtColor}
}
${timelineItem}>a::before {
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  width: ${boxList.dotSize}px;
  height: ${boxList.dotSize}px;
  border: 6px solid #e7e7e7;
  background-color: #b1b0b0;
  border-radius: 50%;
  -webkit-box-shadow: ${getMultiShadowCSS(boxList.dotShadow)};
  box-shadow: ${getMultiShadowCSS(boxList.dotShadow)};
  content: "";
  transition: background .3s ease-in-out;
}
${timelineItem}>a{
  color:${boxList.nTxtColor} !important;
}
${timelineItem}>a:hover {
  color:${boxList.hTxtColor} !important;
  transition: color .2s ease-in-out;
}

${timelineItem}>a:hover::before {
  background-color:${boxList.hTxtColor};
}
${timelineSl}.sticky {
  z-index: ${sticky.zIndex.desktop} !important;

  position:fixed;
}
${["left", "right"]
  .map(
    (val) => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].desktop};
}`
  )
  .join("")}
${["top", "bottom"]
  .map(
    (val) => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].desktop}
}`
  )
  .join("")}
${sticky.verticalAlign === "center" ? `${timelineSl}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}


@media screen and (min-width: 1024px) {

${timelineTitle} {
  padding-top:${slideTitle.space.desktop};
  padding-bottom: ${slideTitle.spaceBottom.desktop};
}
${timelineItem} {
  margin-bottom:${slideList.space.desktop};
  margin-left:25px;
}
${timelineItem}>a {
  text-decoration: none;
  font-size:${slideList.fontSize.desktop}
}
${timelineSl}.sticky {
  z-index: ${sticky.zIndex.desktop} !important;
  position:${sticky.device.includes("Desktop") ? "fixed" : "initial"};
}
${["left", "right"]
  .map(
    (val) => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].desktop};
}`
  )
  .join("")}
${["top", "bottom"]
  .map(
    (val) => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].desktop}
}`
  )
  .join("")}
${sticky.verticalAlign === "center" ? `${timelineSl}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}  
}
@media only screen and (min-width:641px) and (max-width: 1024px) {
${timelineTitle} {
  padding-top:${slideTitle.space.tablet};
  padding-bottom: ${slideTitle.spaceBottom.tablet};
}
${timelineItem} {
  margin-bottom:${slideList.space.tablet};
}
${timelineItem}>a {
  font-size:${slideList.fontSize.tablet}
}
${timelineSl}.sticky {
  z-index: ${sticky.zIndex.tablet} !important;
  position:${sticky.device.includes("Tablet") ? "fixed" : "initial"};
}

${["left", "right"].map(
  (val) => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].tablet};
}`
)}

${["top", "bottom"]
  .map(
    (val) => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].tablet}
}`
  )
  .join("")}
${sticky.verticalAlign === "center" ? `${timelineSl}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

}
@media only screen and (max-width: 640px) {

${timelineTitle} {
  padding-top:${slideTitle.space.mobile};
  padding-bottom: ${slideTitle.spaceBottom.mobile};
}
${timelineItem} {
  margin-bottom:${slideList.space.mobile};
}
${timelineItem}>a {
  font-size:${slideList.fontSize.mobile}
}
${timelineSl}.sticky {
  z-index: ${sticky.zIndex.mobile} !important;
  position:${sticky.device.includes("Mobile") ? "fixed" : "initial"};
}

${["top", "bottom"]
  .map(
    (val) => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].mobile}
}`
  )
  .join("")}
${sticky.verticalAlign === "center" ? `${timelineSl}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
${["left", "right"].map(
  (val) => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].mobile};
}`
)}
}
`}
      </style>
    </>
  );
};

export default TimelineStyle;

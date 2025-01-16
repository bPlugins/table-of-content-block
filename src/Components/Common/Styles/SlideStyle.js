/* eslint-disable no-unused-vars */
import React from "react";
import { getBackgroundCSS, getBorderCSS, getBoxCSS, getMultiShadowCSS } from "../../../../../bpl-tools/utils/getCSS";

const SlideStyle = ({ attributes, id }) => {
  const { slideTitle, slideList, sticky, boxList} = attributes;
  const blockSl = `#${id}`;
  const slideContainer = `${blockSl} .slide-container`;
  const titleWrapper = `${slideContainer} .slide-titleSubWrapper`;
  const subTitleWrapper = `${titleWrapper} .slide-title`;
  const title = `${subTitleWrapper} .slide-title-heading`;
  const slideListWrapper = `${slideContainer} .slide-list-items`;
  const list = `${slideListWrapper} .slide-list`;
  return (
    <>
      <style>
        {`
${subTitleWrapper} {
  margin-top:${slideTitle.space.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop};
}
${subTitleWrapper}::after {
  background-color: ${slideTitle.slideBarColor};
}

${list} {
  margin-bottom:${slideList.space.desktop};
}

${list}>a{
  color:${boxList.nTxtColor};
  font-size:${slideList.fontSize.desktop};
}
${list} a:hover{
    color:${boxList.hTxtColor};
}
${list} .item-active{
  color:${boxList.hTxtColor} !important;
}
${list}::after {
  background-color: ${boxList.nBarColor};
}
${slideContainer}:hover .slide-list::after{
  background-color:${boxList.hBarColor};
} 
${slideContainer}.sticky {
  z-index: ${sticky.zIndex.desktop} !important;
}
${["left", "right"]
  .map(
    (val) => `${slideContainer}.sticky.${val}{
${val}:${sticky[val].desktop};
}`
  )
  .join("")}
${["top", "bottom"]
  .map(
    (val) => `${slideContainer}.sticky.${val}{
${val}:${sticky[val].desktop}
}`
  )
  .join("")}
${sticky.verticalAlign === "center" ? `${slideContainer}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

        
@media screen and (min-width: 1024px) {
${slideContainer}.sticky {
  z-index: ${sticky.zIndex.desktop} !important;
  position:${sticky.device.includes("Desktop") ? "fixed" : "initial"};
}

${["left", "right"]
  .map(
    (val) => `${slideContainer}.sticky.${val}{
  ${val}:${sticky[val].desktop};
}`
  )
  .join("")}
${["top", "bottom"]
  .map(
    (val) => `${slideContainer}.sticky.${val}{
${val}:${sticky[val].desktop}
}`
  )
  .join("")}
        ${sticky.verticalAlign === "center" ? `${slideContainer}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

        ${subTitleWrapper} {
  margin-top:${slideTitle.space.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop};
}
        ${list} {
          margin-bottom:${slideList.space.desktop};
        }
        ${slideListWrapper}>${list}>a{
          font-size:${slideList.fontSize.desktop};
        }
        }

@media only screen and (min-width:641px) and (max-width: 1024px) {
        ${slideContainer}.sticky {
          z-index: ${sticky.zIndex.tablet} !important;
          position:${sticky.device.includes("Tablet") ? "fixed" : "initial"};
        }
        ${["left", "right"]
          .map(
            (val) => `${slideContainer}.sticky.${val}{
            ${val}:${sticky[val].tablet};
          }`
          )
          .join("")}
        ${["top", "bottom"]
          .map(
            (val) => `${slideContainer}.sticky.${val}{
        ${val}:${sticky[val].tablet}
        }`
          )
          .join("")}
        ${sticky.verticalAlign === "center" ? `${slideContainer}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${subTitleWrapper} {
          margin-top:${slideTitle.space.tablet};
          margin-bottom: ${slideTitle.spaceBottom.tablet};
        }
        ${list} {
          margin-bottom:${slideList.space.tablet};
        }
        ${list}>a{
          font-size:${slideList.fontSize.tablet};
        }
        }

        @media only screen and (max-width: 640px) {
        ${slideContainer}.sticky {
          z-index: ${sticky.zIndex.mobile} !important;
          position:${sticky.device.includes("Mobile") ? "fixed" : "initial"};
        }

${["left", "right"]
  .map(
    (val) => `${slideContainer}.sticky.${val}{
    ${val}:${sticky[val].mobile};
  }`
  )
  .join("")}
  ${["top", "bottom"]
    .map(
      (val) => `${slideContainer}.sticky.${val}{
  ${val}:${sticky[val].mobile}
  }`
    )
    .join("")}
        ${sticky.verticalAlign === "center" ? `${slideContainer}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${subTitleWrapper} {
          margin-top:${slideTitle.space.mobile};
          margin-bottom: ${slideTitle.spaceBottom.mobile};
        }
        ${list} {
          margin-bottom:${slideList.space.mobile};
        }
        ${list}>a{
          font-size:${slideList.fontSize.mobile};
        }
        }

          `}
      </style>
    </>
  );
};

export default SlideStyle;

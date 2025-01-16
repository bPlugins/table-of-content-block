/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NoHeading from "../../Common/NoHeading/NoHeading";
import SlideStyle from "../../Common/Styles/SlideStyle";
import DynamicTag from "../Panel/DynamicTag/DynamicTag";

const Slide = ({ attributes, setAttributes, id }) => {
  const { title, slideTitle, tagName, sticky, headings } = attributes;
  const [content, setContent] = useState([]);
  const [contentsAttr, setContentsAttr] = useState();
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    const root = document.querySelector(".wp-block-post-content");
    const selectorString = tagName.join(", ");
    const headingElements = root?.querySelectorAll(`${selectorString}`);
    const accordionTitle = document.querySelector(".slide-title");
    const removeAttrHeading = accordionTitle?.querySelector(`${title?.tag}`);
    const savedElements = [];
    if (headingElements) {
      Array.from(headingElements).forEach((headingElement) => {
        if (headingElement.className !== "slide-title-heading") {
          for (let index = 0; index < headingElement.children.length; index++) {
            if (index + 1 !== 1) {
              headingElement.children[index].remove();
            }
          }
          savedElements.push({
            contents: headingElement.textContent,
            tag: headingElement.tagName,
            id: headingElement.children[0]?.getAttribute("id"),
          });
        }
      });
    }
    setAttributes({ headings: savedElements });
    if (headingElements?.length) {
      for (let i = 0; i < headingElements.length; i++) {
        const headingElement = headingElements[i];
        const span = document.createElement("span");
        span.setAttribute("id", `bppb-heading-anchor-${i}`);
        headingElement.insertAdjacentElement("afterbegin", span);
      }
    }
    if (removeAttrHeading?.tagName.toLowerCase() !== "div") {
      const removeSpan = removeAttrHeading?.querySelector("span");
      removeSpan && removeSpan.remove();
    }
    removeAttrHeading ? (removeAttrHeading.innerHTML = title?.text) : "";

    setContent(headingElements);
  }, [rendered, title.tag, tagName]);
  return (
    <>
      <SlideStyle attributes={attributes} id={id} />
      <div onClick={() => setRendered(!rendered)} className={`slide-container poppinsFont ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}`}>
        <div className="slide-titleSubWrapper">
          <div className="slide-title">
            <DynamicTag className="slide-title-heading" style={{ color: slideTitle.titleColor }} tagName={title.tag} value={title.text} />
          </div>
        </div>
        <>
          {content?.length > 0 ? (
            <div className="slide-list-items">
              {Array.from(content).map(
                (headingElement, idx) =>
                  headingElement.className !== "slide-title-heading" && (
                    <>
                      <p className="slide-list" onClick={() => setContentsAttr(idx)} key={idx}>
                        <a className={`${idx === Number(contentsAttr) ? "item-active" : ""}`} href={`#bppb-heading-anchor-${idx}`}>
                          {headingElement.textContent}
                        </a>
                      </p>
                    </>
                  )
              )}
            </div>
          ) : (
            <NoHeading />
          )}
        </>
      </div>
    </>
  );
};

export default Slide;

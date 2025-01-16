/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NoHeading from "../../Common/NoHeading/NoHeading";
import TimelineStyle from "../../Common/Styles/TimelineStyle";
import DynamicTag from "../Panel/DynamicTag/DynamicTag";

const Timeline = ({ attributes, setAttributes, id }) => {
  const { title, slideTitle, tagName, sticky, headings } = attributes;
  const [content, setContent] = useState([]);
  const [contentsAttr, setContentsAttr] = useState();
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    const root = document.querySelector(".wp-block-post-content");
    const selectorString = tagName.join(", ");
    const headingElements = root?.querySelectorAll(`${selectorString}`);
    const accordionTitle = document.querySelector(".timeline-title-container");
    const removeAttrHeading = accordionTitle?.querySelector(`${title?.tag}`);
    const savedElements = [];
    if (headingElements) {
      Array.from(headingElements).forEach((headingElement) => {
        if (headingElement.className !== "timeline-title") {
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
      <TimelineStyle attributes={attributes} id={id} />
      <div onClick={() => setRendered(!rendered)} className={`timeline-container poppinsFont ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}`}>
        <div className="timeline-title-container">
          <DynamicTag className="timeline-title" style={{ color: slideTitle.titleColor }} tagName={title.tag} value={title.text} />
        </div>
        <>
          {content?.length > 0 ? (
            <ul className="timeline-list-items">
              {Array.from(content).map(
                (headingElement, idx) =>
                  headingElement.className !== "timeline-title" && (
                    <>
                      <li className="timeline-list" key={idx}>
                        <a onClick={() => setContentsAttr(idx)} className={`${idx === Number(contentsAttr) ? "item-active" : ""}`} href={`#bppb-heading-anchor-${idx}`}>
                          {headingElement.textContent}
                        </a>
                      </li>
                    </>
                  )
              )}
            </ul>
          ) : (
            <NoHeading />
          )}
        </>
      </div>
    </>
  );
};

export default Timeline;

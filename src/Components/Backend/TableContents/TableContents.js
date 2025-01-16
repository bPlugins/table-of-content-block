/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import NoHeading from "../../Common/NoHeading/NoHeading";
import SmoothScroll from "../../Common/SmoothScroll";
import Style from "../../Common/Styles/Style";
import DynamicTag from "../Panel/DynamicTag/DynamicTag";
const TableContents = ({ attributes, setAttributes, id }) => {
  const [toggle, setToggle] = useState(true);
  const [content, setContent] = useState([]);
  const [contentsAttr, setContentsAttr] = useState();
  const { boxList, header, title, tagName, minimize, markup, sticky, headings } = attributes;
  const [rendered, setRendered] = useState(boxList.padding.desktop.bottom || false);
  useEffect(() => {
    const root = document.querySelector(".wp-block-post-content");
    const selectorString = tagName.join(", ");
    const headingElements = root?.querySelectorAll(`${selectorString}`);
    const accordionTitle = document.querySelector(".accordion-title");
    const removeAttrHeading = accordionTitle?.querySelector(`${title?.tag}`);
    const savedElements = [];
    if (headingElements) {
      Array.from(headingElements).forEach((headingElement) => {
        if (headingElement.className !== "content-table-title") {
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
  }, [rendered, title.tag, tagName, markup.view]);
  const accordion = useRef();
  const titleRef = useRef();
  const accordionPanel = useRef();

  useEffect(() => {
    let panel = accordionPanel.current;
    titleRef.current.addEventListener("click", function () {
      if (parseInt(panel.style.height.substring(0, panel.style.height.length - 2))) {
        if (minimize.toggle) {
          panel.style.height = panel.scrollHeight + "px";
        }
        panel.style.height = "0px";
        setToggle(false);
      } else {
        panel.style.height = panel.scrollHeight + "px";
        if (minimize.toggle) {
          panel.style.height = panel.scrollHeight + "px";
        }
        setToggle(true);
      }
    });
  }, [boxList.maxHeight, title.tag, tagName, markup.view, minimize.toggle]);
  return (
    <>
      <Style attributes={attributes} id={id} />
      <SmoothScroll />
      <div onClick={() => setRendered(!rendered)} ref={accordion} className={`accordion poppinsFont ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}  `}>
        <div ref={titleRef} className="accordion-title">
          <DynamicTag className="content-table-title" style={{ margin: "0", color: header.txtColor }} tagName={title?.tag} value={title?.text} />
          {minimize.toggle && <>{toggle ? <i style={{ color: header.iconColor }} className={minimize.collapseIcon}></i> : <i style={{ color: header.iconColor }} className={minimize.expandIcon}></i>}</>}
        </div>
        <div ref={accordionPanel} className="panel" >
          {content?.length > 1 ? (
            <ol className="panel-table-container-order-list">
              {Array.from(content).map(
                (headingElement, idx) =>
                  headingElement.className !== "content-table-title" &&
                  headingElement.textContent.length > 1 && (
                    <>
                      <li className="panel-table-list-items" onClick={() => setContentsAttr(idx)} key={idx}>
                        {markup.view !== "decimal" && (
                          <span>
                            <i style={{ fontSize: "10px" }} className={`${markup.icon}`}></i>
                          </span>
                        )}
                        <a className={`table-content-anchor-list ${idx === contentsAttr ? "item-active" : ""}`} href={`#bppb-heading-anchor-${idx}`}>
                          {headingElement.textContent}
                        </a>
                      </li>
                    </>
                  )
              )}
            </ol>
          ) : (
            <NoHeading />
          )}
        </div>
      </div>
    </>
  );
};

export default TableContents;

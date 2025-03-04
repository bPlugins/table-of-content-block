/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import NoHeading from "../../Common/NoHeading/NoHeading";
import Style from "../../Common/Styles/Style";
import DynamicTag from "../Panel/DynamicTag/DynamicTag";
import useHeadingElements from "../../hooks/useHeadingElements";
const TableContents = ({ attributes, setAttributes, id }) => {
  const [toggle, setToggle] = useState(true);
  // const [content, setContent] = useState([]);
  const [contentsAttr, setContentsAttr] = useState();
  const { boxList, header, title, tagName, minimize, markup, sticky, headings } = attributes;

  const { content, savedElements } = useHeadingElements(tagName, title.tag, title.text, '.accordion-title','content-table-title');


  useEffect(() => {
    if (savedElements) {
      setAttributes({ headings: savedElements });
    }
  }, [savedElements]);

  const accordion = useRef();
  const titleRef = useRef();
  const accordionPanel = useRef();

  useEffect(() => {
    const panel = accordionPanel.current;
    const handleClick = () => {
      const isPanelOpen = panel.style.height !== "0px";
      const newHeight = isPanelOpen ? "0px" : `${panel.scrollHeight}px`;
      
      panel.style.height = newHeight;
      setToggle(!isPanelOpen);
    };
  
    if (minimize.toggle) {
      titleRef.current.addEventListener("click", handleClick);
    }

    
    // Cleanup listener on unmount
    return () => titleRef.current?.removeEventListener("click", handleClick);
  }, [boxList.maxHeight, title.tag, tagName, markup.view, minimize.toggle]);
  return (
    <>
      <Style attributes={attributes} id={id} />
      <div ref={accordion} className={`accordion ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}  `}>
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

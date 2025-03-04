import { useEffect, useRef, useState } from "react";
import DynamicTag from "../Backend/Panel/DynamicTag/DynamicTag";
import NoHeading from "../Common/NoHeading/NoHeading";
import Style from "../Common/Styles/Style";
import useHeading from "../hooks/useHeading";

const TableFront = ({ attributes, id }) => {
  const accordion = useRef();
  const titleRef = useRef();
  const accordionPanel = useRef();
  const [toggle, setToggle] = useState(false);
  const [contentsAttr, setContentsAttr] = useState();
  const [rendered, setRendered] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState();
  const { header, title, tagName, minimize, markup, sticky, headings } = attributes;

  useHeading(tagName, headings)
  useEffect(() => {
    setAccordionHeight(accordionPanel?.current?.scrollHeight + "px");
  }, []);
  return (
    <>
      <Style toggle={toggle} attributes={attributes} id={id} />
      <div onClick={() => setRendered(!rendered)} ref={accordion} className={`accordion ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}`}>
        <div ref={titleRef} onClick={() => setToggle(!toggle)} className="accordion-title">
          <DynamicTag className="content-table-title" style={{ margin: "0", color: header.txtColor }} tagName={title?.tag} value={title?.text} />
          {minimize.toggle && <>{!toggle ? <i style={{ color: header.iconColor }} className={minimize.collapseIcon}></i> : <i style={{ color: header.iconColor }} className={minimize.expandIcon}></i>}</>}
        </div>
        <div
          ref={accordionPanel}
          style={{
            height: toggle ? (minimize.toggle ? "0px" : accordionHeight) : accordionHeight,
          }}
          className="panel"
        >
          {headings?.length > 1 ? (
            <ol className="panel-table-container-order-list">
              {headings.map(
                (headingElement, idx) =>
                  headingElement.contents.length > 0 && (
                    <>
                      <li className="panel-table-list-items" onClick={() => setContentsAttr(idx)} key={idx}>
                        {markup.view !== "decimal" && (
                          <span>
                            <i style={{ fontSize: "10px" }} className={`${markup.icon}`}></i>
                          </span>
                        )}
                        <a className={`table-content-anchor-list ${idx === contentsAttr ? "item-active" : ""}`} href={`#${headingElement.id}`}>
                          {headingElement.contents}
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

export default TableFront;

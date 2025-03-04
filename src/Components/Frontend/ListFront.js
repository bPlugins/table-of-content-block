import { useState } from "react";

import DynamicTag from "../Backend/Panel/DynamicTag/DynamicTag";
import NoHeading from "../Common/NoHeading/NoHeading";
import ListStyle from "../Common/Styles/ListStyle";
import useHeading from "../hooks/useHeading";

const ListFront = ({ attributes, id }) => {
  const { title, slideTitle, tagName, sticky, headings } = attributes;
  const [contentsAttr, setContentsAttr] = useState();
  useHeading(tagName, headings)
  return (
    <>
      <ListStyle attributes={attributes} id={id} />
      <div className={`list-container ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}`}>
        <div className="list-title">
          <DynamicTag className="list-title-heading" style={{ color: slideTitle.titleColor }} tagName={title.tag} value={title.text} />
        </div>
        <>
          {headings?.length > 0 ? (
            <div className="list-items">
              {Array.from(headings).map((headingElement, idx) => (
                <>
                  <p className="list-item" key={idx}>
                    <a onClick={() => setContentsAttr(idx)} className={`${idx === Number(contentsAttr) ? "item-active" : ""}`} href={`#${headingElement.id}`}>
                      {headingElement.contents}
                    </a>
                  </p>
                </>
              ))}
            </div>
          ) : (
            <NoHeading />
          )}
        </>
      </div>
    </>
  );
};

export default ListFront;

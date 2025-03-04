import { useState } from "react";
import DynamicTag from "../Backend/Panel/DynamicTag/DynamicTag";
import NoHeading from "../Common/NoHeading/NoHeading";
import SlideStyle from "../Common/Styles/SlideStyle";
import useHeading from "../hooks/useHeading";

const SliderFront = ({ attributes, id }) => {
  const [contentsAttr, setContentsAttr] = useState();
  const [rendered, setRendered] = useState(false);
  const { title, tagName, sticky, headings, slideTitle } = attributes;
  useHeading(tagName, headings)
  return (
    <>
      <SlideStyle attributes={attributes} id={id} />
      <div onClick={() => setRendered(!rendered)} className={`slide-container ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign} `}>
        <div className="slide-title">
          <DynamicTag className="slide-title-heading" style={{ color: slideTitle.titleColor }} tagName={title.tag} value={title.text} />
        </div>
        <>
          {headings?.length > 0 ? (
            <div className="slide-list-items">
              {Array.from(headings).map((headingElement, idx) => (
                <>
                  <p className="slide-list" onClick={() => setContentsAttr(idx)} key={idx}>
                    <a className={`${idx === Number(contentsAttr) ? "item-active" : ""}`} href={`#${headingElement.id}`}>
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

export default SliderFront;

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NoHeading from "../../Common/NoHeading/NoHeading";
import SlideStyle from "../../Common/Styles/SlideStyle";
import DynamicTag from "../Panel/DynamicTag/DynamicTag";
import useHeadingElements from "../../hooks/useHeadingElements";

const Slide = ({ attributes, setAttributes, id }) => {
  const { title, slideTitle, tagName, sticky, headings } = attributes;
  const [contentsAttr, setContentsAttr] = useState();
  const { content, savedElements } = useHeadingElements(tagName, title.tag, title.text, '.slide-title', 'slide-title-heading');


  useEffect(() => {
    if (savedElements) {
      setAttributes({ headings: savedElements });
    }
  }, [savedElements]);
  return (
    <>
      <SlideStyle attributes={attributes} id={id} />
      <div  className={`slide-container ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}`}>
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

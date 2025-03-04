/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NoHeading from "../../Common/NoHeading/NoHeading";
import TimelineStyle from "../../Common/Styles/TimelineStyle";
import useHeadingElements from "../../hooks/useHeadingElements";
import DynamicTag from "../Panel/DynamicTag/DynamicTag";

const Timeline = ({ attributes, setAttributes, id }) => {
  const { title, slideTitle, tagName, sticky, headings } = attributes;
  const [contentsAttr, setContentsAttr] = useState();

  const { content, savedElements } = useHeadingElements(tagName, title.tag, title.text, ".timeline-title-container", "timeline-title");

  useEffect(() => {
    if (savedElements) {
      setAttributes({ headings: savedElements });
    }
  }, [savedElements]);

  return (
    <>
      <TimelineStyle attributes={attributes} id={id} />
      <div className={`timeline-container ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}`}>
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

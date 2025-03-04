import { useEffect, useState, useCallback } from 'react';

const useHeadingElements = (tagName, titleTag, titleText, titleSl,titleHeadingSl) => {
  const [content, setContent] = useState([]);
  const [savedElements, setSavedElements] = useState([]);

  const processHeadingElement = useCallback((headingElement) => {
    if (headingElement.className === titleHeadingSl) return null;

    // Remove all children except the first one
    Array.from(headingElement.children).slice(1).forEach(child => child.remove());

    return {
      contents: headingElement.textContent,
      tag: headingElement.tagName,
      id: headingElement.children[0]?.getAttribute("id"),
    };
  }, []);

  const addAnchorsToHeadings = useCallback((headingElements) => {
    Array.from(headingElements).forEach((headingElement, index) => {
      const span = document.createElement("span");
      span.setAttribute("id", `bppb-heading-anchor-${index}`);
      headingElement.insertAdjacentElement("afterbegin", span);
    });
  }, []);

  const processTitleHeading = useCallback((removeAttrHeading, titleText) => {
    if (!removeAttrHeading) return;

    if (removeAttrHeading.tagName.toLowerCase() !== "div") {
      const removeSpan = removeAttrHeading.querySelector("span");
      removeSpan?.remove();
    }

    removeAttrHeading.innerHTML = titleText;
  }, []);

  useEffect(() => {
    const fetchAndProcessHeadings = () => {
      const root = document.querySelector(".wp-block-post-content");
      if (!root) return;

      const selectorString = tagName.join(", ");
      const headingElements = root.querySelectorAll(selectorString);
      if (!headingElements?.length) return;

      // Process heading elements
      const elements = Array.from(headingElements)
        .map(processHeadingElement)
        .filter(Boolean);

      setSavedElements(elements);
      addAnchorsToHeadings(headingElements);

      // Process title
      const title = document.querySelector(titleSl);
      const removeAttrHeading = title?.querySelector(titleTag);
      processTitleHeading(removeAttrHeading, titleText);

      setContent(headingElements);
    };

    fetchAndProcessHeadings();
  }, [tagName, titleTag, titleText, titleSl, processHeadingElement, addAnchorsToHeadings, processTitleHeading]);

  return { savedElements, content };
};

export default useHeadingElements;
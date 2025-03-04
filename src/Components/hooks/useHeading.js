import { useEffect, useCallback } from 'react';

const useHeading = (tagName, headings) => {
  const processHeadings = useCallback(() => {
    const root = document.body;
    const selectorString = tagName.join(", ");
    const headingsEl = root.querySelectorAll(selectorString);

    Array.from(headingsEl).forEach((element) => {
      const currentHeading = headings.find(
        (heading) =>
          heading.tag === element.tagName &&
          heading.contents === element.textContent
      );

      if (currentHeading) {
        const span = document.createElement("span");
        span.setAttribute("id", currentHeading.id);
        element.insertAdjacentElement("beforebegin", span);
      }
    });
  }, [tagName, headings]);

  const handleUrlHash = useCallback(() => {
    const url = window.location.hash;
    if (!url) return;

    setTimeout(() => {
      const activeSection = document.querySelector(`[href='${url}']`);
      activeSection?.click();
    }, 1000);
  }, []);

  useEffect(() => {
    processHeadings();
    handleUrlHash();
  }, [processHeadings, handleUrlHash]);
};

export default useHeading;
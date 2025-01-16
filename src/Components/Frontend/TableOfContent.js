import ListFront from "./ListFront";
import SliderFront from "./SliderFront";
import TableFront from "./TableFront";
import TimelineFront from "./TimelineFront";

const TableOfContent = ({ attributes }) => {
  const { theme } = attributes;

  switch (theme) {
    case "slide":
      return <SliderFront attributes={attributes} />;
    case "timeline":
      return <TimelineFront attributes={attributes} />;
    case "list":
      return <ListFront attributes={attributes} />;
    default:
      return <TableFront attributes={attributes} />;
  }
};
export default TableOfContent;

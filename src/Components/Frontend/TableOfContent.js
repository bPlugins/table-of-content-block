import ListFront from "./ListFront";
import SliderFront from "./SliderFront";
import TableFront from "./TableFront";
import TimelineFront from "./TimelineFront";

const TableOfContent = ({ attributes,id }) => {
  const { theme } = attributes;

  switch (theme) {
    case "slide":
      return <SliderFront attributes={attributes} id={id} />;
    case "timeline":
      return <TimelineFront attributes={attributes} id={id} />;
    case "list":
      return <ListFront attributes={attributes} id={id} />;
    default:
      return <TableFront attributes={attributes} id={id} />;
  }
};
export default TableOfContent;

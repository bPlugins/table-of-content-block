import DefaultHeaderStyle from "./DefaultHeaderStyle";
import ListSettings from "./ListSettings";
import SlideSettings from "./SlideSettings";
import TimelineSettings from "./TimelineSettings";


const Style = (props) => {
  const { attributes, setAttributes } = props;
  const { theme } = attributes;
  return (
    <>
      {/* <BoxStyle attributes={attributes} setAttributes={setAttributes} /> */}
      {theme === "default" && <DefaultHeaderStyle attributes={attributes} setAttributes={setAttributes} />}
      {"slide" === theme && <SlideSettings attributes={attributes} setAttributes={setAttributes} />}
      {"timeline" === theme && <TimelineSettings attributes={attributes} setAttributes={setAttributes} />}
      {"list" === theme && <ListSettings attributes={attributes} setAttributes={setAttributes} />}
    </>
  );
};
export default Style;

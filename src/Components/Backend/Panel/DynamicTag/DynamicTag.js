const DynamicTag = ({ tagName: DynamicTag, value, ...props }) => {
  return <DynamicTag dangerouslySetInnerHTML={{ __html: value }} {...props}></DynamicTag>;
};

export default DynamicTag;

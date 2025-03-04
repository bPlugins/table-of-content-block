import { useBlockProps } from '@wordpress/block-editor';

import Settings from './Settings/Settings';
import Slide from './TableContents/Slide';
import Timeline from './TableContents/Timeline';
import List from './TableContents/List';
import TableContents from './TableContents/TableContents';
import { generateCSS } from '../../../../bpl-tools/Advanced/generateCSS';
import SmoothScroll from '../Common/SmoothScroll';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  const { minimize } = attributes;
  const { theme,advanced} = attributes;

  const id = `table-of-content-${clientId}`;
	return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()} id={id}>
        <style dangerouslySetInnerHTML={{
          __html: `
            ${generateCSS(id,advanced,true)}
          `}} ></style>
        <div>
          <SmoothScroll />
          {(() => {
            switch (theme) {
              case "slide":
                return <Slide attributes={attributes} setAttributes={setAttributes} id={id} />;
              case "timeline":
                return <Timeline attributes={attributes} setAttributes={setAttributes} id={id} />;
              case "list":
                return <List attributes={attributes} setAttributes={setAttributes} id={id} />;
              default:
                return <TableContents key={minimize.toggle} setAttributes={setAttributes} attributes={attributes} id={id} />;
            }
          })()}
        </div>
      </div>
    </>
  );
}
export default Edit;
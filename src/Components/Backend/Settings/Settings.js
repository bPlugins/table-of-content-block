import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

import Advanced from '../../../../../bpl-tools/Advanced';
import { tabController } from '../../../../../bpl-tools/utils/functions';

import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import { BBlocksAds } from '../../../../../bpl-tools/Components';
import Style from './Style/Style';

const Settings = (props) => {
	const { attributes, setAttributes } = props;
	const { advanced } = attributes;

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>
					<General {...props} />

				</>}


				{'style' === tab.name && <>
					<Style {...props} />
				</>}
				{'advanced' === tab.name && <>
					<Advanced advanced={advanced} onChange={(value) => setAttributes({ advanced: value })} />
				</>}
			</>}</TabPanel>
		</InspectorControls>
	</>;
};
export default Settings;
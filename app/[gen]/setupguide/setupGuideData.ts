import { genData, genProps } from "../genData";
import { deviceParams } from "./[device]/deviceData";

const setupGuideData: { gen1: genSetupGuideData; gen2: genSetupGuideData } = {
	gen1: {
		genProps: genData.gen1,
		devices: [
			{
				device: "router",
				gen: "gen1",
			},
			{
				device: "windows",
				gen: "gen1",
				embeddedVideo: {
					src: "https://player.vimeo.com/video/1003172023?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
					title: "شرح تفعيل حجب المواقع الإباحية من جهاز الويندز | windows",
				},
			},
			{
				device: "android",
				gen: "gen1",
				soon: true,
			},

			{
				device: "linux",
				gen: "gen1",
				soon: true,
			},
			{
				device: "ios",
				gen: "gen1",
				soon: true,
			},
		],
	},
	gen2: {
		genProps: genData.gen2,
		devices: [],
	},
};

export default setupGuideData;

export type genSetupGuideData = {
	genProps: genProps;
	devices: deviceParams[];
};

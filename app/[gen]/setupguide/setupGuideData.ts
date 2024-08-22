import { genName } from "@/app/appTypes";
import { deviceName, genData, genProps } from "../genData";
import { deviceParams } from "./[device]/deviceData";

const setupGuideData: { gen1: genSetupGuideData; gen2: genSetupGuideData } = {
	gen1: {
		genProps: genData.gen1,
		devices: generateDevices("gen1"),
	},
	gen2: {
		genProps: genData.gen2,
		devices: generateDevices("gen2"),
	},
};

export default setupGuideData;

export type genSetupGuideData = {
	genProps: genProps;
	devices: deviceParams[];
};

function generateDevices(gen: genName) {
	return (
		["router", "windows", "android", "linux", "ios"] as deviceName[]
	).map((device) => ({
		device,
		gen,
	}));
}

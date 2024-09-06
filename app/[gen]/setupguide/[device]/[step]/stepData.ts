import { StaticImageData } from "next/image";
import { deviceParams } from "../deviceData";
import routerSteps from "./routerSteps";
import windowsSteps from "./windowsSteps";

export type stepName = "step1" | "step2" | "step3" | "step4";
export type stepParam = { step: stepName };

const stepData: { gen1: deviceSteps } = {
	gen1: {
		router: routerSteps.gen1,
		windows: windowsSteps.gen1,
	},
};

export default stepData;

export interface stepParams extends deviceParams {
	step: stepName;
	devicesSteps: deviceSteps[];
}

export type deviceSteps = {
	router?: Steps;
	windows?: Steps;
	android?: Steps;
	linux?: Steps;
	ios?: Steps;
};

export type Steps = {
	step1: Step[];
	step2: Step[];
	step3: Step[];
	step4?: Step[];
	step5?: Step[];
};

export type Step = {
	type: "text" | "screenshot" | "link";
	data:
		| string
		| StaticImageData
		| {
				href: string;
				text: string;
		  };
};

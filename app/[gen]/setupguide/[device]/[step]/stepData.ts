import { deviceName } from "@/app/[gen]/genData";
import { deviceParams } from "../deviceData";

export type stepName = "step1" | "step2" | "step3" | "step4";
export type stepParam = { step: stepName };

const stepData: { gen1: deviceSteps } = {
	gen1: {
		router: {
			step1: [
				{
					data: "this is router's step1's first step",
					type: "text",
				},
				{
					data: "this is router's step1's second step",
					type: "text",
				},
				{
					data: "this is router's step1's third step",
					type: "text",
				},
			],
			step2: [
				{
					data: "this is router's step2's first step",
					type: "text",
				},
				{
					data: "this is router's step2's second step",
					type: "text",
				},
				{
					data: "this is router's step2's third step",
					type: "text",
				},
			],
			step3: [
				{
					data: "this is router's step3's first step",
					type: "text",
				},
				{
					data: "this is router's step3's second step",
					type: "text",
				},
				{
					data: "this is router's step3's third step",
					type: "text",
				},
			],
		},
		windows: {
			step1: [
				{
					data: "this is windows' step1's first step",
					type: "text",
				},
				{
					data: "this is windows' step1's second step",
					type: "text",
				},
				{
					data: "this is windows' step1's third step",
					type: "text",
				},
			],
			step2: [
				{
					data: "this is windows' step2's first step",
					type: "text",
				},
				{
					data: "this is windows' step2's second step",
					type: "text",
				},
				{
					data: "this is windows' step2's third step",
					type: "text",
				},
			],
			step3: [
				{
					data: "this is windows' step3's first step",
					type: "text",
				},
				{
					data: "this is windows' step3's second step",
					type: "text",
				},
				{
					data: "this is windows' step3's third step",
					type: "text",
				},
			],
		},
		android: {
			step1: [
				{
					data: "this is android's step1's first step",
					type: "text",
				},
				{
					data: "this is android's step1's second step",
					type: "text",
				},
				{
					data: "this is android's step1's third step",
					type: "text",
				},
			],
			step2: [
				{
					data: "this is android's step2's first step",
					type: "text",
				},
				{
					data: "this is android's step2's second step",
					type: "text",
				},
				{
					data: "this is android's step2's third step",
					type: "text",
				},
			],
		},
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
	step2?: Step[];
	step3?: Step[];
	step4?: Step[];
};

export type Step = {
	type: "text" | "screenshot";
	data: string;
};

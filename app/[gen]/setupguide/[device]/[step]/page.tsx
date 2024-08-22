import { genName } from "@/app/appTypes";
import React from "react";
import stepData, { deviceSteps, Step, stepName, Steps } from "./stepData";
import { deviceName } from "@/app/[gen]/genData";
import Image from "next/image";

//TODO implement an appropriate design with the inputed data

const StepPage = ({
	params,
}: {
	params: { step: stepName; gen: genName; device: deviceName };
}) => {
	const steps: Step[] = (stepData.gen1 as any)[params.device][params.step];
	return (
		<div>
			{steps.map((s) =>
				s.type == "text" ? (
					<p>{s.data}</p>
				) : (
					<Image {...{ alt: "step", src: s.data }} />
				)
			)}
		</div>
	);
};

export default StepPage;

export function generateStaticParams() {
	return Object.keys(stepData.gen1).flatMap((devName: string) =>
		Object.keys(stepData.gen1[devName as deviceName] as any).map(
			(stepName) => ({
				gen: "gen1",
				device: devName,
				step: stepName,
			})
		)
	);
}

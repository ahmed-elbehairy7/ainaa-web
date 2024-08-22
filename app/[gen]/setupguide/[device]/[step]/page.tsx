import { genName } from "@/app/appTypes";
import React from "react";
import stepData, { Step, stepName } from "./stepData";
import { deviceName } from "@/app/[gen]/genData";
import Image from "next/image";

//TODO: implement an appropriate design with the inputed data
//TODO: implement a 

const StepPage = ({
	params,
}: {
	params: { step: stepName; gen: genName; device: deviceName };
}) => {
	const substeps: Step[] = (stepData.gen1 as any)[params.device][params.step];
	return (
		<div>
			{substeps.map((s, i) =>
				s.type == "text" ? (
					<p key={i}>{s.data}</p>
				) : (
					<Image {...{ alt: "step alt", src: s.data, key: i }} />
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

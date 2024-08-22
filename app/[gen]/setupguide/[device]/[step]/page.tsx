import { genName } from "@/app/appTypes";
import React from "react";
import stepData, { Step, stepName } from "./stepData";
import { deviceName } from "@/app/[gen]/genData";
import Image from "next/image";
import Link from "next/link";
import DeviceCard from "@/app/components/DeviceCard";

//TODO: implement an appropriate design with the inputed data
//TODO: implement a

const StepPage = ({
	params,
}: {
	params: { step: stepName; gen: genName; device: deviceName };
}) => {
	const devSteps = (stepData.gen1 as any)[params.device];
	const substeps: Step[] = devSteps[params.step];
	const last = Object.keys(devSteps).length;
	const current = Number.parseInt(params.step.charAt(4));
	return (
		<div>
			<DeviceCard {...{ device: params.device, gen: params.gen }} />
			{substeps.map((s, i) =>
				s.type == "text" ? (
					<p key={i}>{s.data}</p>
				) : (
					<Image {...{ alt: "step alt", src: s.data, key: i }} />
				)
			)}
			{stepsNavigate(() => current > 1, -1)}
			{stepsNavigate(() => current < last, 1)}
		</div>
	);

	function stepsNavigate(validate: Function, navTo: number) {
		return (
			validate() && (
				<Link
					href={`/${params.gen}/setupguide/${params.device}/step${
						current + navTo
					}`}
				>
					<p>{navTo == 1 ? "التالي" : "السابق"}</p>
				</Link>
			)
		);
	}
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

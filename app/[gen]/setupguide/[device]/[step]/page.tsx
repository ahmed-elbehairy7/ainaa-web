import { deviceName, genName } from "@/app/appTypes";
import React from "react";

const StepPage = ({
	params,
}: {
	params: { step: string; gen: genName; device: deviceName };
}) => {
	return (
		<div>
			<p>{params.gen}</p>
			<p>{params.device}</p>
			<p>{params.step}</p>
		</div>
	);
};

export default StepPage;

export function generateStaticParams() {
	return [1, 2, 3, 4, 5].map((n) => ({
		step: n.toString(),
		gen: "gen1",
		device: "windows",
	}));
}

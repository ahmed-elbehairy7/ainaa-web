import { genName } from "@/app/appTypes";
import React from "react";
import { genData, gensParams } from "@/app/[gen]/genData";
import setupValuesData, { levelSetupValues } from "./setupValuesData";

// TODO: implement an appropriate design

const SetupValuesPage = ({ params }: { params: { gen: genName } }) => {
	const setupValues = setupValuesData[params.gen];
	const gen = genData[params.gen];
	return (
		<div>
			<h1>{gen.ar}</h1>
			<div className="flex-row flex">
				{Object.keys(setupValues).map((valuesKey) => {
					const values: levelSetupValues =
						setupValues[valuesKey as "high" | "low"];
					return (
						<div>
							<h3>{values.ar.title}</h3>
							<h3>{values.subdomain + ".mafazaa.com"}</h3>
							<h3>categories</h3>
							{values.categories.map((e, i) => (
								<p key={i}>{e}</p>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SetupValuesPage;

export function generateStaticParams() {
	return gensParams;
}

import { genName } from "@/app/appTypes";
import React from "react";
import { genData, gens } from "@/app/[gen]/genData";
import setupValuesData from "./setupValuesData";

const SetupValuesPage = ({ params }: { params: { gen: genName } }) => {
	const setupValues = setupValuesData[params.gen as "gen1"];
	const generation = genData[params.gen];
	return (
		<div>
			<h1>{generation.ar}</h1>
			<div className="flex-row flex">
				<div>
					<h3>{setupValues.low.ar.title}</h3>
					<h3>{setupValues.low.subdomain + ".mafazaa.com"}</h3>
					<h3>categories</h3>
					{setupValues.low.categories.map((e) => (
						<p>{e}</p>
					))}
				</div>
				<div>
					{setupValues.high.ar.title}
					<h3>{setupValues.high.subdomain + ".mafazaa.com"}</h3>
					<h3>categories</h3>
					{setupValues.high.categories.map((e) => (
						<p>{e}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default SetupValuesPage;

export function generateStaticParams() {
	return gens;
}

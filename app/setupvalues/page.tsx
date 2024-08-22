import { genName } from "@/app/appTypes";
import React from "react";
import { genData, gensParams } from "@/app/[gen]/genData";
import setupValuesData, { levelSetupValues } from "./setupValuesData";

// TODO: implement an appropriate design

const SetupValuesPage = () => {
	return (
		<div>
			<h1>تفاصيل مصتويات الحماية</h1>
			<h1>الجيل الأول</h1>
			<div className="flex-row flex">
				{Object.keys(setupValuesData.gen1).map((valuesKey) => {
					const values: levelSetupValues =
						setupValuesData.gen1[valuesKey as "high" | "low"];
					return (
						<div>
							<h3>{values.ar.title}</h3>
							<h3>{values.subdomain + ".mafazaa.com"}</h3>
							<h3>primary dns server: {values.primary}</h3>
							<h3>secondary dns server: {values.secondary}</h3>
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

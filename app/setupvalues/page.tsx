import { genName } from "@/app/appTypes";
import React from "react";
import { genData, gensParams } from "@/app/[gen]/genData";
import setupValuesData, { levelSetupValues } from "./setupValuesData";
import Table from "../components/Table";

// TODO: implement an appropriate design

const SetupValuesPage = () => {
	return (
		<div className="my-8 flex flex-col items-center">
			<h1 className="text-center text-3xl md:text-4xl mb-6">
				تفاصيل مستويات الحماية
			</h1>
			<h2 className="text-center text-2xl md:text-3xl  px-4 py-px mb-4 font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
				الجيل الأول
			</h2>
			<div className="flex-col gap-8 flex">
				{Object.keys(setupValuesData.gen1).map((valuesKey, index) => {
					const values: levelSetupValues =
						setupValuesData.gen1[valuesKey as "high" | "low"];
					return (
						<Table
							key={index}
							title={values.ar.title}
							domain={values.subdomain + ".mafazaa.com"}
							primary={values.primary}
							secondary={values.secondary}
							categories={values.categories}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SetupValuesPage;

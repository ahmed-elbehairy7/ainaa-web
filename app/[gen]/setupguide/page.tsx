import React from "react";
import CardGen from "@/app/components/GenCard";
import DeviceCard from "@/app/components/DeviceCard";
import { gensParams } from "../genData";
import { genName } from "@/app/appTypes";
import setupGuideData, { genSetupGuideData } from "./setupGuideData";
import LearnProtection from "@/app/components/LearnProtection";

function Page({ params }: { params: { gen: genName } }) {
	const g: genSetupGuideData = setupGuideData[params.gen];
	return (
		<div
			className="flex flex-col items-center justify-center mb-0 mt-8 mx-auto gap-8 "
			dir="rtl"
		>
			<CardGen {...g.genProps} />
			<h1>أي جهاز تريد أن تحمي؟</h1>

			<div className=" w-4/5 grid grid-cols-3 gap-4">
				{g.devices.map((d, i) => (
					<DeviceCard {...d} key={i} />
				))}
			</div>
			<LearnProtection {...{ gen: params.gen }} />
		</div>
	);
}

export default Page;

export async function generateStaticParams() {
	return gensParams;
}

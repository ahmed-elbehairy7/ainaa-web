import React from "react";
import CardGen from "@/app/components/GenCard";
import DeviceCard from "@/app/components/DeviceCard";
import { genData } from "../genData";
import { genName } from "@/app/appTypes";

function Page({ params }: { params: { gen: genName } }) {
	const g = genData[params.gen];
	return (
		<div
			className="flex flex-col items-center justify-center mb-0 mt-8 mx-auto gap-8 "
			dir="rtl"
		>
			<CardGen {...g} />
			<h1>أي جهاز تريد أن تحمي؟</h1>

			<div className=" w-4/5 grid grid-cols-3 gap-4">
				{g.devices.map((d) => (
					<DeviceCard {...d} />
				))}
			</div>
		</div>
	);
}

export default Page;

export async function generateStaticParams() {
	return Object.keys(genData).map((gen) => ({ gen }));
}

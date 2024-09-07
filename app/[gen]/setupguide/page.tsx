import React from "react";
import CardGen from "@/app/components/GenCard";
import DeviceCard from "@/app/components/DeviceCard";
import { gensParams } from "../genData";
import { genName } from "@/app/appTypes";
import setupGuideData, { genSetupGuideData } from "./setupGuideData";
import LearnProtection from "@/app/components/LearnProtection";

function Page({ params }: { params: { gen: genName } }) {
	const genGuide: genSetupGuideData = setupGuideData[params.gen];
	return (
		<div
			className="flex flex-col items-center justify-center my-8 mx-auto gap-8 "
			dir="rtl"
		>
			<CardGen {...genGuide.genProps} />
			<h1 className="inline-block px-4 py-2 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
				بأي جهاز ستبدأ إن شاء الله؟
			</h1>
			<p className="text-center md:font-semibold text-sm md:text-lg bg-purple-50 border border-purple-300 text-purple-700 p-4 rounded-lg w-3/4">
				نوصي بتفعيل الحماية على جميع الأجهزة و عدم الإكتفاء بجهاز واحد
				فلا يوجد حماية 100% ولكن هي طبقات
			</p>
			<div className=" w-4/5 grid grid-cols-2 lg:grid-cols-3 gap-4">
				{genGuide.devices.map((device, i) => (
					<DeviceCard {...device} key={i} />
				))}
			</div>
			<LearnProtection />
		</div>
	);
}

export default Page;

export async function generateStaticParams() {
	return gensParams;
}

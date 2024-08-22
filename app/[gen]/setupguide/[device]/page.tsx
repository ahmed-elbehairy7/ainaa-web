import React from "react";
import CardDevice from "@/app/components/DeviceCard";
import deviceData, { deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import LearnProtection from "@/app/components/LearnProtection";
import Link from "next/link";

// TODO: add an iframe for the uploaded video and let the user choose between the two options

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
	return (
		<div className="flex flex-col items-center justify-center  mt-8  gap-8 ">
			<CardDevice {...params} />
			<div className="w-full ">
				{/* <Steps activeGen={params.gen} /> */}
			</div>
			<p>iframe somewhere here...</p>
			<Link href={`/${params.gen}/setupguide/${params.device}/step1`}>
				<p>إبدأ في الخطوات</p>
			</Link>

			<LearnProtection {...{ gen: params.gen }} />
		</div>
	);
}

export default Page;

export async function generateStaticParams() {
	return gensParams.flatMap((gen: genParam) =>
		deviceData[gen.gen].map((device: deviceParams) => ({
			gen: gen.gen,
			device: device.device,
		}))
	);
}

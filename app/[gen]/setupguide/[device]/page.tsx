import React from "react";
import CardDevice from "@/app/components/DeviceCard";
import deviceData, { deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import LearnProtection from "@/app/components/LearnProtection";

// TODO: add an iframe for the uploaded video and let the user choose between the two options

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
	return (
		<div className="flex flex-col items-center justify-center  mt-8  gap-8 ">
			<CardDevice {...params} />
			<div className="w-full ">
				{/* <Steps activeGen={params.gen} /> */}
			</div>
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

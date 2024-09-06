import React from "react";
import DeviceCard from "@/app/components/DeviceCard";
import deviceData, { deviceParam, deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import LearnProtection from "@/app/components/LearnProtection";
import Link from "next/link";

function Page({ params }: DevicePageProps) {
	const dev = (deviceData[params.gen] as Array<deviceParams>).find(
		(value) => value.device === params.device
	) as deviceParams;
	return (
		<div className="flex flex-col items-center justify-center my-8 gap-8 ">
			<DeviceCard {...{ gen: params.gen, device: params.device }} />
			{dev.embeddedVideo !== undefined && (
				<div className="flex justify-center items-center w-full h-full">
					<iframe
						id="player"
						className=" w-fit h-fit "
						{...dev.embeddedVideo}
						loading="lazy"
						allowFullScreen
					></iframe>
				</div>
			)}
			<Link
				href={`/${params.gen}/setupguide/${params.device}/step1`}
				className="flex items-center justify-center w-auto h-8 md:h-12 px-3 md:px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-bright-green hover:bg-teal-600 focus:shadow-outline focus:outline-none"
			>
				<p>إبدأ في الخطوات</p>
			</Link>

			<LearnProtection />
		</div>
	);
}

type DevicePageProps = {
	params: {
		device: deviceName;
		gen: genName;
	};
};

export default Page;

export async function generateStaticParams() {
	return gensParams.flatMap((gen: genParam) =>
		deviceData[gen.gen].map((device: deviceParams) => ({
			gen: gen.gen,
			device: device.device,
		}))
	);
}

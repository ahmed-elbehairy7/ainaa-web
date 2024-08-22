import React, { useEffect, useState } from "react";
import { mobile, router, windows, GEN1, GEN2 } from "@/app/data";
import Steps from "@/app/components/Steps";
import CardDevice, { deviceCardProps } from "@/app/components/DeviceCard";
import { notFound } from "next/navigation";
import deviceData from "./deviceData";
import { deviceName, genName } from "@/app/appTypes";

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
	return (
		<div className="flex flex-col items-center justify-center  mt-8  gap-8 ">
			<CardDevice {...{ name: params.device, gen: params.gen }} />
			<div className="w-full ">
				{/* <Steps activeGen={params.gen} /> */}
			</div>
		</div>
	);
}

export default Page;

export async function generateStaticParams() {
	return Object.keys(deviceData).flatMap((gen: any) =>
		deviceData[gen as genName].map((device: deviceCardProps) => ({
			gen,
			device: device.name,
		}))
	);
}

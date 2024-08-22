import Image from "next/image";
import Link from "next/link";
import React from "react";
import { deviceParams } from "../[gen]/setupguide/[device]/deviceData";

// TODO: cards similar to this link: https://www.opendns.com/setupguide/
// TODO: have proper icons for linux and ios
// TODO: make icon style only outlines like the link above
// TODO: implement the comming soon card

function DeviceCard({ device, gen, soon }: deviceParams) {
	return (
		<Link
			href={`/${gen}/setupguide/${device}`}
			className="p-5 lg:px-12 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 text-center cursor-pointer hover:bg-slate-50 active:shadow-inner flex flex-col gap-4"
		>
			<div className=" flex justify-center items-center gap-4">
				<Image
					src={
						["android", "windows", "router"].includes(device)
							? require(`@/public/${device}.svg`)
							: require(`@/public/wifi.svg`)
					}
					alt={device}
					className=" "
					width={25}
					height={25}
				/>

				<h3 className="text-lg font-bold  capitalize">{device}</h3>
				{soon && <p>comming soon</p>}
			</div>
		</Link>
	);
}

export default DeviceCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { deviceParams } from "../[gen]/setupguide/[device]/deviceData";

function DeviceCard({ device, gen, soon }: deviceParams) {
	return (
		<Link
			href={
				soon === true ? `/commingSoon` : `/${gen}/setupguide/${device}`
			}
			className="p-4 lg:px-8 duration-300 transform bg-white border border-[#434356] text-[#434356] shadow-sm hover:-translate-y-2 text-center cursor-pointer hover:bg-slate-50 active:shadow-inner flex flex-col gap-4  justify-center items-center "
		>
			<div className=" flex flex-col justify-center items-center gap-4">
				<Image
					src={require(`@/public/${device}.svg`)}
					alt={device}
					className="object-contain "
					width={100}
					height={100}
				/>

				<h3 className="text-lg font-bold capitalize">{device}</h3>
				{soon && (
					<p className="flex items-center justify-center text-xs md:text-base w-fit h-8 md:h-12 px-2 md:px-6 md:tracking-wide text-white transition duration-200 shadow-md bg-deep-purple rounded-full font-medium md:font-bold">
						comming soon
					</p>
				)}
			</div>
		</Link>
	);
}

export default DeviceCard;

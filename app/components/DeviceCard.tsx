import Image from "next/image";
import Link from "next/link";
import React from "react";
import { genName } from "../appTypes";

function DeviceCard({ name, gen }: deviceCardProps) {
	return (
		<Link
			href={`/${gen}/setupguide/${name}`}
			className="p-5 lg:px-12 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 text-center cursor-pointer hover:bg-slate-50 active:shadow-inner flex flex-col gap-4"
		>
			<div className=" flex justify-center items-center gap-4">
				<Image
					src={require(`@/public/${name}.svg`)}
					alt={name}
					className=" "
					width={25}
					height={25}
				/>

				<h3 className="text-lg font-bold  capitalize">{name}</h3>
			</div>
		</Link>
	);
}

export default DeviceCard;

export type deviceCardProps = {
	name: deviceName;
	gen: genName;
};

export type deviceName = "windows" | "linux" | "router" | "android" | "ios";

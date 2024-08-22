import Link from "next/link";
import React from "react";
import { genName } from "../appTypes";

function GenCard({ name, ar, description, soon }: GenCardProps) {
	// TODO: make a better design for comming soon gen2
	return (
		<Link
			href={`/${name}/setupguide/`}
			className="p-5 lg:px-12 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 text-center cursor-pointer hover:bg-slate-50 active:shadow-inner"
		>
			<p className="text-lg font-bold leading-5 mb-2">{ar}</p>
			<div className="text-sm text-gray-900 flex flex-col gap-2">
				<p>{`${description}`}</p>
				{soon && <p>قريبا بإذن الله</p>}
			</div>
		</Link>
	);
}

export default GenCard;

export type GenCardProps = {
	name: genName;
	ar: string;
	description: string;
	soon?: true;
};

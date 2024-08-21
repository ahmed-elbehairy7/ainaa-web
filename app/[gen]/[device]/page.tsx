import React, { useEffect, useState } from "react";
import { mobile, router, windows, GEN1, GEN2 } from "@/app/data";
import Steps from "@/app/components/Steps";
import CardDevice from "@/app/components/CardDevice";
import { notFound } from "next/navigation";

function Page({ params }: { params: { device: string; gen: string } }) {
	return (
		<div className="flex flex-col items-center justify-center  mt-8  gap-8 ">
			<p>{params.gen}</p>
			<p>{params.device}</p>
			{/* <CardDevice
				device={params.device}
				href={`/${params.gen}/${params.device}`}
			/>
			<div className="w-full ">
				<Steps activeGen={activeGen} />
			</div> */}
		</div>
	);
}

export default Page;

export async function generateStaticParams() {
	return [
		{ gen: "gen1", device: "mobile" },
		{ gen: "gen1", device: "router" },
		{ gen: "gen1", device: "windows" },
		{ gen: "gen2", device: "mobile" },
		{ gen: "gen2", device: "router" },
		{ gen: "gen2", device: "windows" },
	];
}

import React from "react";
import CardGen from "@/app/components/GenCard";
import DeviceCard from "@/app/components/DeviceCard";
import { gensParams } from "../genData";
import { genName } from "@/app/appTypes";
import setupGuideData, { genSetupGuideData } from "./setupGuideData";
import LearnProtection from "@/app/components/LearnProtection";
import Link from "next/link";

function Page({ params }: { params: { gen: genName } }) {
  const genGuide: genSetupGuideData = setupGuideData[params.gen];
  return (
    <div
      className="flex flex-col items-center justify-center my-8 mx-auto gap-8 "
      dir="rtl"
    >
      <CardGen {...genGuide.genProps} />
      <h1 className="inline-block p-4 mb-4 text-2xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
        أي جهاز تريد أن تحمي؟
      </h1>

      <div className=" w-4/5 grid grid-cols-3 gap-4">
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

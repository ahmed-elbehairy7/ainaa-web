import React from "react";
import CardGen from "@/app/components/GenCard";
import DeviceCard from "@/app/components/DeviceCard";
import { gensParams } from "../genData";
import { genName } from "@/app/appTypes";
import setupGuideData, { genSetupGuideData } from "./setupGuideData";
import LearnProtection from "@/app/components/LearnProtection";

function Page({ params }: { params: { gen: genName } }) {
  const genGuide: genSetupGuideData = setupGuideData[params.gen];

  return (
    <div
      className="flex flex-col items-center mb-10 mx-auto gap-10 px-4"
      dir="rtl"
    >

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
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

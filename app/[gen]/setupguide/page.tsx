import React from "react";
import CardGen from "@/app/components/GenCard";
import DeviceCard from "@/app/components/DeviceCard";
import { gensParams } from "../genData";
import { genName } from "@/app/appTypes";
import setupGuideData, { genSetupGuideData } from "./setupGuideData";
import LearnProtection from "@/app/components/LearnProtection";
import Header from "@/app/components/Header";

function Page({ params }: { params: { gen: genName } }) {
  const genGuide: genSetupGuideData = setupGuideData[params.gen];

  return (
    <div
      className="flex flex-col items-center mb-10 mx-auto gap-10 px-4"
      dir="rtl"
    >
      <CardGen {...genGuide.genProps} />

      <h1 className="px-5 py-3 text-2xl font-semibold tracking-wide text-white bg-teal-500 rounded-lg shadow-md text-center">
        بأي جهاز ستبدأ إن شاء الله؟
      </h1>

      <p className="text-center md:font-semibold text-sm md:text-lg bg-teal-50 border border-teal-300 text-teal-700 p-4 rounded-lg max-w-screen-md">
        نوصي بتفعيل الحماية على جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا توجد
        حماية 100%، ولكنها طبقات متعددة ترفع من مستوى الأمان.
      </p>

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

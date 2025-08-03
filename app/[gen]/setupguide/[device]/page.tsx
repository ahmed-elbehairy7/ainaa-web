import React from "react";
import DeviceCard from "@/app/_components/DeviceCard";
import deviceData, { deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import Link from "next/link";
import OpenEnterYourNumberBtn from "./_components/OpenEnterYourNumberBtn";

const deviceMessages: Record<string, string> = {
  android: "تحميل برنامج الاندرويد",
  windows: "تحميل برنامج الويندوز",
};

export async function generateStaticParams() {
  return gensParams.flatMap((gen: genParam) =>
    deviceData[gen.gen].map((device: deviceParams) => ({
      gen: gen.gen,
      device: device.device,
    }))
  );
}

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  const dev = (deviceData[params.gen] as deviceParams[]).find(
    (value) => value.device === params.device
  ) as deviceParams;

  return (
    <div
      className="flex flex-col items-center gap-10 mb-10 px-4 my-10 "
      dir="rtl"
    >
      <DeviceCard {...params} />
      {/* Header */}
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        شرح خطوات الراوتر
      </h1>
      <p className="text-center text-gray-700 w-11/12 md:w-3/4">
        نوصي بتفعيل الحماية على جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا توجد
        حماية 100%، ولكنها طبقات متعددة ترفع من مستوى الأمان.
      </p>

      {/* Video Section */}
      {dev.embeddedVideo !== undefined && (
        <div className="flex flex-col items-center gap-4 ">
          <iframe
            {...dev.embeddedVideo}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            id="player"
            className="w-full max-w-[400px] h-[500px] sm:h-[550px] md:h-[600px] aspect-[9/16] rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
        <OpenEnterYourNumberBtn>إبدأ في الخطوات</OpenEnterYourNumberBtn>
      </div>
    </div>
  );
}

export default Page;

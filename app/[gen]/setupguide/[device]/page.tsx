import React from "react";
import DeviceCard from "@/app/components/DeviceCard";
import deviceData, { deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import LearnProtection from "@/app/components/LearnProtection";
import Link from "next/link";

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  return (
    <div className="flex flex-col items-center gap-10 my-10 px-4">
      <DeviceCard {...params} />

      <div className="w-full flex justify-center">
        <iframe
          src="https://player.vimeo.com/video/1003172023?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="w-full md:w-[500px] lg:w-[750px] h-64 md:h-72 lg:h-96 rounded-lg shadow-lg"
          title="شرح إعدادات الحماية"
          allowFullScreen
        ></iframe>
      </div>

      <Link
        href={`/${params.gen}/setupguide/${params.device}/step1`}
        className="flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md transition-all duration-300 transform hover:from-green-600 hover:to-teal-600 hover:-translate-y-1 hover:shadow-lg active:scale-95"
      >
        إبدأ في الخطوات 🚀
      </Link>

      <LearnProtection />
    </div>
  );
}

export default Page;

export async function generateStaticParams() {
  return gensParams.flatMap((gen: genParam) =>
    deviceData[gen.gen].map((device: deviceParams) => ({
      gen: gen.gen,
      device: device.device,
    }))
  );
}

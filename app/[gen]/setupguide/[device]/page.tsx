import React from "react";
import DeviceCard from "@/app/components/DeviceCard";
import deviceData, { deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import LearnProtection from "@/app/components/LearnProtection";
import Link from "next/link";
import { googleForm } from "@/importantLinks";

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  const dev = (deviceData[params.gen] as deviceParams[]).find(
    (value) => value.device === params.device
  ) as deviceParams;

  return (
    <div className="flex flex-col items-center gap-10 mb-10 px-4">
      <DeviceCard {...params} />
      {dev.embeddedVideo !== undefined && (
        <div className="flex flex-col items-center gap-4">
          <iframe
            {...dev.embeddedVideo}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            id="player"
            className="w-full  h-64 md:h-72 lg:h-96 rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>

          <div className="text-center max-w-2xl p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-500">
            <h2 className="text-xl font-semibold text-white">
              📝 سجل بياناتك للاستفادة الكاملة من الخدمة!
            </h2>
            <p className="text-white mt-2">
              حتى نتمكن من تحسين الخدمة والتواصل معك عند الحاجة، يمكنك تسجيل
              بياناتك الآن بسهولة. 🚀
            </p>
          </div>

          <Link
            href={googleForm}
            target="_blank"
            className="flex items-center justify-center px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md transition-all duration-300 transform hover:from-blue-600 hover:to-indigo-600 hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            📝 تسجيل بياناتك الآن
          </Link>
        </div>
      )}

      <Link
        href={`/${params.gen}/setupguide/${params.device}/step1`}
        className="w-full max-w-2xl flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md transition-all duration-300 transform hover:from-green-600 hover:to-teal-600 hover:-translate-y-1 hover:shadow-lg active:scale-95"
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

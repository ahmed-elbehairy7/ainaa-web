import React from "react";
import DeviceCard from "@/app/_components/DeviceCard";
import deviceData, { deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import Link from "next/link";
import { googleForm } from "@/importantLinks";

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

      {/* Google Form */}
      <div className="text-center max-w-2xl p-6 rounded-lg shadow-md bg-gradient-to-r from-red-600 to-red-700">
        <h2 className="text-xl font-semibold text-white">
          📝 سجل بياناتك للاستفادة الكاملة من الخدمة!
        </h2>
        <p className="text-white mt-2">
          حتى نتمكن من تحسين الخدمة والتواصل معك عند الحاجة، يمكنك تسجيل بياناتك
          الآن بسهولة. 🚀
        </p>
      </div>

      <Link
        href={googleForm}
        target="_blank"
        className="flex items-center justify-center px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-md transition-all duration-300 transform hover:from-red-600 hover:to-red-600 hover:-translate-y-1 hover:shadow-lg active:scale-95"
      >
        📝 تسجيل بياناتك الآن
      </Link>

      {/* Links navigation  */}
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
        <Link
          href={`/${params.gen}/setupguide/${params.device}/step1`}
          className="min-w-[650px] text-center bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          إبدأ في الخطوات
        </Link>
      </div>
    </div>
  );
}

export default Page;

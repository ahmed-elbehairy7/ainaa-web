import React from "react";
import DeviceCard from "@/app/_components/DeviceCard";
import deviceData, { deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import LearnProtection from "@/app/_components/LearnProtection";
import Link from "next/link";
import Image from "next/image";
import OtherDeviceButton from "@/app/_components/otherDeviceButton";
import setupGuideData, { genSetupGuideData } from "../setupGuideData";

const deviceMessages: Record<string, string> = {
  android: "تحميل برنامج الاندرويد",
  windows: "تحميل برنامج الويندوز",
};


function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  const dev = (deviceData[params.gen] as deviceParams[]).find(
    (value) => value.device === params.device
  ) as deviceParams;
  console.log("dev", dev)
  const genGuide: genSetupGuideData = setupGuideData[params.gen];
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col text-center">
        <h1 className="font-bold text-3xl md:text-4xl tracking-widest">
          {deviceMessages[dev.device] ?? "تفعيل الحماية"}
        </h1>
        <h2 className="md:text-xl text-lg break-normal max-w-2xl tracking-widest mt-2 mb-10 text-gray-700 ">
          نوصي بتفعيل الحماية علي جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا توجد حماية 100%، ولكنها طبقات متعددة ترفع من مستوي الأمان
        </h2>
      </div>
      <div className="flex flex-col lg:mx-0 mx-5">
        <div className="flex flex-col-reverse md:flex-row-reverse  justify-between items-center gap-10">
          <div className="text-right max-w-xl">
            <h1 className="lg:text-3xl text-2xl font-normal text-gray-700 mb-6 leading-relaxed tracking-widest ">
              حماية نفسك و أطفالك و أحبابك <br />
              على بعد خطوات!
            </h1>
            <ul className="text-gray-700 text-lg mb-6 space-y-2 pr-2 font-extrabold   ">
              <li>• ميزة رقم واحد عن التطبيق</li>
              <li>• ميزة رقم اثنان عن التطبيق</li>
              <li>• ميزة رقم ثلاثة عن التطبيق</li>
            </ul>
            <div className='flex'>
              <Link
                href={`/gen1/setupguide/${dev.device}`}
                className='text-white py-4 px-14 rounded-xl transition-all duration bg-gradient-to-l
                from-[#E0462D] to-[#A73826]
                hover:from-[#E0462D] hover:to-[#000]
                mb-4 md:mb-0
                '
              >
                حمل التطبيق
              </Link>
            </div>
          </div>
          <div>
            <div className='relative md:w-[340px] md:h-[340px] w-[160px] h-[160px] flex justify-center items-center transition-all duration-300 group-hover:scale-105'>
              <Image
                src={require(`@/public/devices/orange-${dev.device}.svg`)}
                alt={dev.device}
                className='object-contain drop-shadow-md transition-all duration-300 md:ml-24'
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className='flex md:justify-end sm:justify-start mb-4'>
          <Link
            href='/support'
            className='text-white py-4 px-8 rounded-xl transition-colors'
            style={{
              background: 'linear-gradient(180deg, #E0462D 0%, #A73826 100%)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            خدمة العملاء
          </Link>
        </div>
        <div className="flex justify-start flex-col">
          <h1 className="text-xl font-bold border-b-2 border-gray-400 w-fit pl-20 pb-2">
            أجهزة أخري
          </h1>
        </div>
        <div className="flex flex-row justify-start pt-4 pb-0">
          {genGuide.devices
            .filter(
              (device) =>
                !device.soon &&
                ['windows', 'router', 'android'].includes(device.device) &&
                device.device !== dev.device
            )
            .map((device, i, arr) => {
              const borderClass = i !== arr.length - 1 ? 'pl-6 border-l border-gray-300 h-auto my-auto' : '';
              return (
                <div key={i} className={borderClass}>
                  <OtherDeviceButton {...device} />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="flex flex-col items-center gap-10 mb-10 px-4">
  //     <h1></h1>
  //     <DeviceCard {...params} />            {/* The Device Card */}
  //     {dev.embeddedVideo !== undefined && (
  //       <div className="flex flex-col items-center gap-4">
  //         <iframe
  //           {...dev.embeddedVideo}
  //           allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
  //           id="player"
  //           className="w-full max-w-[400px] h-[500px] sm:h-[550px] md:h-[600px] aspect-[9/16] rounded-lg shadow-lg"
  //           allowFullScreen
  //         ></iframe>

  //         <div className="text-center max-w-2xl p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-500">
  //           <h2 className="text-xl font-semibold text-white">
  //             📝 سجل بياناتك للاستفادة الكاملة من الخدمة!
  //           </h2>
  //           <p className="text-white mt-2">
  //             حتى نتمكن من تحسين الخدمة والتواصل معك عند الحاجة، يمكنك تسجيل
  //             بياناتك الآن بسهولة. 🚀
  //           </p>
  //         </div>

  //         <Link
  //           href={googleForm}
  //           target="_blank"
  //           className="flex items-center justify-center px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md transition-all duration-300 transform hover:from-blue-600 hover:to-indigo-600 hover:-translate-y-1 hover:shadow-lg active:scale-95"
  //         >
  //           📝 تسجيل بياناتك الآن
  //         </Link>
  //       </div>
  //     )}

  //     <Link
  //       href={`/${params.gen}/setupguide/${params.device}/step1`}
  //       className="w-full max-w-2xl flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md transition-all duration-300 transform hover:from-green-600 hover:to-teal-600 hover:-translate-y-1 hover:shadow-lg active:scale-95"
  //     >
  //       إبدأ في الخطوات 🚀
  //     </Link>

  //     <LearnProtection />
  //   </div>
  // );
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

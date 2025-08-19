import DeviceCard from "@/app/_components/DeviceCard";
import OtherDeviceButton from "@/app/_components/otherDeviceButton";
import { genName } from "@/app/appTypes";
import { downloadAndroid, downloadWindows } from "@/importantLinks";
import Image from "next/image";
import Link from "next/link";
import { deviceName, genParam, gensParams } from "../../genData";
import setupGuideData, { genSetupGuideData } from "../setupGuideData";
import deviceData, { deviceParams } from "./deviceData";

const deviceMessages: Record<string, string> = {
  android: "تحميل برنامج الاندرويد",
  windows: "تحميل برنامج الويندوز",
};

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  const dev = (deviceData[params.gen] as deviceParams[]).find(
    (value) => value.device === params.device
  ) as deviceParams;
  const genGuide: genSetupGuideData = setupGuideData[params.gen];
  // Only Windows and Android should show the download page
  if (dev.device === "windows" || dev.device === "android") {
    return (
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-3xl md:text-4xl tracking-widest">
            {deviceMessages[dev.device] ?? "تفعيل الحماية"}
          </h1>
          <h2 className="md:text-xl text-lg break-normal max-w-2xl tracking-widest mt-2 mb-10 text-gray-700 ">
            نوصي بتفعيل الحماية علي جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا
            توجد حماية 100%، ولكنها طبقات متعددة ترفع من مستوي الأمان
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
                <li>• حماية الجهاز بالكامل</li>
                <li>• حماية يكاد يستحيل الخروج منها</li>
                <li>• يسمح لك بحجب مواقع معينة</li>
              </ul>
              <div className="flex">
                <Link
                  href={
                    dev.device === "windows"
                      ? downloadWindows
                      : dev.device === "android"
                      ? downloadAndroid
                      : ""
                  }
                  className="text-white py-4 px-14 rounded-xl transition-all duration bg-gradient-to-l
                from-[#E0462D] to-[#A73826]
                hover:from-[#E0462D] hover:to-[#000]
                mb-4 md:mb-0
                "
                >
                  حمل التطبيق
                </Link>
              </div>
            </div>
            <div>
              <div className="relative md:w-[340px] md:h-[340px] w-[160px] h-[160px] flex justify-center items-center transition-all duration-300 group-hover:scale-105">
                <Image
                  src={require(`@/public/devices/orange-${dev.device}.svg`)}
                  alt={dev.device}
                  className="object-contain drop-shadow-md transition-all duration-300 md:ml-24"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className="flex md:justify-end sm:justify-start mb-4">
            <Link
              href="/support"
              className="text-white py-4 px-8 rounded-xl transition-colors"
              style={{
                background: "linear-gradient(180deg, #E0462D 0%, #A73826 100%)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
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
                  ["windows", "router", "android"].includes(device.device) &&
                  device.device !== dev.device
              )
              .map((device, i, arr) => {
                const borderClass =
                  i !== arr.length - 1
                    ? "pl-6 border-l border-gray-300 h-auto my-auto"
                    : "";
                return (
                  <div key={i} className={borderClass}>
                    <OtherDeviceButton {...device} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
  if (dev.device === "router") {
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
          نوصي بتفعيل الحماية على جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا
          توجد حماية 100%، ولكنها طبقات متعددة ترفع من مستوى الأمان.
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
          <Link
            href={"/gen1/setupguide/router/step1"}
            className="min-w-72 text-center bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            إبدأ في الخطوات
          </Link>
        </div>
      </div>
    );
  }
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

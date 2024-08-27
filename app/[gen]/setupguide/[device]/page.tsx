import React from "react";
import CardDevice from "@/app/components/DeviceCard";
import deviceData, { deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import LearnProtection from "@/app/components/LearnProtection";
import Link from "next/link";

// TODO: add an iframe for the uploaded video and let the user choose between the two options

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  return (
    <div className="flex flex-col items-center justify-center  my-8  gap-8 ">
      <CardDevice {...params} />
      <div className="w-full ">{/* <Steps activeGen={params.gen} /> */}</div>
      <iframe
        id="player"
        width="640"
        height="390"
        src="https://www.youtube.com/embed/tUL52ecE508"
      ></iframe>
      <Link
        href={`/${params.gen}/setupguide/${params.device}/step1`}
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-bright-green hover:bg-teal-600 focus:shadow-outline focus:outline-none"
      >
        <p>إبدأ في الخطوات</p>
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

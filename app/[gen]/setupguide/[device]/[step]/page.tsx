import { genName } from "@/app/appTypes";
import React from "react";
import stepData, { Step, stepName } from "./stepData";
import { deviceName } from "@/app/[gen]/genData";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import DeviceCard from "@/app/components/DeviceCard";

const StepPage = ({
  params,
}: {
  params: { step: stepName; gen: genName; device: deviceName };
}) => {
  const devSteps = (stepData.gen1 as any)[params.device];
  const substeps: Step[] = devSteps[params.step];
  const last = Object.keys(devSteps).length;
  const current = Number.parseInt(params.step.charAt(4));
  let currentStep = 0;

  return (
    <div
      className="flex flex-col items-center justify-center my-8 mx-auto gap-8"
      dir="rtl"
    >
      <DeviceCard {...{ device: params.device, gen: params.gen }} />
      <ol className="space-y-4 w-8/12">
        {substeps.map((step, i) =>
          step.type == "text" ? (
            <li key={i}>
              <div
                className="w-full p-4 text-purple-700 border border-purple-300 rounded-lg bg-purple-50"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <span className="sr-only">User info</span>
                  <h3 className="font-medium">
                    {++currentStep}. {step.data as string}
                  </h3>
                </div>
              </div>
            </li>
          ) : step.type === "link" ? (
            <div
              key={i}
              className="w-full p-4 text-purple-700 border border-purple-300 rounded-lg bg-purple-50"
              role="alert"
            >
              <div className="flex items-center justify-between">
                <Link
                  href={(step.data as any).href}
                  target="_blank"
                  className="underline"
                >
                  {(step.data as any).text}
                </Link>
              </div>
            </div>
          ) : (
            // eslint-disable-next-line react/jsx-key
            <Image
              {...{
                alt: "screenshot",
                src: require(`@/public/setupguide/${params.gen}/${params.device}/${params.step}_${step.data}.png`),
                key: i,
              }}
            />
          )
        )}
      </ol>
      <div className="grid grid-cols-2 justify-between items-center gap-6 w-1/2">
        {current > 1 ? (
          <Link
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            href={`/${params.gen}/setupguide/${params.device}/step${
              current - 1
            }`}
          >
            السابق
          </Link>
        ) : (
          <div />
        )}
        {current < last ? (
          <Link
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            href={`/${params.gen}/setupguide/${params.device}/step${
              current + 1
            }`}
          >
            التالي
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default StepPage;

export function generateStaticParams() {
  return Object.keys(stepData.gen1).flatMap((devName: string) =>
    Object.keys(stepData.gen1[devName as deviceName] as any).map(
      (stepName) => ({
        gen: "gen1",
        device: devName,
        step: stepName,
      })
    )
  );
}

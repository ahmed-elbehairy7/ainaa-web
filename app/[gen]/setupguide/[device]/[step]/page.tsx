import { genName } from "@/app/appTypes";
import React from "react";
import stepData, { Step, stepName } from "./stepData";
import { deviceName } from "@/app/[gen]/genData";
import Image from "next/image";
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
  return (
    <div
      className="flex flex-col items-center justify-center my-8 mx-auto gap-8"
      dir="rtl"
    >
      <DeviceCard {...{ device: params.device, gen: params.gen }} />
      <ol className="space-y-4 w-72 md:w-96">
        {substeps.map((step, i) =>
          step.type == "link" ? (
            <li key={i}>
              <div
                className="w-full p-2 md:p-4 text-blue-700 border border-blue-300 rounded-lg bg-blue-50"
                role="alert"
              >
                <div className="flex items-center justify-center">
                  <span className="sr-only">User info</span>
                  <h3 className="font-medium">
                    {i + 1}.{" "}
                    <a
                      href={step.data}
                      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >
                      {step.data}
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ) : step.type == "text" ? (
            <li key={i}>
              <div
                className="w-full p-2 md:p-4 text-purple-700 border border-purple-300 rounded-lg bg-purple-50"
                role="alert"
              >
                <div className="flex items-center justify-start">
                  <span className="sr-only">User info</span>
                  <h3
                    className="font-medium"
                    dangerouslySetInnerHTML={{
                      __html: `${i + 1}. ${step.data}`,
                    }}
                  />
                </div>
              </div>
            </li>
          ) : (
            // eslint-disable-next-line react/jsx-key
            <Image
              {...{ alt: "step alt", src: step.data, key: i }}
              width={500}
              height={300}
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

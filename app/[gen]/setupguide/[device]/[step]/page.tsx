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
  const devSteps = (stepData.gen1 as any)?.[params.device];
  const arabicNumbers = [
    "الأولى",
    "الثانية",
    "الثالثة",
    "الرابعة",
    "الخامسة",
    "السادسة",
    "السابعة",
    "الثامنة",
    "التاسعة",
    "العاشرة",
    "الحادية عشرة",
    "الثانية عشرة",
  ];
  if (!devSteps) {
    return (
      <p className="text-red-500 text-center font-bold text-lg">
        ⚠️ لا توجد بيانات لهذا الجهاز.
      </p>
    );
  }

  const substeps: Step[] = devSteps[params.step] || [];
  const totalSteps = Object.keys(devSteps).length;
  const currentStep = Number(params.step.replace("step", ""));

  return (
    <div
      className="flex flex-col items-center justify-center my-8 mx-auto gap-8"
      dir="rtl"
    >
      <DeviceCard device={params.device} gen={params.gen} />
      {/* رقم الخطوة في الأعلى */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 bg-teal-100 px-6 py-3 rounded-lg shadow-md">
        الخطوة {arabicNumbers[currentStep - 1]} (
        {currentStep.toLocaleString("ar-EG")})
      </h2>

      <ol className="space-y-4 w-8/12">
        {substeps?.map((step, index) => (
          <li key={index}>
            {step.type === "text" ? (
              <div className="w-full p-4 text-teal-700 border border-teal-300 rounded-lg bg-teal-50 shadow-md">
                <h3 className="font-semibold">
                  {index + 1}. {step.data as string}
                </h3>
              </div>
            ) : step.type === "link" ? (
              <div className="w-full p-4 text-teal-700 border border-teal-300 rounded-lg bg-teal-50 shadow-md">
                <Link
                  href={(step.data as any).href}
                  target="_blank"
                  className="underline text-teal-900 hover:text-teal-600"
                >
                  {index + 1}. {(step.data as any).text}
                </Link>
              </div>
            ) : (
              <Image
                alt="screenshot"
                src={require(`@/public/setupguide/${params.gen}/${params.device}/${params.step}_${step.data}.png`)}
                className="rounded-lg shadow-lg border border-gray-200"
              />
            )}
          </li>
        ))}
      </ol>

      {/* أزرار التنقل بين الخطوات */}
      <div className="flex justify-between w-3/4 md:w-1/2">
        {currentStep > 1 ? (
          <Link
            href={`/${params.gen}/setupguide/${params.device}/step${
              currentStep - 1
            }`}
            className="flex-1 flex items-center justify-center px-6 py-3 text-white text-xl font-medium bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 rounded-lg shadow-md transition-all duration-300 mx-2"
          >
            ➡️ السابق
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {currentStep < totalSteps ? (
          <Link
            href={`/${params.gen}/setupguide/${params.device}/step${
              currentStep + 1
            }`}
            className="flex-1 flex items-center justify-center px-6 py-3 text-white text-xl font-medium bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 rounded-lg shadow-md transition-all duration-300 mx-2"
          >
            التالي ⬅️
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
};

export default StepPage;

export function generateStaticParams() {
  return Object.keys(stepData.gen1).flatMap((device) =>
    Object.keys(stepData.gen1[device as deviceName] || {}).map((step) => ({
      gen: "gen1",
      device,
      step,
    }))
  );
}

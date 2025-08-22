import { deviceName } from '@/app/[gen]/genData';
import DeviceCard from '@/app/_components/DeviceCard';
import { genName } from '@/app/appTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import stepData, { Step, stepName } from './stepData';

const StepPage = ({
  params,
}: {
  params: { step: stepName; gen: genName; device: deviceName };
}) => {
  const devSteps = (stepData.gen1 as any)?.[params.device];

  if (!devSteps) {
    return (
      <p className='text-red-500 text-center font-bold text-lg'>
        ⚠️ لا توجد بيانات لهذا الجهاز.
      </p>
    );
  }

  const totalSteps = Object.keys(devSteps).length;
  const currentStep = Number(params.step.replace('step', ''));
  const isLastStep = currentStep === totalSteps;
  const substeps: Step[] = devSteps[params.step] || [];

  return (
    <div
      className='flex flex-col items-center justify-center mb-10 mx-auto my-10 gap-8 px-4'
      dir='rtl'
    >
      <DeviceCard device={params.device} gen={params.gen} />

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-red-700 bg-red-100 px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg shadow-md">
        {`الخطوة ${currentStep}`}
      </h2>

      <ol className="w-full max-w-5xl space-y-4">
        {substeps?.map((step, index) => (
          <li key={index}>
            {step.type === "text" ? (
              <div className="w-full p-3 sm:p-4 text-red-700 border border-red-300 rounded-lg bg-red-50 shadow-md">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                  {index + 1}.{" "}
                  {step.data
                    ?.toString()
                    .split("\n")
                    .map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </h3>
              </div>
            ) : step.type === "link" ? (
              <div className="w-full p-3 sm:p-4 text-red-700 border border-red-300 rounded-lg bg-red-50 shadow-md">
                <Link
                  href={(step.data as any).href}
                  target="_blank"
                  className="underline text-red-900 hover:text-red-600 text-sm sm:text-base md:text-lg block w-full"
                >
                  {index + 1}. {(step.data as any).text}
                </Link>
              </div>
            ) : (
              <Image
                alt="screenshot"
                src={`/setupguide/${params.gen}/${params.device}/${params.step}_${step.data}.png`}
                width={600}
                height={200}
                className="rounded-lg shadow-lg border border-gray-200 mx-auto bg-cover md:bg-contain "
              />
            )}
          </li>
        ))}
      </ol>

      <div className="flex justify-between w-full max-w-5xl gap-3 sm:gap-4 md:gap-6">
        {currentStep > 1 ? (
          <Link
            href={`/${params.gen}/setupguide/${params.device}/step${currentStep - 1
              }`}
            className="flex-1 flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm md:text-xl font-medium bg-gradient-to-r from-red-600 to-red-800 hover:from-red-600 hover:to-red-700 rounded-lg shadow-md transition-all duration-300"
          >
            ➡️ السابق
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {!isLastStep ? (
          <Link
            href={`/${params.gen}/setupguide/${params.device}/step${currentStep + 1
              }`}
            className="flex-1 flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm md:text-xl font-medium bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-600 rounded-lg shadow-md transition-all duration-300"
          >
            التالي ⬅️
          </Link>
        ) : (
          <div className="flex-1">
            <Link
              href="/congratulations"
              className="flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm md:text-xl font-medium bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-600 rounded-lg shadow-md transition-all duration-300"
            >
              التالي ⬅️
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepPage;

export function generateStaticParams() {
  return Object.keys(stepData.gen1).flatMap((device) => {
    const steps = Object.keys(stepData.gen1[device as deviceName] || {});

    if (steps.length < 15) {
      for (let i = steps.length + 1; i <= 15; i++) {
        steps.push(`step${i}`);
      }
    }

    return steps.map((step) => ({
      gen: 'gen1',
      device,
      step,
    }));
  });
}

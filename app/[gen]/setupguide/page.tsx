import React from "react";
import DeviceCard from "@/app/components/DeviceCard";
import { gensParams } from "../genData";
import { genName } from "@/app/appTypes";
import setupGuideData, { genSetupGuideData } from "./setupGuideData";
import Link from "next/link";



function Page({ params }: { params: { gen: genName } }) {
  const genGuide: genSetupGuideData = setupGuideData[params.gen];
  const bgImage = '/background.svg';
  return (
    <div
      className='flex flex-col items-center mb-10 mx-auto gap-10 px-4 max-w-5xl'
      dir='rtl'
      style={{ 
        backgroundImage: `url(${bgImage})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'contain'
      }}
    >
      {/* Header */}
      <div className="text-center">
        <h1 className='text-4xl font-bold mt-8'>
          اختر الجهاز الذي تريد تفعيل الحماية عليه
        </h1>
        <div className="h-[30px]"></div>
        <p className='text-gray-700 mb-6 max-w-3xl text-xl mx-auto'>
          نوصي بتفعيل الحماية على جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا توجد
          حماية 100%. ولكنها طبقات متعددة ترفع من مستوى الأمان.
        </p>
      </div>

      {/* Device Cards - 3 columns on medium screens */}
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6'>
        {genGuide.devices
          .filter(
            (device) =>
              !device.soon &&
              ['windows', 'router', 'android'].includes(device.device)
          )
          .map((device, i) =>
          {
            console.log(device)
            return(
            
            <DeviceCard {...device} key={i} />
          )})}
      </div>
      {/* Buttons Container */}
      <div className='mt-8 flex flex-col w-full'>
        {/* Protection Levels Button - Centered */}
        <div className='flex justify-center'>
          <div className='border-[3px] border-black rounded-xl px-16 py-4 inline-block'>
            <Link href='/setupvalues' className='text-base font-400'>
              مستويات الحماية
            </Link>
          </div>
        </div>

        {/* Customer Service Button - Start */}
        <div className='flex justify-end'>
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
      </div>
    </div>
  );
}

export default Page;

export async function generateStaticParams() {
  return gensParams;
}

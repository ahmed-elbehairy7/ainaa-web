import React from 'react';
import { gensParams } from '../genData';
import { genName } from '@/app/appTypes';
import setupGuideData, { genSetupGuideData } from './setupGuideData';
import Link from 'next/link';
import DeviceCard from '@/app/_components/DeviceCard';

function Page({ params }: { params: { gen: genName } }) {
  const genGuide: genSetupGuideData = setupGuideData[params.gen];
  const bgImage = '/background.svg';
  return (
    <div
      className='flex flex-col items-center mb-6 sm:mb-8 md:mb-10 mx-auto gap-6 sm:gap-8 md:gap-10 px-3 sm:px-4 max-w-5xl'
      dir='rtl'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'contain',
      }}
    >
      <div className='text-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-6 md:mt-8'>
          اختر الجهاز الذي تريد تفعيل الحماية عليه
        </h1>
        <div className='h-[15px] sm:h-[20px] md:h-[30px]'></div>
        <p className='text-gray-700 mb-4 sm:mb-5 md:mb-6 max-w-3xl text-base sm:text-lg md:text-xl mx-auto px-2 sm:px-4'>
          نوصي بتفعيل الحماية على جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا
          توجد حماية 100%. ولكنها طبقات متعددة ترفع من مستوى الأمان.
        </p>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 place-items-center'>
        {genGuide.devices
          .filter(
            (device) =>
              !device.soon &&
              ['windows', 'router', 'android'].includes(device.device)
          )
          .map((device, i) => {
            return <DeviceCard {...device} key={i} />;
          })}
      </div>

      <div className='mt-4 sm:mt-6 md:mt-8 flex flex-col w-full gap-4 sm:gap-6 md:gap-8'>
        <div className='flex justify-center'>
          <div className='border-[2px] sm:border-[2px] md:border-[3px] border-black rounded-lg sm:rounded-xl px-6 sm:px-10 md:px-16 py-2 sm:py-3 md:py-4 inline-block'>
            <Link href='/setupvalues' className='text-sm sm:text-base md:text-lg font-400'>
              مستويات الحماية
            </Link>
          </div>
        </div>

        <div className='flex justify-center sm:justify-end mt-2 sm:mt-4'>
          <Link
            href='/support'
            className='text-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg transition-colors bg-red-red2-gradient rounded-xl sm:rounded-2xl md:rounded-3xl shadow-sm sm:shadow md:shadow-lg'
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

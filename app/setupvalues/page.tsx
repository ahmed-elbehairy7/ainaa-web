import React from 'react';
import setupValuesData from './setupValuesData';
import Link from 'next/link';

const SetupValuesPage = () => {
  const setupLevels = setupValuesData.gen1;

  const protectionLevels = [
    {
      type: 'low',
      title: 'الحماية المنخفضة',
      description:
        'تحجب لك فقط الأساسيات التي قد تزعجك أو تعد غير مناسبة، مع إبقاء معظم المحتوى متاحًا لتصفح أكثر حرية مثل:',
    },
    {
      type: 'high',
      title: 'الحماية العالية',
      description:
        'توفر لك حماية شاملة من معظم أنواع المحتوى غير المرغوب فيه، مما يضمن تجربة تصفح أكثر أمانًا وراحة مثل:',
    },
  ];

  const renderDNSInfo = (level) => (
    <div className='mt-4 text-right'>
      {['primary DNS', 'secondary DNS', 'Dns-Over-Https'].map(
        (label, index) => (
          <React.Fragment key={index}>
            <p className='text-Red font-semibold text-[18px]'>{label}</p>
            <p className='mb-2 text-[18px] font-[600]'>
              {label === 'Dns-Over-Https'
                ? `${setupLevels[level].subdomain}.mafazaa.com`
                : setupLevels[level][label.split(' ')[0].toLowerCase()]}
            </p>
          </React.Fragment>
        )
      )}
    </div>
  );

  return (
    <div
      className='mb-10 flex flex-col gap-10
       items-center px-4 bg-bg-cover bg-center bg-no-repeat'
      dir='rtl'
    >
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold mt-8 mb-2'>مستويات الحماية</h1>
        <p className='text-xl text-gray-700'>تفصيل مستويات الحماية المتاحة</p>
      </div>

      {/* Protection Levels Cards */}
      <div className='flex flex-col items-center  md:flex-row md:items-start justify-center gap-[90px] w-full max-w-5xl '>
        {protectionLevels.map((level) => (
          <div
            key={level.type}
            className='border-[4px] border-Text rounded-3xl shadow-md px-[30px] py-[40px] w-[380px] h-full relative overflow-visible'
          >
            <div className='p-4 text-right'>
              <h2 className='text-3xl font-bold mb-4 text-Red'>
                {level.title}
              </h2>
              <p className='text-right text-gray-700 mb-12 text-[20px] leading-[30px]'>
                {level.description}
              </p>

              {/* Categories */}
              <div className='flex flex-wrap justify-start gap-[25px] mb-12 pl-[25px]'>
                {setupLevels[level.type].categories.map((category, i) => (
                  <span
                    key={i}
                    className='bg-[rgba(255,240,238,1)] text-Red px-3 py-1 rounded-[8px] 
                    text-[17px] font-[700]'
                  >
                    {category}
                  </span>
                ))}
              </div>

              {renderDNSInfo(level.type)}

              {level.type === 'high' && (
                <Link
                  href='/support'
                  className='absolute bottom-[150px] left-0 z-10 transform bg-red-red2-gradient -translate-x-1/2 text-white py-4 px-8 transition-colors'
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 5px 4px 0 rgba(0, 0, 0, 0.25)',
                  }}
                >
                  خدمة العملاء
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      {[
        {
          href: '/gen1/setupguide',
          text: 'فعل الحماية الآن',
          className:
            'mt-12 mb-6 text-white py-8 px-20 rounded-[16px] text-2xl font-medium transition-colors bg-gradient-to-r from-Red to-Red2',
        },
        // {
        //   href: '/support',
        //   text: 'خدمة العملاء',
        //   className:
        //     'absolute left-8 top-1/3 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition-colors',
        // },
      ].map((button, index) => (
        <div
          key={index}
          className={index === 0 ? 'mt-12 mb-6' : 'absolute left-0 top-0'}
        >
          <Link href={button.href} className={button.className}>
            {button.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SetupValuesPage;

import Link from 'next/link';
import React from 'react';
import setupValuesData from './setupValuesData';

const SetupValuesComponent = () => {
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
            <p className="text-red-500 font-semibold text-sm sm:text-base md:text-[18px]">{label}</p>
            <p className="mb-2 text-sm sm:text-base md:text-[18px] font-[600] break-words">
              {label === "Dns-Over-Https"
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
      className='my-[70px] flex flex-col gap-10
       items-center px-4 bg-bg-cover bg-center bg-no-repeat'
      dir='rtl'
    >
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">مستويات الحماية</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">تفصيل مستويات الحماية المتاحة</p>
      </div>

      {/* Protection Levels Cards */}
      <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-8 md:gap-[60px] lg:gap-[90px] w-full max-w-5xl mx-auto px-4">
        {protectionLevels.map((level) => (
          <div
            key={level.type}
            className="min-h-[650px] sm:min-h-[700px] md:min-h-[750px] w-full max-w-[380px] border-2 sm:border-[3px] md:border-[4px] border-[#353535] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-md px-4 sm:px-5 md:px-[30px] py-6 sm:py-8 md:py-[40px]"
          >
            <div className="p-2 sm:p-3 md:p-4 text-right">
              <h2
                className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4"
                style={{ color: '#E0462D' }}
              >
                {level.title}
              </h2>
              <p className="text-right text-gray-700 mb-6 sm:mb-8 md:mb-12 text-base sm:text-lg md:text-[20px] leading-[1.5] md:leading-[30px]">
                {level.description}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap justify-start gap-3 sm:gap-4 md:gap-[25px] mb-6 sm:mb-8 md:mb-12">
                {setupLevels[level.type].categories.map((category, i) => (
                  <span
                    key={i}
                    className="bg-[rgba(255,240,238,1)] text-[#E0462D] px-2 sm:px-3 py-1 rounded-[8px] 
                    text-sm sm:text-base md:text-[17px] font-[700]"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {renderDNSInfo(level.type)}
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
            "mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6 text-white py-4 sm:py-6 md:py-8 px-6 sm:px-10 md:px-20 rounded-[16px] text-lg sm:text-xl md:text-2xl font-medium transition-colors bg-gradient-to-r from-[#E0462D] to-[#A73826] w-full sm:w-auto text-center",
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
          className={`${index === 0 ? 'mt-6 mb-3' : 'absolute left-0 top-0'
            } md:mt-12 md:mb-6`}
        >
          <Link
            href={button.href}
            className={`${button.className} md:py-8 md:px-20`}
          >
            {button.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SetupValuesComponent;

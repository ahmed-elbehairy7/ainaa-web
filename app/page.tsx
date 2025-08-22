"use client";

import { useState } from "react";
import Explanation from "./_components/Explanation";
import HeroSection from "./_components/HeroSection";
import SetupValuesComponent from "./setupvalues/SetupValuesComponent";
import instapay from '@/public/support_us/instapay.png'
import visa from '@/public/support_us/visa.png'
import vodafoneCash from '@/public/support_us/vodafoneCash.png'
import Image from "next/image";
import instapay from '@/public/support_us/instapay.png'
import visa from '@/public/support_us/visa.png'
import vodafoneCash from '@/public/support_us/vodafoneCash.png'
import Image from "next/image";
export default function Home() {
  const [isOpenExplanation, setIsOpenExplanation] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        className="bg-home-hero"
        title="اعطاء ابنك هاتفا، ضمان لتعرضه لموادٍ إباحية!"
        description="تعرف كيف يشاهد الأطفال أفلاما إباحية عن طريق كتابة حرف خاطئ على محرك البحث"
        // button1={{
        // 	text: "اقرأ المزيد...",
        // 	href: "/blogs",
        // }}
        button2={{
          text: "فعل الحماية",
          handleClick: () => {
            setIsOpenExplanation(true);
          },
        }}
      />

      {
        // <div className="bg-white   py-24">
        // 			<div className="flex flex-col items-center justify-center gap-y-[30px] max-w-5xl mx-auto px-4">
        // 				<h2 className="text-text font-bold text-5xl">
        // 					أهم مقالاتنا
        // 				</h2>
        // 				<p className="text-text text-2xl font-bold text-center">
        // 					مقال توعوي للأباء و الأمهات عن ما وصلت إليه الإباحية في
        // 					هذا الزمن، و آخر يساعد الشباب على التعافي بإذن الله
        // 				</p>
        // 			</div>
        // 		</div>
        // 		<div className="  grid lg:grid-cols-2 ">
        // 			<BlogCard
        // 				isMain
        // 				blogId="1"
        // 				className="bg-blog-image2 max-lg:bg-right"
        // 				title="أطفالكم في خطر عظيم!"
        // 				description="نداء استغاثة من شاب عن واقع الأجيال الحالية"
        // 			/>
        // 			<BlogCard
        // 				isMain
        // 				blogId="2"
        // 				className="bg-blog-image1"
        // 				title="أطفئ حريق الإباحية"
        // 				description="دليل الشباب المبتلى عن كيفية الإقلاع عن الإباحية بإذن الله"
        // 			/>
        // 		</div>
        // 		<div className="flex items-center justify-center py-24">
        // 			<Link href={"/blogs"} className="btn-primary">
        // 				المزيد من مدونتنا
        // 			</Link>
        // 		</div>
      }

      <SetupValuesComponent />

      <HeroSection
        className="bg-home-hero2"
        title="ولدك ليس استثناء، حماية منزلك لم يعد أمرا اختياريا بعد الآن"
        description="« كُلُّكْمْ رَاعٍ، وَكُلُّكُمْ مَسْئوُلٌ عَنْ رَعِيتّهِِ... والرَّجُلُ راعٍ في أهْلِهِ وهو مَسْئُولٌ عن رَعِيَّتِهِ »"
        // button1={{
        // 	text: "اقرأ المزيد...",
        // 	href: "/blogs",
        // }}
        button2={{
          text: "فعل الحماية",
          handleClick: () => {
            setIsOpenExplanation(true);
          },
        }}
      />
      <HeroSection
        className="bg-home-hero3"
        title="اليوم مقطعٌ واحد، و غدا مدمنٌ في سن العشرين"
        description="كلما تعرض الشخص للإباحية في صغره، كان خروجه منها أصعب و أشد!"
        // button1={{
        // 	text: "اقرأ المزيد...",
        // 	href: "/blogs",
        // }}
        button2={{
          text: "فعل الحماية",
          href: "/gen1/setupguide",
          handleClick: () => {
            setIsOpenExplanation(true);
          },
        }}
      />
      {
        <form action="/support_us/pay"
          method="post" className="bg-white py-24">
          <div className="flex flex-col items-center justify-center gap-y-[30px] max-w-5xl mx-auto px-4">
            <h2 className="text-text font-bold text-H4 max-w-xl text-center">
              ساهم في تطوير مستقبل أكثر أمانا للإنترنت
            </h2>
            <div className="w-full flex flex-col gap-4">
              <h5 className="text-text  text-H5">المبلغ (جنيه مصري)</h5>
              <input
                type="number"
                name="amount"
                id="amount"
                min="10"
                required


                placeholder="أدخل المبلغ هنا"
                className="border border-gray-300 p-2 sm:p-3 md:p-4 rounded-md w-full"
              />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 place-content-center justify-center gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-4">
                  <Image src={visa.src} alt="visa" width={80} height={80} />

                </div>

                <button
                  type="submit"
                  name="defaultMethod"
                  value={"card"}
                  className="w-full p-3 sm:p-4 text-center text-sm sm:text-base md:text-lg rounded-md text-white bg-red-700"
                >

                  كارت فيزا
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <Image src={vodafoneCash.src} alt="vodafoneCash" width={100} height={100} />
                <button
                  type="submit"
                  name="defaultMethod"
                  value={"wallet"}
                  className="w-full  p-3  sm:p-4 text-center text-sm sm:text-base md:text-lg rounded-md text-white bg-red-700"
                >
                  المحافظ الإلكترونية (فودافون كاش)
                </button>

              </div>
            </div>
          </div>
        </form>
      }

      {/* Modal for Explanation */}
      <div className="  top-0 left-0 z-50 flex items-center justify-center bg-black/50">
        <Explanation
          isOpen={isOpenExplanation}
          onClose={() => setIsOpenExplanation(false)}
        />
      </div>
    </div>
  );
}

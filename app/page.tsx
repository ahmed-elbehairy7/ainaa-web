import {
  facebookPage,
  joinUs,
  support_us,
  whatsappChannel,
} from "@/importantLinks";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import InfoCard from "./components/InfoCard";

export default function Home() {
  return (
    <article className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center">
      <section id="about" className="mx-auto max-w-screen-md">
        <h1 className="inline-block px-6 py-2 text-xl font-semibold tracking-wide text-white uppercase rounded-full bg-gradient-to-r from-teal-500 to-teal-700 shadow-teal-300 shadow-md">
          عَيْنًا سَلْسَبِيلًا
        </h1>
        <h2 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
          احمي طفلك من الإباحية 🛡️
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          نؤمن بأن الحماية من المحتوى الإباحي تبدأ بتوفير بيئة آمنة على
          الإنترنت. اكتشف كيف يمكنك تأمين جميع أجهزتك بسهولة.
        </p>
      </section>
      <section id="features" className="pt-6 max-w-screen-md mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 text-center md:text-right">
          <InfoCard
            title="حماية شاملة ✅"
            description="بخطوات بسيطة يمكنك تأمين جميع أجهزتك."
            fromColor="from-sky-400"
            toColor="to-purple-300"
          />
          <InfoCard
            title=" سهولة الإعداد ⚡"
            description="يحميك من المواقع الإباحية والمحتوى الضار."
            fromColor="from-sky-400"
            toColor="to-orange-300"
          />
        </div>
      </section>

      <section
        id="start"
        className="max-w-2xl w-full flex justify-center pt-6 "
      >
        <Link
          href="/gen1/setupguide"
          className="w-full px-8 py-4 bg-teal-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 block active:scale-90 active:shadow-2xl"
        >
          ابدأ الآن 🚀
        </Link>
      </section>

      <section id="support" className="pt-12 pb-6 max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">طرق دعم المشروع 💡</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          يمكنك دعمنا من خلال المشاركة، التبرع أو التطوع معنا. 💖
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6">
          <InfoCard
            title="التبرع المالي 💰"
            description=" يمكنك المساهمة ماديًا لدعم المشروع عن طريق كارت الفيزا او فودافون
              كاش عبر:"
            link={support_us}
            linkText="📌الرابط هنا ➡️"
            fromColor="from-yellow-400"
            toColor="to-orange-300"
          />
          <InfoCard
            title="التطوع 🤝"
            description="لديك مهارات في البرمجة أو التسويق؟ انضم إلينا وساعدنا في تحسين المشروع."
            link={joinUs}
            linkText="🚀 انضم لفريق التطوع"
            fromColor="from-purple-400"
            toColor="to-pink-300"
          />
        </div>
      </section>

      <section id="community" className="pb-12 max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">انضم لمجتمعنا 💬</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          احصل على آخر التحديثات وكن جزءًا من مجتمع الحماية عبر الجروب والقناة
        </p>
        <div className="flex gap-4 items-center justify-center">
          <Link
            href={whatsappChannel}
            target="_blank"
            className="mt-6 inline-block px-3 md:px-6 py-3 bg-green-600 text-white text-sm md:text-lg md:font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            انضم الآن للقناة 📢
          </Link>
          <Link
            href={facebookPage}
            target="_blank"
            className="flex gap-2 mt-6 items-center justify-between px-3 md:px-6 py-3 bg-green-600 text-white text-sm md:text-lg md:font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            تابعنا على فيسبوك <FaFacebook size={24} />
          </Link>
        </div>
      </section>
    </article>
  );
}

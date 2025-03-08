import GenCard from "@/app/components/GenCard";
import { gens } from "./appData";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50"
      dir="rtl"
    >
      <div className="px-6 py-16 text-center mx-auto max-w-screen-md">
        <p className="inline-block px-6 py-2 text-xl font-semibold tracking-wide text-white uppercase rounded-full bg-gradient-to-r from-teal-500 to-teal-700 shadow-md">
          عَيْنًا سَلْسَبِيلًا
        </p>
        <h2 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
          احمي طفلك من الإباحية
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          نؤمن بأن الحماية من المحتوى الإباحي تبدأ بتوفير بيئة آمنة على
          الإنترنت. اكتشف كيف يمكنك تأمين جميع أجهزتك بسهولة.
        </p>

        {/* <div className="mt-6">
          <img src="/shield-icon.png" alt="حماية" className="mx-auto w-32" />
        </div> */}

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">✅ حماية شاملة</h3>
            <p className="text-gray-600 mt-2">
              يحميك من المواقع الإباحية والمحتوى الضار.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">
              ⚡ سهولة الإعداد
            </h3>
            <p className="text-gray-600 mt-2">
              بخطوات بسيطة يمكنك تأمين جميع أجهزتك.
            </p>
          </div>
        </div>

        <Link
          href={"/gen1/setupguide"}
          className="mt-8 px-8 py-4 bg-teal-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 block "
        >
          ابدأ الآن 🚀
        </Link>
      </div>
    </main>
  );
}

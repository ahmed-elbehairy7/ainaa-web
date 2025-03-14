"use client";
import Link from "next/link";
import { FaFacebook, FaGlobe, FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <section className="px-4 py-6 max-w-screen-md mx-auto text-center">
      <h1 className="text-4xl font-bold text-teal-700 sm:text-5xl mb-4">
        عَيْنًا سَلْسَبِيلَا
      </h1>
      <h2 className="text-lg md:text-2xl font-semibold text-teal-500 mb-4">
        حماية لك ولأهلك من الآفات الإلكترونية 🌿
      </h2>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        عَيْنًا سَلْسَبِيلَا هو خدمة مجانية لحجب المواقع الإباحية تمامًا من
        منزلك، لحماية أطفالك ونفسك من هذه الآفة المدمرة...
      </p>

      {/* لماذا تحتاج هذه الخدمة؟ */}
      <div
        className="relative mt-8 p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 
          before:bg-gradient-to-br before:from-blue-400 before:to-cyan-300 before:rounded-2xl before:opacity-20"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          📌 لماذا تحتاج هذه الخدمة؟
        </h2>
        <ul className="mt-4 text-lg text-gray-700 leading-relaxed space-y-3">
          <li>🔹 لحماية أبنائك من الانحراف الأخلاقي.</li>
          <li>🔹 للحفاظ على طهارة القلب والعقل.</li>
          <li>🔹 للوقاية من الإدمان المدمر.</li>
          <li>🔹 لأن الله أمرك بغض البصر.</li>
        </ul>
      </div>

      {/* كيف تعمل الخدمة؟ */}
      <div
        className="relative mt-8 p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 
          before:bg-gradient-to-br before:from-green-400 before:to-teal-300 before:rounded-2xl before:opacity-20"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          📌 كيف تعمل الخدمة؟
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          نحن نوفر إعدادات بسيطة يمكنك تطبيقها في جهاز الراوتر الخاص بك...
        </p>
      </div>

      {/* كيف يمكنك التفعيل؟ */}
      <div
        className="relative mt-8 p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 
          before:bg-gradient-to-br before:from-purple-400 before:to-indigo-300 before:rounded-2xl before:opacity-20"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          📌 كيف يمكنك التفعيل؟
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          يمكنك تفعيل الحماية من خلال اتباع الخطوات على موقع مافازا.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://ainaa.mafazaa.com/gen1/setupguide/"
            target="_blank"
            className="px-6 py-3 flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            <FaGlobe size={24} /> تفعيل الحماية 🔒
          </a>
        </div>
      </div>

      {/* انضم لقناة الواتس و الفيسبوك الواتساب */}
      <div
        className="relative mt-8 p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 
          before:bg-gradient-to-br before:from-yellow-400 before:to-orange-300 before:rounded-2xl before:opacity-20"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          📌 انضم لقناة الواتساب
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          تابع آخر التحديثات والأخبار عبر قناة الواتساب الخاص بنا.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Link
            href="https://whatsapp.com/channel/0029Vb5NRuqLY6dCU3qeXO2i"
            target="_blank"
            className="px-6 py-3 flex items-center gap-2 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all"
          >
            <FaWhatsapp size={24} /> انضم الآن 💬
          </Link>
        </div>
      </div>
      <div
        className="relative mt-8 p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
    hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 
    before:bg-gradient-to-br before:from-blue-500 before:to-blue-700 before:rounded-2xl before:opacity-20"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          📌 تابع صفحتنا على فيسبوك
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          تابع آخر التحديثات والأخبار عبر صفحتنا الرسمية على فيسبوك.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Link
            href="https://www.facebook.com/mafazaa.org"
            target="_blank"
            className="px-6 py-3 flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            <FaFacebook size={24} /> تابع الآن 👍
          </Link>
        </div>
      </div>
      <div
        className="relative mt-8 p-8 bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
    hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 
    before:bg-gradient-to-br before:from-pink-100 before:to-red-200 before:rounded-2xl before:opacity-30"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-2">
          📌 كيف يمكنك دعم المشروع؟
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">
          ❤️ بنشر الفكرة مع أصدقائك وعائلتك، فالكلمة الطيبة تُحدث فرقًا.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center">
          🙌 بدعوة صالحة - لعلها تكون سببًا في نجاحنا جميعًا.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="https://mafazaa.com/support_us"
            target="_blank"
            className="px-6 py-3 flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md 
        hover:bg-blue-700 transition-all"
          >
            💰 دعم مالي
          </Link>

          {/* زر العمل التطوعي */}
          <Link
            href="https://mafazaa.com/join"
            target="_blank"
            className="px-6 py-3 flex items-center gap-2 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md 
        hover:bg-green-700 transition-all"
          >
            🤝 الانضمام للعمل التطوعي
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="px-4 md:px-8 py-4 bg-teal-600 text-white md:text-lg font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 active:scale-90 active:shadow-2xl"
        >
          العودة إلى الصفحة الرئيسية 🏠
        </Link>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { FaGlobe, FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <section className="px-6 py-6 max-w-screen-md mx-auto text-center">
      <h1 className="text-4xl font-bold text-teal-700 sm:text-5xl mb-4">
        عَيْنًا سَلْسَبِيلَا
      </h1>
      <h2 className="text-lg md:text-2xl font-semibold text-teal-500 mb-4">
        حماية لك ولأهلك من الآفات الإلكترونية 🌿
      </h2>
      {/* ✅ مقدمة تعريفية */}
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        عَيْنًا سَلْسَبِيلَا هو خدمة مجانية لحجب المواقع الإباحية تمامًا من
        منزلك، لحماية أطفالك ونفسك من هذه الآفة المدمرة. بفضل الله، وفرنا طريقة
        سهلة وفعالة تتيح لك تأمين الإنترنت في بيتك دون الحاجة لبرامج مدفوعة أو
        معقدة.
      </p>

      <div className="mt-8 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          📌 لماذا تحتاج هذه الخدمة؟
        </h2>
        <ul className="mt-4 text-lg text-gray-700 leading-relaxed space-y-3">
          <li>🔹 لحماية أبنائك من الانحراف الأخلاقي.</li>
          <li>🔹 للحفاظ على طهارة القلب والعقل.</li>
          <li>🔹 للوقاية من الإدمان المدمر الذي يضيع الأوقات ويفسد العقول.</li>
          <li>🔹 لأن الله أمرك بغض البصر وحفظ نفسك وأهلك.</li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          📌 كيف تعمل الخدمة؟
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          نحن نوفر إعدادات بسيطة يمكنك تطبيقها في جهاز الراوتر الخاص بك لمنع
          المواقع الإباحية نهائيًا. هذه الإعدادات تمنع أي جهاز متصل بشبكتك من
          الوصول إلى المحتوى الفاسد، مما يوفر حماية شاملة لكل أفراد الأسرة.
        </p>
      </div>

      <div className="mt-8 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
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
            rel="noopener noreferrer"
            className="px-6 py-3 flex items-center gap-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            <FaGlobe size={24} /> تفعيل الحماية 🔒
          </a>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          📌 انضم لجروب الواتساب
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          تابع آخر التحديثات والأخبار حول المشروع عبر جروب واتساب الخاص بنا.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://chat.whatsapp.com/GpVDyjVulTgArIyEhZ75HO"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 flex items-center gap-2 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all"
          >
            <FaWhatsapp size={24} /> انضم الآن 💬
          </a>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          📌 كيف يمكنك دعم المشروع؟
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          ❤ بنشر الفكرة – شارك هذا مع أصدقائك وعائلتك.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 active:scale-90 active:shadow-2xl"
        >
          العودة إلى الصفحة الرئيسية 🏠
        </Link>
      </div>
    </section>
  );
}

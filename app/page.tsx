import Link from "next/link";

export default function Home() {
  return (
    <article className="px-6 flex flex-col items-center justify-center text-center">
      {/* قسم العنوان والوصف */}
      <section id="about" className="px-6 mx-auto max-w-screen-md">
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

      {/* قسم الميزات */}
      <section id="features" className="pt-6 max-w-screen-md mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {/* ميزة 1 */}
          <div
            className="relative p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
            hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-teal-400 before:to-green-300 before:rounded-2xl before:opacity-20"
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              حماية شاملة <span>✅</span>
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              يحميك من المواقع الإباحية والمحتوى الضار.
            </p>
          </div>

          {/* ميزة 2 */}
          <div
            className="relative p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
            hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-sky-400 before:to-blue-400 before:rounded-2xl before:opacity-20"
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              سهولة الإعداد <span>⚡</span>
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              بخطوات بسيطة يمكنك تأمين جميع أجهزتك.
            </p>
          </div>
        </div>
      </section>

      {/* زر البدء */}
      <section id="start" className="pt-6 max-w-screen-md">
        <Link
          href="/gen1/setupguide"
          className="px-8 py-4 bg-teal-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 block active:scale-90 active:shadow-2xl"
        >
          ابدأ الآن 🚀
        </Link>
      </section>

      {/* 🔹 قسم الدعم */}
      <section id="support" className="pt-12 pb-6 max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">طرق دعم المشروع 💡</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          يمكنك دعمنا من خلال المشاركة، التبرع أو التطوع معنا. 💖
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6">
          {/* دعم مالي */}
          <div
            className="relative p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
            hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-yellow-400 before:to-orange-300 before:rounded-2xl before:opacity-20"
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              التبرع المالي 💰
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              يمكنك المساهمة ماديًا لدعم المشروع عبر:
            </p>
            <ul className="mt-2 text-teal-700">
              <li>📌 فودافون كاش: 01005286073</li>
              <li>📌 إنستاباي: 01203250103</li>
            </ul>
          </div>

          {/* التطوع */}
          <div
            className="relative p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
            hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-purple-400 before:to-pink-300 before:rounded-2xl before:opacity-20"
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              التطوع 🤝
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              لديك مهارات في البرمجة أو التسويق؟ انضم إلينا وساعدنا في تحسين
              المشروع.
            </p>
            <Link
              href="https://www.mafazaa.com/join"
              target="_blank"
              className="mt-3 inline-block text-teal-900 underline hover:text-teal-600"
            >
              🚀 انضم لفريق التطوع
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 قسم الجروب */}
      <section id="whatsapp-group" className="pb-12 max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">انضم لجروبنا 💬</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          احصل على آخر التحديثات وكن جزءًا من مجتمع الحماية عبر الجروب.
        </p>

        <Link
          href="https://chat.whatsapp.com/GpVDyjVulTgArIyEhZ75HO"
          target="_blank"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          انضم الآن 📢
        </Link>
      </section>
    </article>
  );
}

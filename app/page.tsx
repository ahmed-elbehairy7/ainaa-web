import Link from "next/link";

export default function Home() {
  return (
    <article className="px-6 flex flex-col items-center justify-center text-center">
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

      <section id="features" className="pt-6 max-w-screen-md mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {/* Feature Card 1 */}
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

          {/* Feature Card 2 */}
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

      <section id="start" className="pt-6 max-w-screen-md">
        <Link
          href="/gen1/setupguide"
          className="px-8 py-4 bg-teal-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 block active:scale-90 active:shadow-2xl"
        >
          ابدأ الآن 🚀
        </Link>
      </section>

      {/* Uncomment the section below to display GenCard components */}
      {/*
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
          {gens.map((gen, index) => (
            <GenCard key={index} {...gen} />
          ))}
        </div>
        */}
    </article>
  );
}

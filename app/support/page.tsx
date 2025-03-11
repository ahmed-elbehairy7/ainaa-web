import Link from "next/link";
import { customerSupportStep } from "../[gen]/setupguide/[device]/[step]/commonSteps";

export default function SupportPage() {
  return (
    <article className="px-4 flex flex-col items-center justify-center text-center">
      {/* 🔹 عنوان الصفحة */}
      <section className=" mx-auto max-w-screen-md">
        <h1 className="inline-block px-6 py-2 text-xl font-semibold tracking-wide text-white uppercase rounded-full bg-gradient-to-r from-teal-500 to-teal-700 shadow-teal-300 shadow-md">
          الدعم الفني 🛠️
        </h1>
        <h2 className="mt-6 text-2xl md:text-4xl font-bold text-gray-900 sm:text-5xl">
          كيف يمكننا مساعدتك؟ 💡
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          نحن هنا لمساعدتك في أي مشكلة تواجهها أثناء استخدام الخدمة. يمكنك
          التواصل معنا من خلال الوسائل التالية:
        </p>
      </section>

      {/* 🔹 خطوات الدعم الفني */}
      <section className="py-6 max-w-screen-md mx-auto">
        <div className="flex flex-col gap-6">
          {customerSupportStep.map((step, index) => (
            <div
              key={index}
              className="p-4 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
              hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100"
            >
              {/* ✅ التحقق من نوع `data` قبل العرض */}
              {step.type === "text" && typeof step.data === "string" && (
                <p className="text-base sm:text-lg text-gray-800">
                  {step.data}
                </p>
              )}

              {step.type === "link" &&
                typeof step.data === "object" &&
                "href" in step.data &&
                "text" in step.data && (
                  <Link
                    href={step.data.href}
                    target="_blank"
                    className="text-base sm:text-lg text-teal-700 font-semibold underline hover:text-teal-500 transition-all"
                  >
                    {step.data.text}
                  </Link>
                )}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

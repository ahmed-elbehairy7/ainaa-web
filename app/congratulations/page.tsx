"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NextSteps from "../_components/NextSteps";

export default function CongratulationsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="max-w-screen-lg mx-auto flex flex-col items-center  gap-8 px-4">
      <div className="flex flex-col items-center gap-4 mt-4">
        <p className="text-3xl font-bold">مبارك تفعيل الحماية!!</p>
        <p>
          إن وجدت الحماية غير مفعلة، يمكنك التواصل مع أحد ممثلي خدمة العملاء
        </p>
      </div>

      <div className="flex flex-col  gap-4">
        <p>تستطيع التأكد من أن الحماية تم تفعيلها عن طريق...</p>

        <Link href="/support" className="text-red-600">
          اضغظ على الرابط
        </Link>

        <Image
          src="https://placehold.co/1000x600"
          alt="Congratulations"
          width={1000}
          height={600}
        />
        <p className="text-xl font-semibold">ماذا أفعل إن فشل تفعيل الحماية؟</p>
        <p>يمكنك تجربة الحل 1</p>
        <p>أو الحل 2</p>
        <p>
          إن لم تستطع بعد تفعيل الحماية، يمكنك التواصل مع أحد ممثلي خدمة العملاء
          عن طريق الرابط التالي
        </p>
        <Link href="/support" className="text-red-600">
          اضغظ هنا للتواصل مع أحد ممثلي خدمة العملاء{" "}
        </Link>
      </div>

      <div className="w-full flex justify-between items-center gap-4 ">
        <button
          className="w-64 p-4 text-center rounded-md text-white bg-red-700 "
          onClick={() => setIsOpen(true)}
        >
          ماذا بعد تفعيل الحماية؟
        </button>

        <Link
          href="/setupvalues"
          className="w-40 p-4 rounded-lg  border-4 border-black text-center "
        >
          السابق{" "}
        </Link>
      </div>

      <NextSteps
        isOpen={isOpen}
        close={true}
        onClose={() => setIsOpen(false)}
      />
    </main>
  );
}

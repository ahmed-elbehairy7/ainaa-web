"use client";
import { useState } from "react";
import Modal from "../_components/Modal";
import Link from "next/link";

export default function ProtectionAlreadyApplied() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <article className="px-4 flex flex-col items-center justify-center text-center">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center justify-center gap-8">
          <div>
            <h2 className="text-2xl font-semibold">
              لقد تم تفعيل الحماية بالفعل.!
            </h2>
            <p className="mt-2">
              هذا الجهاز تم تفعيل الحماية عليه بالفعل مرة، لا يمكنك رؤية
              الخطوات!
            </p>
          </div>
          <p>
            هذا من أجل سد ثغرات الحماية، حتى لا يستطيع شاب فكها في لحظة ضعف!إن
            كنت أبا أو شخص يحتاج تفعيلها من الراوتر، يمكنك التواصل مع خدمة
            العملاء
          </p>

          <div className="flex justify-around w-full items-center gap-4 ">
            <Link
              href="/support"
              className="w-40 p-4 rounded-md text-white bg-red-700 "
            >
              خدمة العملاء
            </Link>

            {/* // Todo: Need to add a link for "مقالات تهمك" */}
            <Link
              href="/blogs"
              className="w-40 p-4 rounded-lg  border-4 border-black "
            >
              مقالات تهمك
            </Link>
          </div>
        </div>
      </Modal>
    </article>
  );
}

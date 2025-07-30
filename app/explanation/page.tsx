"use client";
import { useState } from "react";
import Modal from "../_components/Modal";

export default function ExplanationPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <article className="px-4 flex flex-col items-center justify-center text-center">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-3xl font-semibold">تنبيهات!!</h2>

          <div className=" flex flex-col justify-center gap-2   ">
            <p>
              1.واحد اتنين تلاتة اربعة خمسة واحد اتنين تلاتة اربعة خمسة واحد
              اتنين تلاتة اربعة خمسة واحد اتنين تلاتة اربعة خمسة{" "}
            </p>
            <p>
              1.واحد اتنين تلاتة اربعة خمسة واحد اتنين تلاتة اربعة خمسة واحد
              اتنين تلاتة اربعة خمسة واحد اتنين تلاتة اربعة خمسة{" "}
            </p>
            <p>
              1.واحد اتنين تلاتة اربعة خمسة واحد اتنين تلاتة اربعة خمسة واحد
              اتنين تلاتة اربعة خمسة واحد اتنين تلاتة اربعة خمسة{" "}
            </p>
            <p>
              1.واحد اتنين تلاتة اربعة خمسة واحد اتنين تلاتة اربعة خمسة واحد
              اتنين تلاتة اربعة خمسة واحد اتنين تلاتة اربعة خمسة{" "}
            </p>
          </div>

          <div className="flex justify-around w-full items-center gap-4 ">
            <button
              onClick={() => setIsOpen(false)}
              className="w-40 p-4 rounded-md text-white bg-red-700"
            >
              أكمل
            </button>
          </div>
        </div>
      </Modal>
    </article>
  );
}

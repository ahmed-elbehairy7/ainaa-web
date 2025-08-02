"use client";
import NextSteps from "@/app/_components/NextSteps";
import { useState } from "react";

export default function AfterBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="w-64 p-4 text-center rounded-md text-white bg-red-700 "
        onClick={() => setIsOpen(true)}
      >
        ماذا بعد تفعيل الحماية؟
      </button>

      <NextSteps
        isOpen={isOpen}
        close={true}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

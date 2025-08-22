"use client";
import NextSteps from "@/app/_components/NextSteps";
import { useState } from "react";

export default function AfterBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='w-full sm:w-64 p-4 text-center rounded-xl bg-gradient-to-r from-Red to-Red2 text-white text-sm md:text-base'
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

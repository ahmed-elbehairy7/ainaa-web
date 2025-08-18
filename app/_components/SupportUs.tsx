"use client";
import { useState } from "react";
import Modal from "../_components/Modal";
import Link from "next/link";

type SupportUsProps = {
  isOpen: boolean;
  close: boolean;
  onClose?: () => void;
};
export default function SupportUs({ isOpen, onClose, close }: SupportUsProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} close={close}>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold">ادعمنا</h2>

        {/* Amount */}
        <div className="flex flex-col justify-center gap-2 w-full">
          <label htmlFor="amount" className="font-semibold text-base sm:text-lg md:text-xl">
            المبلغ (جنيه مصري)
          </label>
          <input
            type="number"
            id="amount"
            className="border border-gray-300 p-2 sm:p-3 md:p-4 rounded-md w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-around w-full items-center gap-4 sm:gap-6 md:gap-8">
          <Link href="/" className="w-full sm:w-40 p-3 sm:p-4 text-center text-sm sm:text-base md:text-lg rounded-md text-white bg-red-700">
            محفظة
          </Link>

          <Link
            href="/"
            className="w-full sm:w-40 p-3 sm:p-4 text-center text-sm sm:text-base md:text-lg rounded-lg border-2 sm:border-[3px] md:border-4 border-black"
          >
            كارت
          </Link>
        </div>
      </div>
    </Modal>
  );
}

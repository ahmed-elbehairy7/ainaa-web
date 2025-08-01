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
        <h2 className="text-3xl font-semibold">ادعمنا</h2>

        {/* Amount */}
        <div className=" flex flex-col justify-center gap-2   ">
          <label htmlFor="amount" className="font-semibold text-xl ">
            المبلغ (جنيه مصري)
          </label>
          <input
            type="number"
            id="amount"
            className=" border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-around w-full items-center gap-4 ">
          <Link href="/" className="w-40 p-4 rounded-md text-white bg-red-700 ">
            محفظة{" "}
          </Link>

          <Link
            href="/"
            className="w-40 p-4 rounded-lg  border-4 border-black "
          >
            كارت{" "}
          </Link>
        </div>
      </div>
    </Modal>
  );
}

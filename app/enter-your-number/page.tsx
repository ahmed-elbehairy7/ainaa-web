"use client";
import { useState } from "react";
import Modal from "../_components/Modal";
import Link from "next/link";

export default function EnterYourNumberPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <article className="px-4 flex flex-col items-center justify-center text-center">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-2xl font-semibold">
            نحتاج منك رقم الهاتف حتى تبدأ في الخطوات{" "}
          </h2>

          <div className=" flex flex-col justify-center gap-2 translate-x-[50px] sm:translate-x-[100px]  ">
            <label
              className="text-xl font-semibold translate-x-16 flex-1"
              htmlFor="phone"
            >
              رقم الهاتف
            </label>

            <input
              id="phone"
              name="phone"
              type="number"
              placeholder="برجاء إدخال رقم الهاتف"
              className="border p-4 no-arrows rounded-md "
            />
          </div>

          <div className="flex justify-around w-full items-center gap-4 ">
            <Link
              href="/support"
              className="w-40 p-4 rounded-md text-white bg-red-700 "
            >
              أكمل
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="w-40 p-4 rounded-lg  border-4 border-black "
            >
              لاحقا
            </button>
          </div>
        </form>
      </Modal>
    </article>
  );
}

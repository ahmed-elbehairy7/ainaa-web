"use client";
import Modal from "../_components/Modal";
import instapay from '@/public/support_us/instapay.png'
import visa from '@/public/support_us/visa.png'
import vodafoneCash from '@/public/support_us/vodafoneCash.png'
import Image from "next/image";
type SupportUsProps = {
  isOpen: boolean;
  close: boolean;
  onClose?: () => void;
};
export default function SupportUs({ isOpen, onClose, close }: SupportUsProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} close={close}>
      <form
        action="/support_us/pay"
        method="post"
        className="flex flex-col items-center justify-center gap-8"
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold">
          ادعمنا
        </h2>

        {/* Amount */}
        <div className="flex flex-col justify-center gap-2 w-full">
          <label
            htmlFor="amount"
            className="font-semibold text-base sm:text-lg md:text-xl"
          >
            المبلغ (جنيه مصري)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="10"
            required
            autoFocus
            step="any"
            placeholder="أدخل المبلغ هنا"
            className="border border-gray-300 p-2 sm:p-3 md:p-4 rounded-md w-full"
          />
        </div>

        {/* Buttons */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 place-content-center justify-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <Image src={visa.src} alt="visa" width={80} height={80} />
            
            </div>

            <button
              type="submit"
              name="defaultMethod"
              value={"card"}
              className="w-full p-3 sm:p-4 text-center text-sm sm:text-base md:text-lg rounded-md text-white bg-red-700"
            >

              كارت فيزا
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={vodafoneCash.src} alt="vodafoneCash" width={100} height={100} />
            <button
              type="submit"
              name="defaultMethod"
              value={"wallet"}
              className="w-full  p-3  sm:p-4 text-center text-sm sm:text-base md:text-lg rounded-md text-white bg-red-700"
            >
              المحافظ الإلكترونية (فودافون كاش)
            </button>

          </div>
        </div>
      </form>
    </Modal >
  );
}

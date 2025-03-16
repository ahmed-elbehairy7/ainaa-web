"use client";

import { formEntryId, formUrl } from "@/importantLinks";
import { useState } from "react";

export default function FormComponent() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError("يرجى إدخال بريد إلكتروني أو رقم هاتف صحيح.");
      return;
    }

    setError("");
    setSuccess(false);

    const formData = new FormData();
    formData.append(`entry.${formEntryId}`, inputValue);

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSuccess(true);
      setInputValue(""); // Clear input
    } catch (error) {
      setError("حدث خطأ أثناء إرسال البيانات. حاول مرة أخرى.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-md"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="أدخل بريدك الإلكتروني أو رقم هاتفك"
        className="w-full px-4 py-2 text-lg text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="mt-2 text-red-500">{error}</p>}
      {success && <p className="mt-2 text-green-500">✅ تم التسجيل بنجاح!</p>}
      <button
        type="submit"
        className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md transition-all duration-300 transform hover:from-blue-600 hover:to-indigo-600 hover:-translate-y-1 hover:shadow-lg active:scale-95"
      >
        📝 تسجيل البيانات
      </button>
    </form>
  );
}

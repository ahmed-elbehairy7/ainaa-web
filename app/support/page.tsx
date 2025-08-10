"use client";
import Link from "next/link";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function SupportPage() {
	useEffect(() => {
		redirect("https://www.facebook.com/messages/t/419901901197382");
	}, []);
	return (
		<article className="px-4 flex flex-col items-center justify-center text-center">
			{/* 🔹 عنوان الصفحة */}
			<section className=" mx-auto max-w-screen-md">
				<h1 className="inline-block px-6 py-2 text-xl font-semibold tracking-wide text-white uppercase rounded-full bg-gradient-to-r from-teal-500 to-teal-700 shadow-teal-300 shadow-md">
					الدعم الفني 🛠️
				</h1>
				<h2 className="mt-6 text-2xl md:text-4xl font-bold text-gray-900 sm:text-5xl">
					كيف يمكننا مساعدتك؟ 💡
				</h2>
				<p className="mt-4 text-lg text-gray-700 leading-relaxed">
					نحن هنا لمساعدتك في أي مشكلة تواجهها أثناء استخدام الخدمة.
					يمكنك التواصل معنا من خلال الوسائل التالية:
				</p>
			</section>
		</article>
	);
}

import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // 🏷️ استبدال الخط ليدعم العربية بشكل أفضل
import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "عَيْنًا سَلْسَبِيلًا - حماية إسلامية متكاملة",
  description:
    "مشروع إسلامي لحجب المواقع الإباحية والتيك توك والأغاني والأفلام والكرتون وكل ما يغضب الله سبحانه وتعالى.",
  keywords:
    "حجب المواقع الإباحية, حماية الإنترنت, تصفية المحتوى, فلترة الإنترنت, أمان الأطفال",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.className}>
      <body>
        <Header />

        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 p-2 w-[calc(100%-32px)] lg:max-w-md bg-red-100 border border-red-600 rounded-lg text-center md:font-semibold text-xs md:text-sm text-red-800 shadow-md z-20">
          🚨 <span className="font-bold">تنبيه:</span> السيرفرات متوقفة حاليًا
          بسبب نقص التمويل🪙. يُرجى عدم استعمال الخدمة حتى إشعار آخر. ⚠️
          <br />
          في حال واجهت أي مشكلة، يُرجى التواصل مع{" "}
          <Link
            href="/support"
            className="underline text-teal-600 hover:text-teal-800 font-semibold"
          >
            الدعم الفني 🛠️
          </Link>
          .
        </div>

        <main className="pt-48">{children}</main>
      </body>
    </html>
  );
}

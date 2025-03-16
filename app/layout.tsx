import type { Metadata, Viewport } from "next"; // ✅ استيراد Viewport
import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";
import Warnning from "./components/Warnning";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

// ✅ تصحيح `metadata` بدون `viewport`
export const metadata: Metadata = {
  title: "عَيْنًا سَلْسَبِيلًا - حماية إسلامية متكاملة",
  description:
    "مشروع إسلامي لحجب المواقع الإباحية والتيك توك والأغاني والأفلام والكرتون وكل ما يغضب الله سبحانه وتعالى.",
  keywords:
    "حجب المواقع الإباحية, حماية الإنترنت, تصفية المحتوى, فلترة الإنترنت, أمان الأطفال",
};

// ✅ إضافة `viewport` بشكل مستقل
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        {/* <Warnning /> */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}

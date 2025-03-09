import type { Metadata } from "next";
import { Tajawal } from "next/font/google"; // 🏷️ استبدال الخط ليدعم العربية بشكل أفضل
import "./globals.css";
import Header from "./components/Header";

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
};

export const viewport = {
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
        <main className="pt-24" dir="rtl">
          {children}
        </main>
      </body>
    </html>
  );
}

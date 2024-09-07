import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "عينا سلسبيلا",
	description:
		"مشروع يحجب و يمنع المواقع الإباحية والتيك توك والأغاني  والأفلام والكرتون و كل ما يغضب الله سبحانه و تعالى ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="rtl">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

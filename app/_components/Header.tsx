"use client";
import { useState } from "react";
import Link from "next/link";
import MainLogo from "./../../public/logo.svg";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ استيراد الأيقونات
import Image from "next/image";
import Explanation from "./Explanation";
import SupportUs from "./SupportUs";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isOpenExplanation, setIsOpenExplanation] = useState(false);
	const [isSupportOpen, setIsSupportOpen] = useState(false);

	// قائمة الروابط
	const navLinks = [
		{
			label: "ابدأ الآن",
			href: "/gen1/setupguide/",
			clickHandler: () => setIsOpenExplanation(true),
		},
		{ label: "مستويات الحماية", href: "/setupvalues/" },
		{
			label: "التبرع لنا",
			href: "https://mafazaa.com/support_us",
			//TODO: uncomment
			// clickHandler: () => setIsSupportOpen(true),
		},
		{ label: "خدمة العملاء", href: "/support" },
	];

	return (
		<>
			<header className="fixed top-0 left-0 w-full h-[80px] bg-white shadow-lg shadow-black/30 px-4 z-50 backdrop-blur-md transition-all">
				<div className="container mx-auto flex items-center justify-between max-w-5xl h-full">
					<h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
						<Link href="/">
							<Image src={MainLogo} alt="logo" />
						</Link>
					</h1>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex">
						<ul className="flex gap-x-6">
							{navLinks.map(
								({ label, href, clickHandler }, index) => (
									<li key={index}>
										<Link
											target={
												href ===
												"https://mafazaa.com/support_us"
													? "_blank"
													: "_self"
											}
											href={href}
											className="relative text-black text-lg font-semibold transition-all duration-300 
                    before:absolute before:bottom-[-8px] before:left-0 before:w-0 before:h-0.5 before:bg-[#da442c]
                    before:transition-all before:duration-300 hover:before:w-full 
                    hover:text-[#da442c] hover:drop-shadow-lg active:scale-95"
											onClick={(e) => {
												if (clickHandler) {
													e.preventDefault();
													clickHandler();
												}
											}}
										>
											{label}
										</Link>
									</li>
								)
							)}
						</ul>
					</nav>

					{/* Mobile Menu Button - React Icons */}
					<button
						className="md:hidden p-0  text-3xl z-50"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle Menu"
					>
						{menuOpen ? <FiX /> : <FiMenu />}
					</button>
				</div>

				{/* Mobile Navigation */}
				<nav
					className={`absolute top-full left-0 w-full bg-white shadow-md transition-transform transform ${
						menuOpen
							? "scale-y-100 opacity-100"
							: "scale-y-0 opacity-0"
					} origin-top`}
				>
					<ul className="flex flex-col gap-y-3 text-center py-4">
						{navLinks.map(({ label, href }, index) => (
							<li key={index}>
								<Link
									href={href}
									target={
										href ===
										"https://mafazaa.com/support_us"
											? "_blank"
											: "_self"
									}
									className="relative text-black text-lg font-semibold transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#da442c]
                before:transition-all before:duration-300 hover:before:w-full 
                hover:text-[#da442c] hover:drop-shadow-lg active:scale-95"
									onClick={() => setMenuOpen(false)}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>

			{/* Modal for Explanation */}
			<div className="  top-0 left-0 z-50 flex items-center justify-center bg-black/50">
				<Explanation
					isOpen={isOpenExplanation}
					onClose={() => setIsOpenExplanation(false)}
				/>
			</div>
			{/* Modal for Support Us */}
			<div className="  top-0 left-0 z-50 flex items-center justify-center bg-black/50">
				<SupportUs
					close={true}
					isOpen={isSupportOpen}
					onClose={() => setIsSupportOpen(false)}
				/>
			</div>
		</>
	);
}

export default Header;

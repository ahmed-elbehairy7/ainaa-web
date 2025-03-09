"use client";
import { useState } from "react";
import Link from "next/link";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full bg-teal-600/90 backdrop-blur-md shadow-md py-4 px-4 z-50 transition-all">
			<div className="container mx-auto flex items-center justify-between max-w-5xl">
				{/* Logo */}
				<h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
					<Link href="/"> عَيْنًا سَلْسَبِيلًا</Link>
				</h1>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex">
					<ul className="flex gap-x-6">
						{["ابدأ الآن", "مستويات الحماية", "عن المشروع"].map(
							(text, index) => (
								<li key={index}>
									<Link
										href={`${
											index === 2
												? "/"
												: index === 1
												? "/setupvalues/"
												: "/gen1/setupguide/"
										}`}
										className="text-white hover:text-gray-300 transition-all duration-300 font-medium text-lg"
									>
										{text}
									</Link>
								</li>
							)
						)}
					</ul>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle Menu"
				>
					<span
						className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
							menuOpen ? "rotate-45 translate-y-1.5" : ""
						}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
							menuOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
							menuOpen ? "-rotate-45 -translate-y-1.5" : ""
						}`}
					/>
				</button>
			</div>

			{/* Mobile Navigation */}
			<nav
				className={`absolute top-full left-0 w-full bg-teal-700 shadow-md transition-transform transform ${
					menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
				} origin-top`}
			>
				<ul className="flex flex-col gap-y-3 text-center py-4">
					{["ابدأ الآن", "مستويات الحماية", "عن المشروع"].map(
						(text, index) => (
							<li key={index}>
								<Link
									href={`${
										index === 2
											? "/"
											: index === 1
											? "/setupvalues/"
											: "/gen1/setupguide/"
									}`}
									className="block text-white hover:text-gray-300 py-2 transition-all duration-300 text-lg"
									onClick={() => setMenuOpen(false)}
								>
									{text}
								</Link>
							</li>
						)
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Header;

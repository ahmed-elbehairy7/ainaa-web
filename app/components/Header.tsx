"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ استيراد الأيقونات

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // قائمة الروابط
  const navLinks = [
    { label: "ابدأ الآن", href: "/gen1/setupguide/" },
    { label: "مستويات الحماية", href: "/setupvalues/" },
    { label: "عن المشروع", href: "/about" },
    { label: "التبرع لنا", href: "https://mafazaa.com/support_us" },
    { label: "الدعم الفني", href: "/support" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-l from-teal-500 to-teal-700 shadow-lg shadow-teal-300/30 py-4 px-4 z-50 backdrop-blur-md transition-all">
      <div className="container mx-auto flex items-center justify-between max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
          <Link href="/">عَيْنًا سَلْسَبِيلًا</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-x-6">
            {navLinks.map(({ label, href }, index) => (
              <li key={index}>
                <Link
                  target={
                    href === "https://mafazaa.com/support_us"
                      ? "_blank"
                      : "_self"
                  }
                  href={href}
                  className="relative text-white text-lg font-semibold transition-all duration-300 
                    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-green-300 before:to-teal-500 
                    before:transition-all before:duration-300 hover:before:w-full 
                    hover:text-gray-100 hover:drop-shadow-lg active:scale-95"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button - React Icons */}
        <button
          className="md:hidden p-0 text-white text-3xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`absolute top-full left-0 w-full bg-teal-700 shadow-md transition-transform transform ${
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } origin-top`}
      >
        <ul className="flex flex-col gap-y-3 text-center py-4">
          {navLinks.map(({ label, href }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="relative text-white text-lg font-semibold transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-green-300 before:to-teal-500 
                before:transition-all before:duration-300 hover:before:w-full 
                hover:text-gray-100 hover:drop-shadow-lg active:scale-95"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

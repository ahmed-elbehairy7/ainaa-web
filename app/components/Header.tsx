"use client";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-l from-teal-500 to-teal-700  shadow-lg shadow-teal-300/30 py-4 px-6 z-50 backdrop-blur-md transition-all">
      <div className="container mx-auto flex items-center justify-between max-w-5xl">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
          <Link href="/">عَيْنًا سَلْسَبِيلًا</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-x-6">
            {["ابدأ الآن", "مستويات الحماية", "عن المشروع"].map(
              (text, index) => (
                <li key={index}>
                  <Link
                    href={
                      index === 2
                        ? "/about"
                        : index === 1
                        ? "/setupvalues/"
                        : "/gen1/setupguide/"
                    }
                    className="relative text-white text-lg font-semibold transition-all duration-300 
                    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-green-300 before:to-teal-500 
                    before:transition-all before:duration-300 hover:before:w-full 
                    hover:text-gray-100 hover:drop-shadow-lg active:scale-95"
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
          {["ابدأ الآن", "مستويات الحماية", "عن المشروع"].map((text, index) => (
            <li key={index}>
              <Link
                href={
                  index === 2
                    ? "/about"
                    : index === 1
                    ? "/setupvalues/"
                    : "/gen1/setupguide/"
                }
                className="relative text-white text-lg font-semibold transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-green-300 before:to-teal-500 
                before:transition-all before:duration-300 hover:before:w-full 
                hover:text-gray-100 hover:drop-shadow-lg active:scale-95"
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

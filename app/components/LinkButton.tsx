import React from "react";
import Link from "next/link";

interface ButtonProps {
  link?: string;
  content: string;
}

function LinkButton({ link, content }: ButtonProps) {
  return link ? (
    <Link
      href={link}
      className="flex items-center justify-center w-fit h-12 px-6 md:px-10 text-sm md:text-lg font-semibold tracking-wide text-white transition-all duration-300 rounded-lg shadow-lg md:w-auto bg-gradient-to-r from-teal-700 to-green-400 hover:from-teal-700 hover:to-green-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
    >
      {content}
    </Link>
  ) : (
    <button
      disabled
      className="flex items-center justify-center w-fit h-12 px-6 md:px-10 text-sm md:text-lg font-semibold tracking-wide text-gray-300 bg-gray-500 cursor-not-allowed rounded-lg shadow-md md:w-auto opacity-70"
    >
      {content}
    </button>
  );
}

export default LinkButton;

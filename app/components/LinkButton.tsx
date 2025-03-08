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
      className="flex items-center justify-center w-fit h-12 px-5 md:px-8 text-sm md:text-lg font-semibold tracking-wide text-white transition-all duration-300 rounded-lg shadow-md md:w-auto bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 active:scale-95 focus:shadow-outline focus:outline-none"
    >
      {content}
    </Link>
  ) : (
    <button
      disabled
      className="flex items-center justify-center w-fit h-12 px-5 md:px-8 text-sm md:text-lg font-semibold tracking-wide text-gray-300 bg-gray-400 cursor-not-allowed rounded-lg shadow-md md:w-auto"
    >
      {content}
    </button>
  );
}

export default LinkButton;

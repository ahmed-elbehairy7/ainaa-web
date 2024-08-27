import React from "react";
import Link from "next/link";

interface ButtonProps {
  link?: any;
  content: string;
}

function LinkButton({ link, content }: ButtonProps) {
  return (
    <Link
      href={link}
      className="flex items-center justify-center w-fit h-12 px-3 md:px-6 text-xs md:text-base font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple hover:bg-purple-700 focus:shadow-outline focus:outline-none"
    >
      {content}
    </Link>
  );
}

export default LinkButton;

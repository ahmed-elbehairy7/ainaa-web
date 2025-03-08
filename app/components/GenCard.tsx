import Link from "next/link";
import React from "react";
import { genProps } from "../[gen]/genData";

function GenCard({ gen, ar, description, soon }: genProps) {
  return (
    <Link
      href={`/${gen === "gen2" ? "commingSoon" : `${gen}/setupguide/`}`}
      className={`relative p-6 lg:py-8 lg:px-12 duration-300 transform bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 text-center cursor-pointer transition-all hover:bg-gray-50 active:shadow-inner h-full ${
        soon ? "hidden" : "block"
      }`}
    >
      <p className="text-xl font-extrabold text-gray-900 mb-3">{ar}</p>
      <div className="text-sm text-gray-700 flex flex-col gap-3 items-center justify-center">
        <p className="leading-relaxed">{description}</p>
        {soon && (
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center px-6 py-3 tracking-wide text-white transition duration-200 shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-bold">
            قريبا بإذن الله 🚀
          </p>
        )}
      </div>
    </Link>
  );
}

export default GenCard;

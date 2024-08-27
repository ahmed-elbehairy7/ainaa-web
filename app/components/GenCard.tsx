import Link from "next/link";
import React from "react";
import { genProps } from "../[gen]/genData";

function GenCard({ gen, ar, description, soon }: genProps) {
  return (
    <Link
      href={`/${gen == "gen2" ? "commingSoon" : `${gen}/setupguide/`}`}
      className="p-5 lg:px-12 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 text-center cursor-pointer hover:bg-slate-50 active:shadow-inner h-full"
    >
      <p className="text-lg font-bold leading-5 mb-2">{ar}</p>
      <div className="text-sm text-gray-900 flex flex-col gap-2 items-center justify-center">
        <p>{`${description}`}</p>
        {soon && (
          <p className="flex items-center justify-center w-fit h-12 px-6 tracking-wide text-white transition duration-200 shadow-md bg-deep-purple rounded-full font-bold">
            قريبا بإذن الله
          </p>
        )}
      </div>
    </Link>
  );
}

export default GenCard;

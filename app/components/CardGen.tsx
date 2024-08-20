import Link from "next/link";
import React from "react";

function CardGen({
  gen,
}: {
  gen: { href: string; title: string; description: string[] };
}) {
  return (
    <Link
      href={gen.href}
      className="p-5 lg:px-12 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 text-center cursor-pointer hover:bg-slate-50 active:shadow-inner"
    >
      <p className="text-lg font-bold leading-5 mb-2">{gen.title}</p>
      <div className="text-sm text-gray-900 flex flex-col gap-2">
        {gen.description.map((content, index) => (
          <p key={index}>
            {index + 1}- {content}
          </p>
        ))}
      </div>
    </Link>
  );
}

export default CardGen;

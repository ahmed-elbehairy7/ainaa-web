import Image from "next/image";
import Link from "next/link";
import React from "react";
function CardDevice({
  href,
  device,
}: {
  href: string;
  device: { title: string; description: string[]; image: string };
}) {
  return (
    <Link
      href={href}
      className="p-5 lg:px-12 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 text-center cursor-pointer hover:bg-slate-50 active:shadow-inner flex flex-col gap-4"
    >
      <div className=" flex justify-center items-center gap-4">
        <Image
          src={device.image}
          alt={device.title}
          className=" "
          width={25}
          height={25}
        />

        <h3 className="text-lg font-bold  capitalize">{device.title}</h3>
      </div>
      <div className="text-sm text-gray-900 flex flex-col gap-2">
        {device.description.map((content, index) => (
          <p key={index}>
            {index + 1}- {content}
          </p>
        ))}
      </div>
    </Link>
  );
}

export default CardDevice;

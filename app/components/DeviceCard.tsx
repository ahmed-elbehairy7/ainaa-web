import Image from "next/image";
import Link from "next/link";
import React from "react";
import { deviceParams } from "../[gen]/setupguide/[device]/deviceData";

function DeviceCard({ device, gen, soon }: deviceParams) {
  return (
    <Link
      href={soon ? `/commingSoon` : `/${gen}/setupguide/${device}`}
      className={`relative p-6 lg:px-10 duration-300 transform bg-white border border-gray-300 text-gray-800 shadow-md hover:shadow-lg hover:-translate-y-2 text-center cursor-pointer hover:bg-gray-50 active:shadow-inner rounded-lg flex flex-col gap-4 justify-center items-center transition-all ${
        soon ? "hidden" : "flex"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={require(`@/public/devices/${device}.svg`)}
          alt={device}
          className="object-contain"
          width={120}
          height={120}
        />
        <h3 className="text-lg font-bold capitalize">{device}</h3>
      </div>

      {soon && (
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm md:text-base text-white font-semibold tracking-wide shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
          Coming Soon 🚀
        </p>
      )}
    </Link>
  );
}

export default DeviceCard;

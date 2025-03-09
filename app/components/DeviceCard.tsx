import Image from "next/image";
import Link from "next/link";
import React from "react";
import { deviceParams } from "../[gen]/setupguide/[device]/deviceData";

// Define a single color theme for all devices
const unifiedColor = "from-gray-200 to-blue-300 shadow-blue-400";

function DeviceCard({ device, gen, soon }: deviceParams) {
  return (
    <Link
      href={soon ? `/commingSoon` : `/${gen}/setupguide/${device}`}
      className={`relative group p-6 lg:px-10 duration-300 transform border border-gray-300 text-gray-900 shadow-lg rounded-2xl flex flex-col gap-5 justify-center items-center transition-all
        ${
          soon
            ? "hidden"
            : `bg-gradient-to-br ${unifiedColor} hover:shadow-2xl hover:-translate-y-2 active:scale-95`
        }
      `}
    >
      <div className="flex flex-col justify-center items-center gap-4 relative">
        {/* Floating Soft Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-[140px] h-[140px] rounded-full bg-opacity-30 opacity-0 group-hover:opacity-50 transition-all duration-500 blur-2xl ${unifiedColor}`}
          />
        </div>

        {/* Device Image */}
        <div className="relative w-[120px] h-[120px] flex justify-center items-center transition-all duration-300 group-hover:scale-105">
          <Image
            src={require(`@/public/devices/${device}.svg`)}
            alt={device}
            className="object-contain drop-shadow-md transition-all duration-300"
            width={120}
            height={120}
          />
        </div>

        {/* Device Name */}
        <h3 className="text-lg font-bold capitalize text-gray-50 transition-all duration-300 group-hover:text-white">
          {device}
        </h3>
      </div>

      {/* "Coming Soon" Badge with Soft Pulse Effect */}
      {soon && (
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs md:text-sm text-white font-medium tracking-wide shadow-md bg-gray-800 rounded-full animate-pulse">
          Coming Soon 🚀
        </p>
      )}
    </Link>
  );
}

export default DeviceCard;

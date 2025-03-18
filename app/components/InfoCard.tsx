import React from "react";
import Link from "next/link";

type InfoCardProps = {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  fromColor?: string; // Gradient start color
  toColor?: string; // Gradient end color
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  link,
  linkText = "اعرف المزيد 🚀",
  fromColor = "from-purple-400", // Default gradient colors
  toColor = "to-pink-300",
}) => {
  return (
    <div
      className={`relative p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-100 
      before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br ${fromColor} ${toColor} before:rounded-2xl before:opacity-20`}
    >
      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        {title}
      </h3>
      <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
      {link && (
        <Link
          href={link}
          target="_blank"
          className="mt-3 inline-block text-teal-900 underline hover:text-teal-600"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default InfoCard;

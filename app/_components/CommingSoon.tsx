import React from "react";

function CommingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#5145e5] to-[#8b5cf6] flex flex-col items-center justify-center">
      <h1 className="text-center  text-4xl md:text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
      </h1>
      <p className="text-white text-base md:text-lg mb-8 text-center" dir="ltr">
        We&apos;re working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
}

export default CommingSoon;

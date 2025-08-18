import { cn } from "@/utils";
import Link from "next/link";

const HeroSection = ({
  className,
  title,
  description,
  button1,
  button2,
}: {
  className: string;
  title: string;
  description: string;
  button1?: {
    text: string;
    href: string;
  };
  button2?: {
    text: string;
    href: string;
  };
}) => {
  return (
    <div
      className={cn(
        `relative flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[calc(100vh-60px)] py-10`,
        className
      )}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-Red to-Red2 opacity-60 mix-blend-multiply" />
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-Text to-dark opacity-75 mix-blend-multiply" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center text-white relative z-10 h-full w-full">
        <h1 className="text-3xl md:text-4xl lg:text-H1 font-bold text-white">{title}</h1>
        <p className="text-lg md:text-xl lg:text-paragraph mt-4">{description}</p>
        {button1 || button2 ? (
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-20 mt-12 md:mt-16 lg:mt-24 w-full justify-center">
            {button1 && (
              <Link 
                href={button1.href} 
                className="w-full sm:w-auto text-center text-white px-6 sm:px-10 md:px-16 lg:px-20 py-4 sm:py-6 lg:py-8 rounded-[16px] font-medium text-lg sm:text-xl lg:text-2xl transition-colors bg-gradient-to-r from-Red to-Red2"
              >
                {button1.text}
              </Link>
            )}
            {button2 && (
              <Link 
                href={button2.href} 
                className="w-full sm:w-auto text-center text-white px-6 sm:px-10 md:px-16 lg:px-20 py-4 sm:py-6 lg:py-8 rounded-[16px] font-medium text-base sm:text-xl lg:text-paragraph border-2 sm:border-[3px] md:border-4 lg:border-[5px] border-white flex items-center justify-center"
              >
                {button2.text}
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSection;

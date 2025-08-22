'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SupportUs from "./SupportUs";

const FooterLinkList = ({ title, links }) => (
  <div className="w-fit md:w-fit">
    <h3 className="text-Red text-H6 font-bold leading-normal pb-[10px]">
      {title}
    </h3>
    <ul className="space-y-0">
      {links.map(({ text, clickHandler }, index) => (
        <li key={index}>
          <button
            className="hover:text-Red transition-colors text-nav_link font-bold leading-normal py-[8px]"
            onClick={(e) => {
              e.preventDefault();
              clickHandler();
            }
            }

          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const router = useRouter();
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const FOOTER_CONTENT = {
    logo: {
      src: "/second-logo.svg",
      alt: "عينا سلسبيلا",
      title: "عَيْنًا سَلْسَبِيلًا",
    },
    activationButton: {
      logo: "/logo-small.svg",
      href: "/setupvalues",
      text: "فعّل الحماية",
    },
    importantLinks: {
      title: "روابط تهمك",
      links: [
        { text: "الصفحة الرئيسية", clickHandler: () => router.push("/") },

        { text: "مستويات الحماية", clickHandler: () => router.push("/setupvalues") },
        { text: "خدمة العملاء", clickHandler: () => router.push("/support") },
        {
          text: "ادعمنا", clickHandler: () => setIsSupportOpen(true),
        },
        //Todo remove comments when blog is finished
        // { href: '/blogs', text: 'المدونة' },
      ],
    },
    aboutMafazaa: {
      title: "عن مفازا",
      links: [
        { text: "مفازا", clickHandler: () => router.push("https://mafazaa.com") },
        { text: "انضم إلينا", clickHandler: () => router.push("https://mafazaa.com/join") },
        {
          text: "مشاريعنا",
          clickHandler: () => router.push("https://mafazaa.com/#projects"),
        },
        //Todo remove comments when blog is finished
        // { href: '/blogs', text: 'مدونة مفازا' },
      ],
    },
  };
  return (
    <>
      <footer className="bg-gradient-to-br from-Text via-dark to-dark text-[#DADADA] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center gap-12 md:flex-row md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-40">
            <div className="w-fit flex flex-col justify-center items-center gap-10">
              <Image
                src={FOOTER_CONTENT.logo.src}
                alt={FOOTER_CONTENT.logo.alt}
                width={300}
                height={100}
              />
              <Link
                href={FOOTER_CONTENT.activationButton.href}
                className="bg-gradient-to-r from-Red to-Red2 text-white flex justify-center items-center gap-5 w-full py-[25px] px-6 md:px-[100px] rounded-2xl hover:bg-opacity-90 transition-all text-nav_link font-bold leading-normal"
              >
                <Image
                  src={FOOTER_CONTENT.activationButton.logo}
                  alt=""
                  width={55}
                  height={25}
                />
                {FOOTER_CONTENT.activationButton.text}
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
              <FooterLinkList
                title={FOOTER_CONTENT.importantLinks.title}
                links={FOOTER_CONTENT.importantLinks.links}
              />
              <FooterLinkList
                title={FOOTER_CONTENT.aboutMafazaa.title}
                links={FOOTER_CONTENT.aboutMafazaa.links}
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="  top-0 left-0 z-50 flex items-center justify-center bg-black/50">
        <SupportUs
          close={true}
          isOpen={isSupportOpen}
          onClose={() => setIsSupportOpen(false)}
        />
      </div>
    </>
  );
};

export default Footer;

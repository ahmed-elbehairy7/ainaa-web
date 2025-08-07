import Image from 'next/image';
import Link from 'next/link';

const FOOTER_CONTENT = {
  logo: {
    src: '/second-logo.svg',
    alt: 'عينا سلسبيلا',
    title: 'عَيْنًا سَلْسَبِيلًا',
  },
  activationButton: {
    logo:'/logo-small.svg',
    href: '/setupvalues',
    text: 'فعّل الحماية',
  },
  importantLinks: {
    title: 'روابط تهمك',
    links: [
      { href: '/', text: 'الصفحة الرئيسية' },
      { href: '/setupvalues', text: 'مستويات الحماية' },
      { href: '/support', text: 'خدمة العملاء' },
      { href: '/donate', text: 'ادعمنا' },
      { href: '/blogs', text: 'المدونة' },
    ],
  },
  aboutMafazaa: {
    title: 'عن مفازا',
    links: [
      { href: '/about', text: 'مفازا' },
      { href: '/join', text: 'انضم إلينا' },
      { href: '/contribute', text: 'مشاريعنا' },
      { href: '/blogs', text: 'مدونة مفازا' },
    ],
  },
};

const FooterLinkList = ({ title, links }) => (
  <div className='w-fit md:w-fit'>
    <h3 className='text-Red text-H6 font-bold leading-normal pb-[10px]'>{title}</h3>
    <ul className='space-y-2'>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className='hover:text-Red transition-colors text-nav_link font-bold leading-normal py-[18px]'
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-Text via-dark to-dark text-[#DADADA] py-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-[200px]'>
          {/* Logo and Activation Button */}
          <div className='w-fit flex flex-col justify-center items-center gap-10'>
            <Image
              src={FOOTER_CONTENT.logo.src}
              alt={FOOTER_CONTENT.logo.alt}
              width={300}
              height={100}
            />
            <Link
              href={FOOTER_CONTENT.activationButton.href}
              className='bg-gradient-to-r from-Red to-Red2 text-white flex justify-center items-center gap-5 w-full py-[25px] px-[100px] rounded-2xl hover:bg-opacity-90 transition-all text-nav_link font-bold leading-normal'
            >
              <Image
                src={FOOTER_CONTENT.activationButton.logo}
                alt=''
                width={55}
                height={25}
              />
              {FOOTER_CONTENT.activationButton.text}
            </Link>
          </div>

          {/* Important Links */}
          <div className='flex gap-[100px]'>
            <FooterLinkList
              title={FOOTER_CONTENT.importantLinks.title}
              links={FOOTER_CONTENT.importantLinks.links}
            />

            {/* About Mafazaa */}
            <FooterLinkList
              title={FOOTER_CONTENT.aboutMafazaa.title}
              links={FOOTER_CONTENT.aboutMafazaa.links}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

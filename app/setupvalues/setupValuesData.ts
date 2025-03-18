import {
  highDoh,
  lowDoh,
  PrimaryHigh,
  PrimaryLow,
  SecondaryHigh,
  SecondaryLow,
} from "@/importantLinks";

const setupValuesData: { gen1: genSetupValues; gen2: genSetupValues } = {
  gen1: {
    low: {
      ar: {
        title: "الحماية المنخفضة",
      },
      subdomain: "low-dns",
      primary: `${PrimaryLow}`,
      secondary: `${SecondaryLow}`,
      doh: lowDoh,
      categories: [
        "الأباحية",
        "العري",
        "ألانمي",
        "المانجا",
        "القمار",
        "الاعلانات",
      ],
    },
    high: {
      ar: {
        title: "الحماية العالية",
      },
      subdomain: "high-dns",
      primary: `${PrimaryHigh}`,
      secondary: `${SecondaryHigh}`,
      doh: highDoh,
      categories: [
        "كل مافي الحماية المنخفضة",
        "الموسيقى",
        "الأفلام",
        "التيك توك",
      ],
    },
  },
  gen2: {
    low: {
      ar: {
        title: "الحماية المنخفضة",
      },
      subdomain: "low-proxy",
      primary: "{primary ip address}",
      secondary: "{secondary ip address}",
      doh: highDoh,
      categories: [
        "Adware",
        "Dating",
        "Nudity",
        "Pornography",
        "Web Spam",
        "Adult Themes",
        "Alcohol",
        "Drugs",
        "Gambling",
        "Lingeries/Bikini",
        "Sexuality",
        "Tobacco",
        "Advertisements",
        "Anime/Manga/Webcomic",
      ],
    },
    high: {
      ar: {
        title: "الحماية العالية",
      },
      subdomain: "high-proxy",
      primary: "{primary ip address}",
      secondary: "{secondary ip address}",
      doh: highDoh,
      categories: ["All Low Categories", "Music", "Movies"],
    },
  },
};

export default setupValuesData;

type genSetupValues = {
  low: levelSetupValues;
  high: levelSetupValues;
};

export type levelSetupValues = {
  ar: { title: string };
  subdomain: string;
  primary: string;
  secondary: string;
  doh: string;
  categories: string[];
};

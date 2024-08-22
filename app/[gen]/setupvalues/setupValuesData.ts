const setupValuesData: { gen1: genSetupValues; gen2: genSetupValues } = {
	gen1: {
		low: {
			ar: {
				title: "الحماية المنخفضة",
			},
			subdomain: "low-dns",
			primary: "157.241.6.180",
			secondary: "157.241.47.209",
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
			subdomain: "high-dns",
			primary: "15.184.191.201",
			secondary: "15.184.243.155",
			categories: ["All Low Categories", "Music", "Movies"],
		},
	},
	gen2: {
		low: {
			ar: {
				title: "الحماية المنخفضة",
			},
			subdomain: "low-dns",
			primary: "157.241.6.180",
			secondary: "157.241.47.209",
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
			subdomain: "high-dns",
			primary: "15.184.191.201",
			secondary: "15.184.243.155",
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
	categories: string[];
};

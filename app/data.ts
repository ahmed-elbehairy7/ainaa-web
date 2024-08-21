import routerIcon from "../public/router.svg";
import windowsIcon from "../public/windows.svg";
import mobileIcon from "../public/mobile.svg";
// Devices
const router = {
	title: "router",
	description: ["description1", "description2", "description3"],
	image: routerIcon,
};
const windows = {
	title: "windows",
	description: ["description1", "description2", "description3"],
	image: windowsIcon,
};
const mobile = {
	title: "mobile",
	description: ["description1", "description2", "description3"],
	image: mobileIcon,
};
export { router, windows, mobile };

const RouterSteps1 = [
	{
		title: "الخطوة الأولى",
		description: "الخطوة الأولى",
		image: routerIcon,
	},
	{
		title: "الخطوة الثانية",
		description: "الخطوة الثانية",
		image: routerIcon,
	},
];
const WindowsSteps1 = [
	{
		title: "الخطوة الأولى",
		description: "الخطوة الأولى",
		image: routerIcon,
	},
	{
		title: "الخطوة الثانية",
		description: "الخطوة الثانية",
		image: routerIcon,
	},
];
const MobileSteps1 = [
	{
		title: "الخطوة الأولى",
		description: "الخطوة الأولى",
		image: routerIcon,
	},
	{
		title: "الخطوة الثانية",
		description: "الخطوة الثانية",
		image: routerIcon,
	},
];
const RouterSteps2 = [
	{
		title: "الخطوة الأولى",
		description: "الخطوة الأولى",
		image: routerIcon,
	},
	{
		title: "الخطوة الثانية",
		description: "الخطوة الثانية",
		image: routerIcon,
	},
];
const WindowsSteps2 = [
	{
		title: "الخطوة الأولى",
		description: "الخطوة الأولى",
		image: routerIcon,
	},
	{
		title: "الخطوة الثانية",
		description: "الخطوة الثانية",
		image: routerIcon,
	},
];
const MobileSteps2 = [
	{
		title: "الخطوة الأولى",
		description: "الخطوة الأولى",
		image: routerIcon,
	},
	{
		title: "الخطوة الثانية",
		description: "الخطوة الثانية",
		image: routerIcon,
	},
];
export {
	RouterSteps1,
	WindowsSteps1,
	MobileSteps1,
	RouterSteps2,
	WindowsSteps2,
	MobileSteps2,
};
// GENS
const GEN1 = {
	href: "/gen1",
	title: "الجيل الأول",
	description: [
		"لا يسمح بالدخول للمواقع الإباحي",
		"حماية من بعض هجمات الأمن السيبراني",
		"حجب (انمي - مانجا - مواعدة - كحوليات - خمور - مخدرات - قمار - تبغ - اعلانات)",
	],
	routerSteps: RouterSteps1,
	windowsSteps: WindowsSteps1,
	mobileSteps: MobileSteps1,
	device: [router, windows, mobile],
	gen: 1,
	genName: "GEN1",
	genNameAr: "الجيل الأول",
};
const GEN2 = {
	href: "/gen2",
	title: "الجيل الثاني",
	description: [
		"المستوى المنخفض كله",
		"مواقع الأفلام و المسلسلات",
		"مواقع الأغاني و الموسيقى",
	],
	routerSteps: RouterSteps2,
	windowsSteps: WindowsSteps2,
	mobileSteps: MobileSteps2,
	device: [router, windows, mobile],
	gen: 2,
	genName: "GEN2",
	genNameAr: "الجيل الثاني",
};

export { GEN1, GEN2 };

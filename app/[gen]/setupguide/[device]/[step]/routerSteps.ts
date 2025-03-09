import {
	checkActivationStep,
	customerSupportStep,
	supportUsStep,
} from "./commonSteps";
import { Steps } from "./stepData";

const routerSteps: { gen1: Steps } = {
	gen1: {
		step1: customerSupportStep,
		step2: [
			{
				data: "ابدأ بالدخول إلى صفحة الراوتر في منزلك: افتح المتصفح واكتب في شريط العنوان 192.168.1.1.",
				type: "text",
			},
			{
				data: 0,
				type: "screenshot",
			},
		],
		step3: [
			{
				data: "عند دخولك لصفحة الراوتر، سيُطلب منك إدخال اسم المستخدم وكلمة المرور. غالبًا ما تكون القيم الافتراضية هي: username: 'admin' و password: 'admin'. جربهما أولاً.",
				type: "text",
			},
			{
				data: 0,
				type: "screenshot",
			},
			{
				data: "إذا لم تنجح البيانات الافتراضية، ابحث عن بيانات الدخول المطبوعة على ظهر الراوتر أو العلبة واستخدمها.",
				type: "text",
			},
			{
				data: 1,
				type: "screenshot",
			},
			{
				data: "وإذا لم تنجح حتى بعد ذلك، فهذا يعني أن بيانات الدخول قد تم تغييرها، ويجب عليك الرجوع إلى الشخص المسؤول عن الشبكة.",
				type: "text",
			},
		],
		step4: [
			{
				type: "text",
				data: "اختر مستوى الحماية الذي يناسب احتياجاتك:",
			},
			{
				type: "text",
				data: "• الحماية المنخفضة: primary: 157.241.6.180 , secondary: 157.241.47.209",
			},
			{
				type: "text",
				data: "• الحماية العالية: primary: 15.184.191.201 , secondary: 15.184.243.155",
			},
			{
				type: "link",
				data: {
					href: "/setupvalues",
					text: "للمزيد من التفاصيل حول كلا المستويين، اضغط هنا ➡️",
				},
			},
			{
				type: "text",
				data: "بعد اختيار مستوى الحماية، قم بنسخ عنوان الخادم الأساسي والثانوي؛ ستحتاجهما في الخطوة التالية.",
			},
		],
		step5: [
			{
				type: "text",
				data: "ادخل على الرابط التالي وابحث عن موديل الراوتر الخاص بك لمعرفة كيفية تفعيل الحماية بشكل صحيح:",
			},
			{
				type: "text",
				data: "ملاحظة: لا تستخدم الأرقام المعروضة في الصفحة مباشرة؛ تأكد من إدخال الأرقام الخاصة بمستوى الحماية الذي اخترته.",
			},
			{
				type: "link",
				data: {
					href: "https://support.opendns.com/hc/en-us/sections/206253667-Individual-Router-Configurations",
					text: "تعليمات تفعيل الحماية",
				},
			},
		],
		step6: [
			{
				type: "text",
				data: "مبروك، الحمدلله! لقد تم تفعيل الحماية بنجاح.",
			},
			{
				type: "link",
				data: {
					href: "/gen1/setupguide",
					text: "هل تريد الانتقال إلى الجهاز التالي؟",
				},
			},
		],
		step7: checkActivationStep,
		step8: supportUsStep,
	},
};

export default routerSteps;

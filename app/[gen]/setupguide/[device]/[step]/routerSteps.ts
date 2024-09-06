import stepOne from "@/public/setupguide/router/stepOne.png";
import stepTwo from "@/public/setupguide/router/stepTwo.png";
import stepTwo2 from "@/public/setupguide/router/stepTwo2.jpeg";
import { Steps } from "./stepData";

const routerSteps: { gen1: Steps } = {
	gen1: {
		step1: [
			{
				data: "حضرتك أول حاجة هتخش على صفحة الراوتر بتاعت البيت انك تكتب في المتصفح من فوق 192.168.1.1",
				type: "text",
			},
			{
				data: stepOne,
				type: "screenshot",
			},
		],
		step2: [
			{
				data: "بمجرد دخولك على صفحة الراوتر هيتطلب منك يوزر و باسوورد، أغلب الراوترات بيكون اليوزر بتاعها 'admin' و الباسوورد بردو بتكون 'admin'، ف أول حاجة هتعملها هي انك تجرب الاتنين دول ",
				type: "text",
			},
			{
				data: stepTwo,
				type: "screenshot",
			},
			{
				data: "و في حالة انها مشتغلتش هتدور على اليوزر و الباسسورد على ضهر الراوتر او العلبة و تخش بيهم",
				type: "text",
			},
			{
				data: stepTwo2,
				type: "screenshot",
			},

			{
				data: "اذا عملت كده و مشتغلش يبقى ده معناه ان في حد غيرها و المفروض ترجع للشخص ده",
				type: "text",
			},
		],
		step3: [
			{
				type: "text",
				data: "المفروض ان حضرتك الوقتي محدد مستوى الحماية اللي هتفعله عندك في الراوتر",
			},
			{
				type: "link",
				data: {
					href: "/setupvalues",
					text: "حضرتك هتلاقي في الصفحة دي تفاصيل الحماية المنخفضة و الحماية العالية",
				},
			},
			{
				type: "text",
				data: "بعد ما تحدد مستوى الحماية، هتنسخ الprimary dns server و الsecondary dns server عشان هنحتاجهم في الخطوة الجاية",
			},
		],
		step4: [
			{
				type: "text",
				data: "بعد ما تخش على صفحة الراوتر و تنسخ الأرقام الخاصة بمستوى الحماية اللي عايز تنفذه هتخش على الرابط الجاي ده و تبحث عن نوع او موديل الراوتر بتاعك و تشوف ازاي تفعل الحماية في الراوتر بتاعك",
			},
			{
				type: "text",
				data: "خلي بالك ان لو حطيت الارقام اللي في الصفحة دي الحماية مش هتتفعل! لازم تحط الارقام الخاصة بمستوى الحماية الخاص بيك",
			},
			{
				type: "link",
				data: {
					href: "https://support.opendns.com/hc/en-us/sections/206253667-Individual-Router-Configurations",
					text: "طريقة تفعيل الحماية",
				},
			},
		],
		step5: [
			{
				type: "text",
				data: "ألف مبروك كده الحمدلله تم تفعيل الحماية عندك",
			},
			{
				type: "link",
				data: {
					href: "/gen1/setupguide",
					text: "الجهاز اللي بعده؟",
				},
			},
		],
	},
};

export default routerSteps;

import stepOne from "@/public/setupguide/windows/stepOne.png";
import stepThree from "@/public/setupguide/windows/stepThree.png";
import stepThree2 from "@/public/setupguide/windows/stepThree2.png";
import stepFour from "@/public/setupguide/windows/stepFour.png";
import stepFour2 from "@/public/setupguide/windows/stepFour2.png";
import stepFive from "@/public/setupguide/windows/stepFive.png";
import stepFive2 from "@/public/setupguide/windows/stepFive2.png";

import { Steps } from "./stepData";

const windowsSteps: { gen1: Steps } = {
	gen1: {
		step1: [
			{
				type: "text",
				data: "أول حاجة هتدوس على زرار الويندوز من الكيبورد و تفتح الstart menu",
			},
			{
				type: "text",
				data: "بعد كده هتكتب 'cmd' في السيرش لحد مايظهر البرنامج",
			},
			{
				type: "text",
				data: "بعد كده هتدوس 'run as administrator' زي الصورة تحت عشان يشتغل",
			},
			{
				type: "screenshot",
				data: stepOne,
			},
		],
		step2: [
			{
				type: "text",
				data: "من هنا الخطوات هتبقى صعبة شوية ف خلي بالك كويس و ركز في التفاصيل الدقيقة اوي لإن الغلطة هنا ممكن تخلي النت ميشتغلش ع اللاب",
			},
		],
		step3: [
			{
				type: "text",
				data: "أول حاجة هتكتبها بعد ما يفتح هي الطلاسم دي: ",
			},
			{
				type: "text",
				data: "netsh interface ip show interfaces",
			},
			{ type: "screenshot", data: stepThree },
			{
				type: "text",
				data: "بعد كده هتدوس enter",
			},
			{
				type: "text",
				data: "بعد ما تدوس enter المفروض يظهرلك جدول بالشكل ده",
			},
			{
				type: "screenshot",
				data: stepThree2,
			},
			{
				type: "text",
				data: " هتلاقي جدول ظهرلك، احنا ان شاء الله مش محتاجين منه غير خانة الname... المفروض ان شاء الله اللي هنحتاجهم Wi-Fi و Ethernet",
			},
			{
				type: "text",
				data: "- الخطوات الجاية دي هتعملها ان شاء الله لكل interface بتستعملها و في الغالب هتلاقي جمب اسمها ف الجدول connected لو انت متصل بيها",
			},
		],
		step4: [
			{
				type: "text",
				data: `- كل ما تلاقي كلمة 'interface' بين قوسين بالشكل ده { interface } في الكلام الجاي هتستبدلها بإسم الinterface بتاعتك و تكتبها بين (") زي كده مثلا: "Wi-Fi"`,
			},
			{
				type: "text",
				data: "- هتستبدل primary_dns بالprimary dns الخاص بمحتوى الحماية اللي انت مختاره و نفس الكلام على الsecondary",
			},
			{ type: "text", data: "أول حاجة هتكتب الكلام ده" },
			{
				type: "text",
				data: "netsh interface ip set dns { interface } static { primary_dns }",
			},

			{
				type: "screenshot",
				data: stepFour,
			},
			{
				type: "text",
				data: "خلينا نفترض مثلا انك عايز تفعل الحماية على الinterface بتاعت الwifi و عايز حماية عالية يبقى هتكتب الأمر بالشكل ده:",
			},
			{
				type: "text",
				data: 'netsh interface ip set dns "Wi-Fi" static 15.184.191.201',
			},
			{
				type: "screenshot",
				data: stepFour2,
			},
		],
		step5: [
			{
				type: "text",
				data: "دلوقتي مطلوب تكتب الأمر ده و تدوس enter",
			},
			{
				type: "text",
				data: "netsh interface ip add dns name={ interface } { secondary_dns } index=2",
			},
			{
				type: "screenshot",
				data: stepFive,
			},
			{
				type: "text",
				data: "لو افترضنا انك اخترت الحماية العالية و عايز تعملها لinterface ال wifi هيكون الأمر شكله كالتالي",
			},
			{
				type: "text",
				data: 'netsh interface ip add dns name="Wi-Fi" 15.164.243.155 index=2',
			},
			{
				type: "screenshot",
				data: stepFive2,
			},
		],
		step6: [
			{
				type: "text",
				data: "لو مشيت على الخطوات دي صح ف ألب مبروك عليك فعلت الحماية على جهاز الويندوز",
			},
		],
	},
};

export default windowsSteps;

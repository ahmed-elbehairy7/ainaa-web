import {
  checkActivationStep,
  customerSupportStep,
  supportUsStep,
} from "./commonSteps";
import { Steps } from "./stepData";
console.log(checkActivationStep.filter((e, i) => i == 0));

const androidSteps: { gen1: Steps } = {
  gen1: {
    step1: customerSupportStep,
    step2: [
      {
        type: "text",
        data: "أولاً، افتح الإعدادات (Settings) على جهازك.",
      },
      {
        type: "screenshot",
        data: 0, // صورة توضح مكان زر الإعدادات
      },
      {
        type: "text",
        data: "يمكنك استخدام زر البحث في أعلى الصفحة للعثور على الإعدادات بسهولة.",
      },
      {
        type: "screenshot",
        data: 1, // صورة توضح مكان زر البحث في الإعدادات
      },
      {
        type: "text",
        data: "اكتب 'DNS' في خانة البحث واختر 'خاصية DNS' أو 'Private DNS' من النتائج.",
      },
      {
        type: "screenshot",
        data: 2, // صورة توضح مكان زر البحث في الإعدادات
      },
    ],
    step3: [
      {
        type: "text",
        data: "أختر dns الخاص أو private dns",
      },
      {
        type: "screenshot",
        data: 0, // صورة توضح مكان إدخال عنوان DNS
      },
      {
        type: "text",
        data: "قم بتغيير إعدادات DNS إلى 'اسم مضيف مزود DNS الخاص' أو 'Private DNS provider hostname'.",
      },
      {
        type: "screenshot",
        data: 1, // صورة توضح مكان إدخال عنوان DNS
      },
      {
        type: "text",
        data: `أدخل عنوان DoH التالي:\n  
        للحماية العالية: \n high-dns.mafazaa.com \n 
        للحماية المنخفضة: \n low-dns.mafazaa.com`,
      },
      {
        type: "screenshot",
        data: 2, // صورة توضح مكان إدخال عنوان DNS
      },
    ],
    step4: [
      {
        type: "text",
        data: "اضغط على 'حفظ' أو 'Save' لتطبيق التغييرات.",
      },
      {
        type: "screenshot",
        data: 0, // صورة توضح مكان إدخال عنوان DNS
      },
      {
        type: "text",
        data: "سيتم الآن تفعيل DNS لحجب المواقع الإباحية على جهازك.",
      },
    ],
    step5: checkActivationStep.filter((e, i) => i !== 0),
    step6: customerSupportStep,
    step7: supportUsStep,
  },
};

export default androidSteps;

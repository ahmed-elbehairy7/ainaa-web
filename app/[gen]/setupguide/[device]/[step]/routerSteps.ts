import {
  checkActivationStep,
  customerSupportStep,
  supportUsStep,
} from "./commonSteps";
import { Steps } from "./stepData";

const routerSteps: { gen1: Steps } = {
  gen1: {
    // الخطوة 1: دعم العملاء
    step1: customerSupportStep,

    // الخطوة 2: الدخول لصفحة الراوتر
    step2: [
      {
        type: "text",
        data: "ابدأ بالدخول إلى صفحة الراوتر في منزلك: افتح المتصفح واكتب في شريط العنوان 192.168.1.1.",
      },
      {
        type: "screenshot",
        data: 0,
      },
    ],

    // الخطوة 3: تسجيل الدخول لصفحة الراوتر
    step3: [
      {
        type: "text",
        data: "عند دخولك لصفحة الراوتر، سيُطلب منك إدخال اسم المستخدم وكلمة المرور.",
      },
      {
        type: "text",
        data: "غالبًا ما تكون القيم الافتراضية:\n - **اسم المستخدم:** admin \n - **كلمة المرور:** admin \n جربهما أولًا.",
      },
      {
        type: "screenshot",
        data: 0,
      },
      {
        type: "text",
        data: "إذا لم تنجح البيانات الافتراضية، ابحث عن بيانات الدخول المطبوعة على ظهر الراوتر أو العلبة واستخدمها.",
      },
      {
        type: "screenshot",
        data: 1,
      },
      {
        type: "text",
        data: "إذا لم تنجح حتى بعد ذلك، فهذا يعني أن بيانات الدخول قد تم تغييرها، ويجب عليك الرجوع إلى الشخص المسؤول عن الشبكة.",
      },
    ],

    // الخطوة 4: إعدادات الراوتر وتفعيل الحماية (DNS)
    step4: [
      {
        type: "text",
        data: "📌 ابحث يدويًا عن إعدادات الـ **Primary DNS** و **Secondary DNS** داخل صفحة الراوتر.",
      },
      {
        type: "text",
        data: "🔍 ستجد هذه الإعدادات غالبًا داخل أحد الأقسام التالية:\n - **LAN Settings** (إعدادات الشبكة المحلية)\n - **WAN Settings** (إعدادات الإنترنت)\n - **Internet Settings** (إعدادات الاتصال بالإنترنت)\n - **DHCP Settings** (إعدادات توزيع العناوين)\n - **Network Settings** (إعدادات الشبكة)",
      },
      {
        type: "text",
        data: "🛠 إذا لم تتمكن من العثور عليها، تواصل مع الدعم.",
      },
      {
        type: "link",
        data: {
          href: "https://www.facebook.com/messages/t/419901901197382",
          text: "📩 تواصل عبر ماسنجر",
        },
      },
      {
        type: "text",
        data: "📌 **اختر مستوى الحماية المناسب لك:**",
      },
      {
        type: "text",
        data: "✅ **حماية منخفضة:**\n - **Primary DNS:** 157.241.6.180\n - **Secondary DNS:** 157.241.47.209",
      },
      {
        type: "text",
        data: "✅ **حماية عالية:**\n - **Primary DNS:** 15.184.191.201\n - **Secondary DNS:** 15.184.243.155",
      },
    ],

    // الخطوة 5: تفعيل الخدمة
    step5: checkActivationStep,

    // الخطوة 6: دعم العملاء (إذا كنت تحتاج للمساعدة)
    step6: customerSupportStep,

    // الخطوة 7: دعم المشروع
    step7: supportUsStep,
  },
};

export default routerSteps;

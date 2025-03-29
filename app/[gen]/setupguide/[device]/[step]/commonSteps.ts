import { joinUs, messenger, support_us } from "@/importantLinks";
import { Step } from "./stepData";

export const supportUsStep: Step[] = [
  {
    type: "text",
    data: "شارك الموقع ورابط الإعدادات مع أصدقائك وعائلتك،وعلى وسائل التواصل الاجتماعي حتى تصل الفائدة لأكبر عدد ممكن. 📢",
  },
{
 data: "ولا تنسى الاشتراك في قناة الواتساب ليصلك كل جديد",
type: "text"
},
{
 type: "link",
 data: {
href: "https://whatsapp.com/channel/0029Vb5NRuqLY6dCU3qeXO2i",
text: "اضغط هنا للدخول إلى قناة الواتساب"
}
},

  {
    type: "link",
    data: {
      href: support_us,
      text: "🏦 يمكنك التبرع مباشرة  عبر هذا الرابط ➡️",
    },
  },
  {
    type: "link",
    data: {
      href: joinUs,
      text: "🚀 انضم إلى فريق التطوع️ ➡️",
    },
  },
  {
    type: "text",
    data: "أكبر دعم هو أن تدعو لنا بالتوفيق والقبول، نسأل الله أن يبارك في هذا العمل. ❤️",
  },
];

export const checkActivationStep: Step[] = [
  {
    type: "text",
    data: "بعد تفعيل الإعدادات، أعد تشغيل جهاز الراوتر لتطبيق التغييرات بالكامل. 🔄",
  },
  {
    type: "text",
    data: "تحقق مما إذا كانت الحماية مفعلة عبر جوجل من خلال الرابط التالي: 🔍",
  },
  {
    type: "link",
    data: {
      href: "http://google.com/safesearch",
      text: "فحص التصفح الآمن في Google",
    },
  },
  {
    type: "text",
    data: "إذا كان التصفح الآمن  مفعل، فهذا يعني أن الحماية تعمل بشكل صحيح. ✅",
  },
  {
    type: "text",
    data: "تحقق أيضًا من التفعيل على جهاز آخر متصل بنفس الشبكة للتأكد من تطبيق الحماية على الجميع. 📱",
  },
];

export const customerSupportStep: Step[] = [
  {
    type: "text",
data : "إذا كنت مبتلى و تريد تفعيلها بشكل لا تستطيع الخروج منه، لا تتردد في التواصل معنا"
  },
  {
    type: "text",
    data: "إذا واجهت أي مشكلة أو كنت بحاجة إلى دعم، لا تتردد في التواصل معنا",
  },
  {
    type: "link",
    data: {
      href: messenger,
      text: "📩 تواصل عبر ماسنجر",
    },
  },
  {
    type: "text",
    data: "ارسل وصفًا واضحًا للمشكلة، مع ذكر نوع الراوتر وخطوات التفعيل التي قمت بها. 🛠️",
  },
  {
    type: "text",
    data: "انتظر رد الدعم الفني، وسنساعدك بأسرع وقت ممكن لحل المشكلة. ⏳",
  },
];

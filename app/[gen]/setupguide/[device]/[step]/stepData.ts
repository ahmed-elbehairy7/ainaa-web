import { deviceName } from "@/app/[gen]/genData";
import { deviceParams } from "../deviceData";

export type stepName = "step1" | "step2" | "step3" | "step4";
export type stepParam = { step: stepName };

const stepData: { gen1: deviceSteps } = {
  gen1: {
    router: {
      step1: [
        {
          data: `حضرتك هتخش على صفحة الراوتر بتاعت البيت الصفحة اللي هي :
          <br/>
          192.168.1.1`,
          type: "text",
        },
        {
          data: `https://support.opendns.com/hc/en-us/sections/206253667-Individual-Router-Configurations`,
          type: "link",
        },
        {
          data: `
          ده لينك فيه ازاي تعمل حاجة زي كده للمعظم انواع الراوترات ان شاء الله مفيد بس خلي بالك انك هتحط الرقمين اللي قولنا عليهم مش الرقمين اللي ع الويبسايت`,
          type: "text",
        },
      ],
      step2: [
        {
          data: `حط فيها الرقمين دول على طول بإذن الله :`,
          type: "text",
        },
        {
          data: "primary dns: 157.241.6.180",
          type: "text",
        },
        {
          data: "secondary dns: 157.241.47.209",
          type: "text",
        },
        {
          data: "بعد كده ان شاء الله ترستر الراوتر و ياريت تقفل التليفون و تفتحه تاني عشان مرت علينا حالات مشتغلش إلا كده",
          type: "text",
        },
      ],
    },
    android: {
      step1: [
        {
          data: "أول حاجة ان شاء الله هتخش على الإعدادات",
          type: "text",
        },
        {
          data: "هتبحث عن 'private dns' او 'نظام أسماء النطاقات الخاصة",
          type: "text",
        },
        {
          data: "لو مش لاقيهم في البحث ممكن تلاقيهم جوا 'الاتصال و المشاركة' او 'connection and sharing'",
          type: "text",
        },
        {
          data: "لو لسه مش لاقيهم يبقى دور في اعدادات الشبكات او الواي فاي",
          type: "text",
        },
      ],
      step2: [
        {
          data: "بعد ما تلاقيها ان شاء الله هتدوس عليها و تختار 'اختيار مضيف مزد نظام أسماء النطاقات الخاصة' او 'privare dns provider hostname'",
          type: "text",
        },
        {
          data: `لو عايز حماية عالية هتكتب ده

          high-dns.mafazaa.com`,
          type: "text",
        },
        {
          data: `لو عايز حماية منخفضة هتكتب ده
low-dns.mafazaa.com`,
          type: "text",
        },
        {
          data: `و ان شاء الله يشتغل معاك في كل الحالات بإذن الله و لو واجهتك اي مشاكل ممكن ان شاء الله تتواصل معنا`,
          type: "text",
        },
      ],
    },
    windows: {
      step1: [
        {
          data: "أول حاجة هتدوس زرار الويندوز اللي على الكيبورد",
          type: "text",
        },
        {
          data: "هتكتب cmd",
          type: "text",
        },
        {
          data: `هتدوس right click عليه و تختار 
          <br/>
          "open as administrator"`,
          type: "text",
        },
      ],
      step2: [
        {
          data: `هتكتب اول حاجة :
          <br/>
          etsh interface ip show interfaces`,
          type: "text",
        },
        {
          data: `هتلاقي جدول ظهرلك، احنا ان شاء الله مش محتاجين منه غير خانة الname... المفروض ان شاء الله اللي هنحتاجهم Wi-Fi و Ethernet و ممكن تلاقي عندك كذا واحدة و غالبا هيكونو مترقمين`,
          type: "text",
        },
        {
          data: `الخطوات الجاية دي هتعملها ان شاء الله لكل interface بتستعملها و في الغالب هتلاقي جمب اسمها ف الجدول connected لو انت متصل بيها
كل ما تلاقي كلمة 'interface' بين قوسين بالشكل ده { interface } في الكلام الجاي هتستبدلها بإسم الinterface بتاعتك و تكتبها بين بين (") زي كده مثلا: "Wi-Fi"`,
          type: "text",
        },
      ],
      step3: [
        {
          data: `هتستبدل primary_dns بالprimary dns الخاص بمحتوى الحماية اللي انت مختاره و نفس الكلام على الsecondary`,
          type: "text",
        },
        {
          data: `netsh interface ip set dns {interface} static {primary_dns}`,
          type: "text",
        },
        {
          data: `netsh interface ip  add dns name={interface} {secondary_dns} index=2`,
          type: "text",
        },
        {
          data: `المفروض الأمرين دول بعد ماتكتبهم ميحصلش حاجة! في حالة انه كتبلك كلام كتير كده ف ده معناه ان في حاجة اتكتبت غلط و هتحتاج تعيد من الأول`,
          type: "text",
        },
      ],
      step4: [
        {
          data: `المفروض الأمرين دول بعد ماتكتبهم ميحصلش حاجة! في حالة انه كتبلك كلام كتير كده ف ده معناه ان في حاجة اتكتبت غلط و هتحتاج تعيد من الأول`,
          type: "text",
        },
        {
          data: `ipconfig /flushdns`,
          type: "text",
        },
        {
          data: `المفروض كده ان شاء الله اشتغل لو كتبت كل حاجة صح، ممكن تختبره بالأمر الآتي :
          <br/>
          netsh interface ip show dns`,
          type: "text",
        },
        {
          data: `المفروض يظهرلك الdns اللي معمول لكل interface ف شوف الinterfaces اللي عملتها و اتأكد ان عنواين السيرفر موجودة صح`,
          type: "text",
        },
      ],
    },
  },
};

export default stepData;

export interface stepParams extends deviceParams {
  step: stepName;
  devicesSteps: deviceSteps[];
}

export type deviceSteps = {
  router?: Steps;
  windows?: Steps;
  android?: Steps;
  linux?: Steps;
  ios?: Steps;
};

export type Steps = {
  step1: Step[];
  step2?: Step[];
  step3?: Step[];
  step4?: Step[];
};

export type Step = {
  type: "text" | "screenshot " | "link";
  data: string;
};

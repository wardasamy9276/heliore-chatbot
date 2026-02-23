import React from "react";

// تعريف TypeScript للوظائف
interface MainFunction {
  id: number;
  title: string;
  description: string;
  link?: string;
}

// بيانات 10 كروت مع نصوص أطول
const mainFunctions: MainFunction[] = [
  {
    id: 1,
    title: "المكالمات الآلية",
    description:
      "تحسين كفاءة وجودة اتصال العميل الخاص بك مع الذكاء الاصطناعى المتقدم. تُسجل المكالمات الواردة وتدار تلقائيًا لضمان عدم تفويت أي مكالمة مهمة وزيادة رضا العملاء.",
    link: "/calls",
  },
  {
    id: 2,
    title: "CRM & Contact",
    description:
      "نظام CRM شامل لإدارة العملاء والعملاء المتوقعين. إدارة الاتصالات، متابعة العملاء، إضافة علامات وحقول مخصصة، وتحليل النشاط بذكاء لزيادة فعالية إدارة العلاقات.",
    link: "/crmPage",
  },
  {
    id: 3,
    title: "البريد الإلكتروني والاتصال",
    description:
      "إدارة البريد الإلكتروني بشكل ذكي من خلال وكيل ذكي مستند إلى الذكاء الاصطناعي. تنظيم الرسائل، الرد التلقائي، وتتبع كل الأنشطة المهمة بطريقة آمنة ومرتبة.",
    link: "/email",
  },
  {
    id: 4,
    title: "التقويم والمواعيد",
    description:
      "إدارة المواعيد بسهولة، مزامنة متعددة مع Google Calendar و Outlook و Caldav. إرسال تذكيرات تلقائية لجميع المشاركين قبل كل موعد مع مزامنة دورية كل 15 دقيقة.",
    link: "/calendar",
  },
  {
    id: 5,
    title: "وسائل التواصل الاجتماعي والتسويق",
    description:
      "تكامل جميع حسابات السوشيال الخاصة بك مع المنصة لتسهيل إدارة الحملات، التواصل مع العملاء، وزيادة التفاعل مع المحتوى بشكل سلس وفعّال.",
    link: "/social",
  },
  {
    id: 6,
    title: "النظام والإدارة",
    description:
      "إدارة المستخدمين وملفاتهم بشكل كامل، إنشاء أدوار مخصصة، إدارة وكيل الذكاء الاصطناعي لكل قسم، والتحكم في الأذونات لكل تطبيق بشكل فردي.",
    link: "/system",
  },
  {
    id: 7,
    title: "واجهة المستخدم",
    description:
      "تصميم متجاوب وسهل الاستخدام لجميع الأجهزة. تجربة سلسة للمستخدم مع تحديثات واجهة مباشرة بدون الحاجة لإعادة تحميل الصفحة.",
    link: "/ui",
  },
  {
    id: 8,
    title: "المهام والإنتاجية",
    description:
      "إدارة المهام الذكية، إنشاء مهام تلقائيًا من المكالمات ورسائل البريد والاجتماعات. تحديد الأولويات، تعيين فرق العمل، وتتبع التقدم بكل سهولة.",
    link: "/tasks",
  },
  {
    id: 9,
    title: "التكيف والتكامل",
    description:
      "تكامل كامل مع API و Webhooks لتوسيع الوظائف وربط المنصة بأنظمة خارجية بسهولة. دعم REST API وواجهات مخصصة لإدارة البيانات.",
    link: "/integration",
  },
  {
    id: 10,
    title: "تسجيل الصوت والنسخ",
    description:
      "نسخ المكالمات بشكل آلي، مع التعرف على المتحدثين والطوابع الزمنية. تحليل المزاج العاطفي أثناء المكالمات لتحسين جودة الخدمة.",
    link: "/recording",
  },
];

export default function MainFunctionsCards(): any {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          الوظائف الرئيسية
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mainFunctions.map((func) => (
            <div
              key={func.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between h-full"
            >
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                  {func.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 whitespace-pre-line">
                  {func.description}
                </p>
              </div>
              {func.link && (
                <a
                  href={func.link}
                  className="mt-6 inline-block text-center bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition text-lg font-semibold"
                >
                  المزيد
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

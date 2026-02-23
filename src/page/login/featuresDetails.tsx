import { useState } from "react";

// تعريف الـ Types
type Section = {
  title: string;
  items: string[];
};

type Feature = {
  id: number;
  title: string;
  description: string;
  sections: Section[];
};

const featuresData: Feature[] = [
  {
    id: 6,
    title: "النظام والإدارة",
    description:
      "إدارة المستخدمين وملفاتهم بشكل كامل، إنشاء أدوار مخصصة، إدارة وكيل الذكاء الاصطناعي لكل قسم، والتحكم في الأذونات لكل تطبيق بشكل فردي.",
    sections: [
      {
        title: "إدارة المستخدمين",
        items: [
          "إضافة / تعديل / حذف المستخدمين",
          "إدارة الملفات الشخصية وسجل النشاط",
          "تفعيل أو تعطيل الحسابات",
          "تحديد حالة المستخدم (نشط – موقوف – قيد المراجعة)",
        ],
      },
      {
        title: "الأدوار والصلاحيات",
        items: [
          "إنشاء أدوار مخصصة (Admin – Manager – Staff)",
          "تحديد صلاحيات لكل دور بشكل دقيق",
          "التحكم في الوصول لكل صفحة أو ميزة",
          "ربط المستخدمين بالأدوار تلقائيًا",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "المهام والإنتاجية",
    description:
      "إدارة المهام الذكية، إنشاء مهام تلقائيًا من المكالمات ورسائل البريد والاجتماعات. تحديد الأولويات، تعيين فرق العمل، وتتبع التقدم بكل سهولة.",
    sections: [
      {
        title: "إدارة المهام الذكية",
        items: [
          "إنشاء المهام تلقائيًا من المكالمات ورسائل البريد والاجتماعات",
          "تحويل الاجتماعات إلى مهام قابلة للتنفيذ",
        ],
      },
      {
        title: "الأولويات والتنظيم",
        items: [
          "تحديد أولوية لكل مهمة",
          "جدولة المهام تلقائيًا",
          "تنبيهات عند التأخير",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "التكيف والتكامل",
    description:
      "تكامل كامل مع API و Webhooks لتوسيع الوظائف وربط المنصة بأنظمة خارجية بسهولة. دعم REST API وواجهات مخصصة لإدارة البيانات.",
    sections: [
      {
        title: "التكامل مع APIs",
        items: [
          "دعم REST API",
          "إنشاء واجهات API مخصصة",
          "إدارة الوصول لكل API",
        ],
      },
      {
        title: "Webhooks",
        items: ["إرسال إشعارات عند الأحداث المهمة", "ربط المنصة بأنظمة خارجية"],
      },
    ],
  },
  {
    id: 10,
    title: "تسجيل الصوت والنسخ",
    description:
      "نسخ المكالمات بشكل آلي، مع التعرف على المتحدثين والطوابع الزمنية. تحليل المزاج العاطفي أثناء المكالمات لتحسين جودة الخدمة.",
    sections: [
      {
        title: "نسخ المكالمات تلقائيًا",
        items: ["تحويل المكالمات إلى نصوص", "حفظ النسخ في النظام"],
      },
      {
        title: "التعرف على المتحدثين",
        items: ["تمييز المتحدثين وربطهم بحساباتهم", "توليد تقارير لكل متحدث"],
      },
    ],
  },
];

const Features = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 text-center">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">مميزات المنصة</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>

              <button
                onClick={() => toggleExpand(feature.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {expandedId === feature.id ? "إخفاء التفاصيل" : "عرض التفاصيل"}
              </button>

              {expandedId === feature.id && feature.sections.length > 0 && (
                <div className="mt-4 space-y-4 transition-all duration-300">
                  {feature.sections.map((section, idx) => (
                    <section
                      key={idx}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {section.title}
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              )}

              {expandedId === feature.id && feature.sections.length === 0 && (
                <p className="text-gray-500 mt-4">لا توجد تفاصيل إضافية</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

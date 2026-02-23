import { useState } from "react";

/* ================= TYPES ================= */
type StatCard = {
  title: string;
  value: string;
  description: string;
};

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

/* ================= DATA ================= */
const statsData: StatCard[] = [
  {
    title: "إجمالي المستخدمين",
    value: "1,248",
    description: "عدد المستخدمين النشطين على المنصة",
  },
  {
    title: "المهام الجارية",
    value: "342",
    description: "مهام قيد التنفيذ حاليًا",
  },
  {
    title: "مكالمات اليوم",
    value: "89",
    description: "مكالمات تم تحليلها اليوم",
  },
  {
    title: "تكاملات API",
    value: "17",
    description: "أنظمة متكاملة مع المنصة",
  },
];

const featuresData: Feature[] = [
  {
    id: 6,
    title: "النظام والإدارة",
    description:
      "إدارة المستخدمين، الأدوار، الصلاحيات، والتحكم الكامل في النظام.",
    sections: [
      {
        title: "إدارة المستخدمين",
        items: [
          "إضافة / تعديل / حذف المستخدمين",
          "إدارة الملفات الشخصية",
          "تفعيل وتعطيل الحسابات",
        ],
      },
      {
        title: "الأدوار والصلاحيات",
        items: [
          "إنشاء أدوار مخصصة",
          "تحديد الصلاحيات لكل دور",
          "التحكم في الوصول للميزات",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "المهام والإنتاجية",
    description: "إدارة المهام الذكية وتتبع الأداء وتحسين الإنتاجية.",
    sections: [
      {
        title: "إدارة المهام",
        items: ["إنشاء مهام تلقائيًا", "تعيين فرق العمل", "متابعة التقدم"],
      },
      {
        title: "الأولويات",
        items: ["تحديد أولوية المهام", "تنبيهات التأخير"],
      },
    ],
  },
  {
    id: 9,
    title: "التكامل والتوسع",
    description: "ربط المنصة بأنظمة خارجية عبر APIs و Webhooks.",
    sections: [
      {
        title: "REST APIs",
        items: ["إدارة المفاتيح", "صلاحيات الوصول"],
      },
      {
        title: "Webhooks",
        items: ["إشعارات فورية", "ربط أنظمة خارجية"],
      },
    ],
  },
];

const Dashboard = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      {/* ===== HEADER ===== */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
        <p className="text-gray-600 mt-1">
          نظرة شاملة على أداء النظام وإدارة المنصة
        </p>
      </header>

      {/* ===== STATS ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {stat.value}
            </p>
            <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
          </div>
        ))}
      </section>

      {/* ===== FEATURES ===== */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          وحدات النظام
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>

              <button
                onClick={() => toggleExpand(feature.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {expandedId === feature.id ? "إخفاء التفاصيل" : "عرض التفاصيل"}
              </button>

              {expandedId === feature.id && (
                <div className="mt-4 space-y-4">
                  {feature.sections.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl border">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {section.title}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

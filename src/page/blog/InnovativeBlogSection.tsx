import { useState } from "react";

type Post = {
  id: number;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
};

type Category = {
  id: number;
  name: string;
  nameEn: string;
  posts: Post[];
};

// بيانات وهمية لكل قسم
const categories: Category[] = [
  {
    id: 1,
    name: "أمان البيانات",
    nameEn: "Data Security",
    posts: [
      {
        id: 1,
        title: "أحدث تقنيات حماية البيانات",
        titleEn: "Latest Data Protection Technologies",
        summary: "مقال يوضح كيف يحمي النظام الذكي معلومات المرضى.",
        summaryEn:
          "Article explaining how the smart system protects patient data.",
      },
      {
        id: 2,
        title: "أفضل طرق تشفير البيانات",
        titleEn: "Best Data Encryption Methods",
        summary: "نصائح لتشفير البيانات وحماية خصوصية المستخدمين.",
        summaryEn: "Tips for encrypting data and protecting user privacy.",
      },
    ],
  },
  {
    id: 2,
    name: "طب",
    nameEn: "Medical",
    posts: [
      {
        id: 3,
        title: "أهمية التحقق بالبصمة في الأنظمة الطبية",
        titleEn: "Importance of Biometric Verification in Medical Systems",
        summary: "شرح كيف تحسن البصمة أمان النظام الطبي.",
        summaryEn:
          "Explaining how fingerprint improves medical system security.",
      },
    ],
  },
  {
    id: 3,
    name: "تكنولوجيا",
    nameEn: "Technology",
    posts: [
      {
        id: 4,
        title: "التقنيات الحديثة في الطب عن بعد",
        titleEn: "Modern Telemedicine Technologies",
        summary: "كيف تساعد التكنولوجيا عن بعد على تحسين الرعاية الطبية.",
        summaryEn: "How remote technology improves healthcare services.",
      },
    ],
  },
];

const HospitalBlogSection: React.FC = () => {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [activeCategoryId, setActiveCategoryId] = useState<number>(
    categories[0].id,
  );

  const t = {
    ar: {
      heroTitle: "مدونتنا لمجمع المستشفيات",
      heroSubtitle: "تعرف على أحدث المقالات والنصائح الطبية.",
      readMore: "اقرأ المزيد",
    },
    en: {
      heroTitle: "Hospital Complex Blog",
      heroSubtitle: "Discover latest articles and medical tips.",
      readMore: "Read More",
    },
  };

  const c = t[lang];
  const activeCategory = categories.find((cat) => cat.id === activeCategoryId);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 transition"
          >
            {lang === "ar" ? "EN" : "AR"}
          </button>
        </div>

        {/* Hero */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">{c.heroTitle}</h2>
          <p className="text-gray-600">{c.heroSubtitle}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeCategoryId === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {lang === "ar" ? cat.name : cat.nameEn}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {activeCategory?.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {lang === "ar" ? post.title : post.titleEn}
              </h3>
              <p className="text-gray-600 mb-4">
                {lang === "ar" ? post.summary : post.summaryEn}
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                {c.readMore}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalBlogSection;

import React, { useEffect, useState } from "react";

const departments = [
  { title: "الطوارئ", desc: "خدمة الطوارئ على مدار الساعة." },
  { title: "الجراحة العامة", desc: "عمليات جراحية دقيقة وآمنة." },
  { title: "طب الأسنان", desc: "أحدث تقنيات طب الأسنان." },
  { title: "المختبرات", desc: "تحاليل طبية دقيقة وسريعة." },
  { title: "أمراض القلب", desc: "فحوصات وعلاجات قلب متقدمة." },
  { title: "الأطفال", desc: "رعاية شاملة للأطفال." },
  { title: "الأشعة", desc: "أحدث أجهزة التصوير الطبي." },
  { title: "العلاج الطبيعي", desc: "جلسات إعادة تأهيل متخصصة." },
  { title: "العظام", desc: "تشخيص وعلاج الإصابات والعظام." },
  { title: "الباطنة", desc: "متابعة وعلاج الأمراض الداخلية." },
  { title: "الأعصاب", desc: "علاج مشاكل الجهاز العصبي." },
  { title: "النساء والتوليد", desc: "رعاية شاملة للنساء والأطفال." },
  { title: "قسم الأشعة", desc: "أحدث الأجهزة لتصوير شامل ودقيق." },
  { title: "قسم المختبرات", desc: "تحاليل دم وبول دقيقة وسريعة." },
  { title: "قسم القلب", desc: "متابعة دقيقة لصحة القلب والأوعية الدموية." },
  { title: "قسم الأطفال", desc: "رعاية خاصة للصغار والرضع." },
];

const DepartmentsSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // تشغيل الانميشن عند أول تحميل الصفحة
    setMounted(true);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">أقسامنا الطبية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dep, idx) => (
            <div
              key={idx}
              className={`
                bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all transform text-center
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{
                transitionDelay: `${idx * 100}ms`,
                transitionDuration: "700ms",
              }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {dep.title}
              </h3>
              <p className="text-gray-600">{dep.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;

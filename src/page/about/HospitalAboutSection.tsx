import { useState } from "react";
import { Link } from "react-router-dom";

const HospitalAboutSection = () => {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t = {
    ar: {
      heroTitle: "مجمع الرحمة الطبي – رعايتك في أيدٍ أمينة",
      heroSubtitle:
        "نقدم أفضل الخدمات الطبية بأحدث المعدات وفرق متخصصة لضمان صحتك وسلامتك.",
      valuesTitle: "قيمنا",
      values: [
        { title: "رعاية المرضى", desc: "الاهتمام الكامل بصحة وراحة المرضى." },
        {
          title: "معايير طبية عالية",
          desc: "الالتزام بأعلى بروتوكولات العلاج.",
        },
        {
          title: "خصوصية وأمان البيانات",
          desc: "حماية معلوماتك الطبية دائمًا.",
        },
        {
          title: "فريق متخصص وملتزم",
          desc: "خبراء ملتزمون بتقديم أفضل رعاية.",
        },
      ],
      servicesTitle: "خدماتنا",
      services: ["الطوارئ", "الجراحة", "طب الأطفال", "الأشعة", "المختبرات"],
      teamTitle: "فريقنا",
      statsTitle: "إنجازاتنا",
      stats: [
        { number: "10,000+", label: "عدد المرضى سنويًا" },
        { number: "150+", label: "سنوات خبرة الفريق" },
        { number: "5,000+", label: "عمليات ناجحة" },
        { number: "4.9/5", label: "تقييم رضا المرضى" },
      ],
      contactTitle: "تواصل معنا",
      contactNote: "زورنا أو اتصل بنا لحجز استشارة أو مكالمة مباشرة.",
      contactButton: "احجز الآن",
    },
    en: {
      heroTitle: "Al-Rahma Medical Complex – Your Care in Safe Hands",
      heroSubtitle:
        "We provide the best medical services with state-of-the-art equipment and specialized teams to ensure your health and safety.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Patient Care",
          desc: "Full attention to patients' health and comfort.",
        },
        {
          title: "High Medical Standards",
          desc: "Commitment to the highest treatment protocols.",
        },
        {
          title: "Privacy & Data Security",
          desc: "Your medical information is always protected.",
        },
        {
          title: "Dedicated Team",
          desc: "Experts committed to providing top care.",
        },
      ],
      servicesTitle: "Our Services",
      services: [
        "Emergency",
        "Surgery",
        "Pediatrics",
        "Radiology",
        "Laboratories",
      ],
      teamTitle: "Our Team",
      statsTitle: "Our Achievements",
      stats: [
        { number: "10,000+", label: "Patients per year" },
        { number: "150+", label: "Team experience in years" },
        { number: "5,000+", label: "Successful operations" },
        { number: "4.9/5", label: "Patient satisfaction rating" },
      ],
      contactTitle: "Contact Us",
      contactNote: "Visit us or call to book a consultation or direct call.",
      contactButton: "Book Now",
    },
  };

  const c = t[lang];

  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100"
          >
            {lang === "ar" ? "EN" : "AR"}
          </button>
        </div>

        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{c.heroTitle}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">{c.heroSubtitle}</p>
        </div>

        {/* Values */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            {c.valuesTitle}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {c.values.map((v, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            {c.servicesTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {c.services.map((s, i) => (
              <div
                key={i}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-12 text-center">
          <h2 className="text-3xl font-semibold">{c.statsTitle}</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            {c.stats.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <p className="text-3xl font-bold text-blue-600">{s.number}</p>
                <p className="text-gray-500 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-blue-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">{c.contactTitle}</h2>
          <p className="mb-6">{c.contactNote}</p>
          <Link to={"/"}>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              {c.contactButton}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HospitalAboutSection;

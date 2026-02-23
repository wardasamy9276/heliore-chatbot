import { useState } from "react";
import { Link } from "react-router-dom";

const SecureContactSection = () => {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  const t = {
    ar: {
      title: "تواصل آمن… بياناتك في أمان",
      subtitle:
        "نستخدم تقنيات التحقق بالبصمة وأعلى معايير حماية البيانات لضمان سرية معلوماتك أثناء استخدام برنامج الرد الذكي.",
      name: "الاسم",
      phone: "رقم الهاتف",
      org: "جهة العمل (اختياري)",
      type: "نوع الاستفسار",
      message: "الرسالة",
      submit: "إرسال الطلب بشكل آمن",
      secureNote: "جميع البيانات مشفّرة ولا يتم مشاركتها مع أي طرف ثالث.",
      why: "لماذا بياناتك آمنة معنا؟",
      features: [
        "تشفير البيانات من طرف إلى طرف",
        "التحقق بالبصمة البيومترية",
        "عدم تسجيل المكالمات بدون إذن",
        "متوافق مع معايير حماية البيانات",
      ],
      call: "طلب مكالمة آمنة",
      callNote: "سيتم التواصل معك بعد التحقق من الهوية",
    },
    en: {
      title: "Secure Communication… Your Data Is Protected",
      subtitle:
        "We use biometric authentication and advanced data protection standards to keep your information secure while using our smart response system.",
      name: "Name",
      phone: "Phone Number",
      org: "Organization (Optional)",
      type: "Inquiry Type",
      message: "Message",
      submit: "Submit Secure Request",
      secureNote: "All data is encrypted and never shared with third parties.",
      why: "Why Your Data Is Safe",
      features: [
        "End-to-end data encryption",
        "Biometric fingerprint verification",
        "No call recording without consent",
        "Compliant with data protection regulations",
      ],
      call: "Request Secure Call",
      callNote: "You will be contacted after identity verification",
    },
  };

  const c = t[lang];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <button
        onClick={() => setLang(lang === "ar" ? "en" : "ar")}
        className="text-sm px-3 py-1 border rounded-md hover:bg-gray-300"
      >
        {lang === "ar" ? "EN" : "AR"}
      </button>
      <div className="max-w-6xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4"></div>

        {/* Header */}
        <div className={`text-center mb-12 ${lang === "ar" ? "rtl" : "ltr"}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🔐 {c.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{c.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form
            className={`bg-white p-8 rounded-2xl shadow-md space-y-4 ${
              lang === "ar" ? "rtl" : "ltr"
            }`}
          >
            <input
              type="text"
              placeholder={c.name}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder={c.phone}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder={c.org}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="w-full border rounded-lg px-4 py-2 text-gray-600">
              <option>{c.type}</option>
              <option>Technical Support</option>
              <option>System Activation</option>
              <option>Security Inquiry</option>
            </select>

            <textarea
              placeholder={c.message}
              rows={4}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-3
              rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {c.submit}
            </button>

            <p className="text-xs text-gray-500 text-center">
              🔒 {c.secureNote}
            </p>
          </form>

          {/* Security Info */}
          <div
            className={`bg-blue-400 text-white p-8 rounded-2xl  items-start
                 flex flex-col text-l${lang === "ar" ? "rtl" : "ltr"}`}
          >
            <h3 className="text-2xl font-bold mb-6">🛡️ {c.why}</h3>
            <ul className="space-y-4">
              {c.features.map((f, i) => (
                <li key={i} className="flex items-and gap-2">
                  <span className="mt-1">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-blue-400 pt-6">
              <p className="mb-2 font-semibold">{c.call}</p>
              <p className="text-sm mb-4">{c.callNote}</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                {c.call}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureContactSection;

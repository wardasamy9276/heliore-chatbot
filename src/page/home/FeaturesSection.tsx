import {
  FaPhoneAlt,
  FaRobot,
  FaUsers,
  FaCalendarAlt,
  FaRegSmile,
  FaChartLine,
} from "react-icons/fa";

function FeaturesSection() {
  const features = [
    {
      icon: <FaPhoneAlt className="text-blue-600 w-8 h-8" />,
      title: "المكالمات الآلية",
      desc: "تحسين كفاءة وجودة اتصال العملاء باستخدام AI لتسجيل وإدارة المكالمات تلقائيًا.",
    },
    {
      icon: <FaRobot className="text-blue-600 w-8 h-8" />,
      title: "أتمتة الردود",
      desc: "الرد الآلي على الاستفسارات الشائعة لتوفير وقت الفريق وتحسين سرعة الخدمة.",
    },
    {
      icon: <FaUsers className="text-blue-600 w-8 h-8" />,
      title: "إدارة العملاء",
      desc: "CRM متكامل لإدارة العملاء وحفظ كل بيانات التفاعل بسهولة.",
    },
    {
      icon: <FaCalendarAlt className="text-blue-600 w-8 h-8" />,
      title: "حجز المواعيد تلقائيًا",
      desc: "تسهيل عملية الحجز وإرسال الإشعارات للعملاء بشكل آلي.",
    },
    {
      icon: <FaRegSmile className="text-blue-600 w-8 h-8" />,
      title: "رضا العملاء",
      desc: "متابعة وتحسين تجربة العميل لضمان رضا كامل عن الخدمات.",
    },
    {
      icon: <FaChartLine className="text-blue-600 w-8 h-8" />,
      title: "تحليل الأداء",
      desc: "لوحات تحكم تعرض بيانات المكالمات، رضا العملاء، والأداء العام.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          المميزات الرئيسية
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center gap-4"
            >
              <div>{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

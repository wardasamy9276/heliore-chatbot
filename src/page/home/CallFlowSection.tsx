import React from "react";
import {
  FaPhoneAlt,
  FaRobot,
  FaUserMd,
  FaCalendarCheck,
  FaSmile,
} from "react-icons/fa";

function CallFlowSection() {
  const steps = [
    {
      step: "1",
      title: "استقبال المكالمة",
      desc: "يتم استقبال المكالمات الواردة لجميع مستشفيات المجمع.",
      icon: <FaPhoneAlt size={30} className="text-blue-600" />,
    },
    {
      step: "2",
      title: "الرد الآلي",
      desc: "نظام AI يتعرف على طلب المريض ويوجهه للقسم الصحيح.",
      icon: <FaRobot size={30} className="text-purple-600" />,
    },
    {
      step: "3",
      title: "التواصل مع الطبيب أو القسم",
      desc: "تحويل المكالمة مباشرة للطبيب أو القسم المختص.",
      icon: <FaUserMd size={30} className="text-green-600" />,
    },
    {
      step: "4",
      title: "تأكيد المواعيد",
      desc: "إرسال رسائل أو مكالمات لتأكيد مواعيد المرضى.",
      icon: <FaCalendarCheck size={30} className="text-red-600" />,
    },
    {
      step: "5",
      title: "رضا المرضى",
      desc: "تحسين تجربة المرضى من خلال التواصل الفعّال والسريع.",
      icon: <FaSmile size={30} className="text-yellow-600" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          كيف يعمل نظام الرد الآلي
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex-1 bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
              <span className="mt-4 text-gray-400 font-bold text-lg">
                {step.step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CallFlowSection;

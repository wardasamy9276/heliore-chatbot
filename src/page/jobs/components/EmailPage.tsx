import React from "react";

interface FunctionPageProps {
  title?: string; // ممكن يبقى فاضي وما تمررش حاجة
  description?: string; // ممكن يبقى فاضي وما تمررش حاجة
  features?: string[];
}

const EmailPage: React.FC<FunctionPageProps> = ({
  title = "البريد الإلكتروني والاتصال",
  description = "إدارة البريد الإلكتروني بشكل ذكي من خلال وكيل ذكي مستند إلى الذكاء الاصطناعي. تنظيم الرسائل، الرد التلقائي، وتتبع كل الأنشطة المهمة بطريقة آمنة ومرتبة.",
  features,
}) => {
  // لو ما فيه features، نقدر نستخدم default
  const defaultFeatures = [
    "تنظيم الرسائل بطريقة ذكية وآمنة.",
    "الرد التلقائي على الرسائل المهمة.",
    "تتبع كل الأنشطة المتعلقة بالبريد الإلكتروني.",
    "تكامل مع أنظمة CRM وأنظمة المراسلة الأخرى.",
    "لوحات تحكم تحليلية لفهم أداء البريد الإلكتروني.",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">{title}</h1>

        <p className="text-lg text-gray-700 mb-6">{description}</p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          🌟 الميزات الرئيسية
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {(features || defaultFeatures).map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          📌 ملاحظات إضافية
        </h2>
        <p className="text-gray-700">
          يمكن إضافة روابط خارجية، صور، أو فيديوهات توضيحية لتسهيل استخدام
          النظام وفهمه بشكل كامل.
        </p>
      </div>
    </div>
  );
};

export default EmailPage;

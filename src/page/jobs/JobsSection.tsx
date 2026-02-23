import React from "react";

interface FunctionSectionProps {
  title?: string;
  description?: string;
}

const EmailSection: React.FC<FunctionSectionProps> = () => {
  const title = "الوظائف الرئيسية";
  const description = `
المكالمات الآلية (في / خارجي): تحسين كفاءة وجودة اتصال العميل الخاص بك مع الذكاء الاصطناعى المتقدم.
  `;

  return (
    <section className="py-16 bg-gray-50 px-6 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{title}</h1>
        <p className="text-gray-700 whitespace-pre-line">{description}</p>
      </div>
    </section>
  );
};

export default EmailSection;

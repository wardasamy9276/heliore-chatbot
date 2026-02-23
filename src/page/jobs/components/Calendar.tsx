import React from "react";

// TypeScript لتحديد البيانات
interface FunctionSectionProps {
  title?: string;
  description?: string;
}

const CalendarSection: React.FC<FunctionSectionProps> = () => {
  const title = "التقويم والمواعيد";
  const description = `
إدارة المواعيد بسهولة، مزامنة متعددة مع Google Calendar و Outlook و Caldav. 
إرسال تذكيرات تلقائية لجميع المشاركين قبل كل موعد مع مزامنة دورية كل 15 دقيقة.
  `;

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{title}</h1>
        <p className="text-gray-700 whitespace-pre-line">{description}</p>
      </div>
    </section>
  );
};

export default CalendarSection;

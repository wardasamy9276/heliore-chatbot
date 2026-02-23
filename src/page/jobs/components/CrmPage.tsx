import React from "react";

export default function CrmPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">CRM & Contact</h1>

        <p className="text-lg text-gray-700 mb-4">
          نظام CRM شامل لإدارة العملاء والعملاء المتوقعين.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          إدارة الاتصالات، متابعة العملاء، إضافة علامات وحقول مخصصة، وتحليل
          النشاط بذكاء لزيادة فعالية إدارة العلاقات.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          🌟 الميزات الرئيسية
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>إدارة العملاء والعملاء المتوقعين بشكل مركزي.</li>
          <li>تتبع كل التفاعلات والأنشطة مع كل جهة اتصال.</li>
          <li>إضافة علامات وحقول مخصصة لتخصيص البيانات.</li>
          <li>لوحات تحليلية ذكية لمتابعة الأداء والنشاط.</li>
          <li>استيراد وتصدير البيانات بسهولة لتكامل مع أنظمة أخرى.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          📊 التحليلات والأداء
        </h2>
        <p className="text-gray-700 mb-4">
          يوفر النظام مؤشرات الأداء الرئيسية لمتابعة العملاء والمبيعات وتحسين
          استراتيجيات إدارة العلاقات.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          🤝 أتمتة سير العمل
        </h2>
        <p className="text-gray-700 mb-4">
          إنشاء مهام تلقائية ومتابعة العملاء بناءً على التفاعلات السابقة. النظام
          يقترح خطوات ذكية لتحسين كفاءة فريق المبيعات والدعم.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          📌 ملاحظات إضافية
        </h2>
        <p className="text-gray-700">
          يمكن إضافة روابط لمصادر خارجية، صور توضيحية، أو فيديوهات تعليمية
          لزيادة وضوح نظام CRM واستخدامه بشكل فعّال.
        </p>
      </div>
    </div>
  );
}

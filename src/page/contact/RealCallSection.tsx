import { useState } from "react";

const RealCallSection = () => {
  const [calling, setCalling] = useState(false);

  const startCall = () => {
    setCalling(true);
    // هنا تحطي الـ API call لـ Twilio أو أي نظام Voice
    alert("تم بدء الاتصال الآمن…");
  };

  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-24 px-4 text-center text-white">
      {/* Icon */}
      <div className="text-6xl mb-6">📞</div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ مكالمة آمنة</h2>
      <p className="text-blue-100 max-w-2xl mx-auto mb-8">
        يمكن للمستخدمين إجراء مكالمات مباشرة عبر نظام الرد الذكي مع ضمان التحقق
        بالبصمة وحماية البيانات.
      </p>

      {/* Call Button */}
      <button
        onClick={startCall}
        disabled={calling}
        className={`bg-white text-blue-800 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition shadow-lg ${
          calling ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {calling ? "جاري الاتصال…" : "📞 بدء مكالمة آمنة"}
      </button>

      {/* Privacy Note */}
      <p className="mt-6 text-sm text-blue-200">
        🔒 جميع المكالمات مشفّرة ولا يتم تسجيلها بدون إذن المستخدم
      </p>
    </section>
  );
};

export default RealCallSection;

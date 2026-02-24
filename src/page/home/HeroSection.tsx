import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // شغل الانميشن عند أول فتح
  }, []);

  return (
    <section className="bg-gradient-to-l from-blue-50 to-white min-h-[80vh] flex items-center">
      <div
        className={`container mx-auto px-6 py-24 flex flex-col items-center text-center gap-12 transform transition-all duration-1000
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        `}
      >
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-snug">
          رعاية صحية متكاملة
          <span className="block text-blue-700 mt-4 text-3xl md:text-4xl">
            بأعلى معايير الجودة
          </span>
        </h1>

        {/* Paragraphs */}
        <div className="space-y-6 max-w-3xl text-gray-700 text-lg md:text-xl leading-relaxed">
          <p>
            نوفر لك أفضل الأطباء، أحدث الأجهزة الطبية، وخدمات صحية متكاملة تهدف
            إلى راحتك وسلامتك. التزامنا هو تقديم رعاية شخصية لكل مريض مع أعلى
            مستوى من الاحترافية.
          </p>

          <p>
            المكالمات الآلية هي وظيفة مركزية لـ VoiceOne، والتي تهدف إلى تحسين
            كفاءة وجودة اتصال العملاء. تستخدم هذه الوظيفة تقنية AI المتقدمة
            لتسجيل المكالمات الواردة وإدارتها تلقائيًا، بحيث لم تعد الشركات
            قادرة على تفويت أي مكالمات مهمة وفي الوقت نفسه تزيد من رضا العملاء.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/appointment"
            className="px-12 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-lg"
          >
            احجز موعد
          </Link>

          <Link
            to="/departments"
            className="px-12 py-4 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition text-lg"
          >
            الأقسام الطبية
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

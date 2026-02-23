import React from "react";

interface UIPageProps {
  title?: string;
  description?: string;
  features?: string[];
}

const UIPage: React.FC<UIPageProps> = ({
  title = "واجهة المستخدم",
  description = "تصميم متجاوب وسهل الاستخدام لجميع الأجهزة. تجربة سلسة للمستخدم مع تحديثات واجهة مباشرة بدون الحاجة لإعادة تحميل الصفحة.",
  features = [
    "تصميم متجاوب يعمل على جميع الأجهزة والشاشات.",
    "تجربة مستخدم سلسة وسريعة.",
    "تحديث المحتوى بدون إعادة تحميل الصفحة (SPA).",
    "دعم الوضع الليلي (Dark Mode).",
    "مكونات قابلة لإعادة الاستخدام.",
    "تحسين الأداء وسرعة التحميل.",
  ],
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-700 mb-6">{title}</h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          {description}
        </p>

        {/* Features */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          ✨ مميزات واجهة المستخدم
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-right">
          {features.map((feature, index) => (
            <li
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UIPage;

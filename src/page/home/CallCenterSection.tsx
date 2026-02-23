function CallCenterSection() {
  const features = [
    {
      title: "إدارة المكالمات الواردة",
      desc: "تسجيل جميع المكالمات الواردة تلقائيًا مع تصنيفها حسب المستشفى أو القسم.",
    },
    {
      title: "التوجيه الذكي للمكالمات",
      desc: "توجيه المكالمات مباشرة للقسم المناسب أو الطبيب المختص بشكل آلي.",
    },
    {
      title: "التقارير والتحليلات",
      desc: "تقارير يومية وإحصاءات دقيقة حول عدد المكالمات، مدة المكالمات، ورضا العملاء.",
    },
    {
      title: "التذكير بالمواعيد",
      desc: "إرسال رسائل تلقائية للمرضى لتذكيرهم بالمواعيد القادمة.",
    },
    {
      title: "تكامل مع نظام المستشفى",
      desc: "يمكن ربط النظام مع قاعدة بيانات المستشفى لتحديث معلومات المرضى مباشرة.",
    },
    {
      title: "توافق مع AI",
      desc: "استعمال تقنيات الذكاء الاصطناعي لفهم طلبات المرضى وتحسين تجربة المكالمات.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          نظام الرد الآلي لمجمع المستشفيات
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg md:text-xl">
          نظام متكامل لإدارة المكالمات الواردة، تحسين جودة التواصل مع المرضى،
          وتسهيل متابعة المواعيد.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CallCenterSection;

function TestimonialsSection() {
  const testimonials = [
    { name: "أحمد سامي", feedback: "خدمة ممتازة والأطباء محترفون جدًا!" },
    { name: "ليلى محمد", feedback: "حجزت موعد بسرعة وسهولة، تجربة رائعة." },
    { name: "كريم علي", feedback: "المستشفى نظيف وطاقم العمل متعاون." },
    {
      name: "هالة فاروق ",
      feedback: "الأجهزة الحديثة ساعدتني كثيرًا في العلاج.",
    },
    { name: "يوسف أحمد", feedback: "أطباء قلب ممتازون وأخذوا وقتهم معي." },
    {
      name: "سلمى محمود",
      feedback: "الأطفال كانوا في رعاية ممتازة وأحبوا الأطباء.",
    },
    { name: "خالد مصطفى", feedback: "الطوارئ كانت سريعة جدًا واحترافية." },
    {
      name: "منى حسن",
      feedback: "أحببت طريقة التعامل والشرح التفصيلي من الفريق.",
    },
    { name: "عادل شريف", feedback: "كل شيء كان منظمًا وسلسًا، شكراً لكم." },
    { name: "نجلاء فؤاد", feedback: "أفضل تجربة صحية مررت بها على الإطلاق." },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">آراء عملائنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <p className="text-gray-700 mb-4">"{t.feedback}"</p>
              <h3 className="text-blue-700 font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

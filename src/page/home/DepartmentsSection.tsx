function DepartmentsSection() {
  const departments = [
    { title: "الطوارئ", desc: "خدمة الطوارئ على مدار الساعة." },
    { title: "الجراحة العامة", desc: "عمليات جراحية دقيقة وآمنة." },
    { title: "طب الأسنان", desc: "أحدث تقنيات طب الأسنان." },
    { title: "المختبرات", desc: "تحاليل طبية دقيقة وسريعة." },
    { title: "أمراض القلب", desc: "فحوصات وعلاجات قلب متقدمة." },
    { title: "الأطفال", desc: "رعاية شاملة للأطفال." },
    { title: "الأشعة", desc: "أحدث أجهزة التصوير الطبي." },
    { title: "العلاج الطبيعي", desc: "جلسات إعادة تأهيل متخصصة." },
    { title: "العظام", desc: "تشخيص وعلاج الإصابات والعظام." },
    { title: "الباطنة", desc: "متابعة وعلاج الأمراض الداخلية." },
    { title: "الأعصاب", desc: "علاج مشاكل الجهاز العصبي." },
    { title: "النساء والتوليد", desc: "رعاية شاملة للنساء والأطفال." },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">أقسامنا الطبية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dep, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {dep.title}
              </h3>
              <p className="text-gray-600">{dep.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DepartmentsSection;
// function DoctorsSection() {
//   const doctors = [
//     { name: "د. أحمد سامي", specialty: "جراحة عامة" },
//     { name: "د. ليلى محمد", specialty: "طب أسنان" },
//     { name: "د. كريم علي", specialty: "أمراض قلب" },
//     { name: "د. هالة فاروق", specialty: "أطفال" },
//   ];

//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">أطباؤنا</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {doctors.map((doc, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
//             >
//               {/* Placeholder for doctor image */}
//               <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
//                 {doc.name.split(" ")[1][0]}
//                 {doc.name.split(" ")[0][0]}
//               </div>
//               <h3 className="text-xl font-semibold text-blue-700">{doc.name}</h3>
//               <p className="text-gray-600">{doc.specialty}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default DoctorsSection;

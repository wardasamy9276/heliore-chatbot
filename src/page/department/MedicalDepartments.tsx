// MedicalDepartments.tsx
import React, { useState } from "react";

type Clinic = {
  id: number;
  name: string;
  phone: string;
  hours: string;
};

type Department = {
  id: number;
  name: string;
  clinics: Clinic[];
  keywords: string[]; // كلمات مفتاحية للرد الذكي
};

const departments: Department[] = [
  {
    id: 1,
    name: "قسم الأسنان",
    clinics: [
      {
        id: 1,
        name: "مستشفى الرحمة",
        phone: "+201234567890",
        hours: "9am - 5pm",
      },
      {
        id: 2,
        name: "مستشفى النيل",
        phone: "+201234567891",
        hours: "10am - 6pm",
      },
    ],
    keywords: [
      "أسنان",
      "تقويم",
      "حشوات",
      "جراحة أسنان",
      "تبييض أسنان",
      "خلع أسنان",
    ],
  },
  {
    id: 2,
    name: "قسم الباطنة",
    clinics: [
      {
        id: 3,
        name: "مستشفى النيل",
        phone: "+201234567891",
        hours: "10am - 6pm",
      },
    ],
    keywords: ["باطنة", "ضغط", "سكر", "أمراض داخلية", "كبد", "كلى"],
  },
  {
    id: 3,
    name: "قسم الجراحة",
    clinics: [
      {
        id: 4,
        name: "مستشفى السلام",
        phone: "+201234567892",
        hours: "8am - 4pm",
      },
    ],
    keywords: ["جراحة", "عظام", "قلب", "عمليات", "منظار", "إصابات"],
  },
];

const MedicalDepartments: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // فلترة الأقسام حسب البحث
  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAskAI = () => {
    if (!question) return alert("من فضلك اكتب سؤالك");

    const lowerQuestion = question.toLowerCase();
    const keywords = selectedDept?.keywords.map((k) => k.toLowerCase()) || [];

    // البحث في الكلمات المفتاحية
    const match = keywords.some((kw) => lowerQuestion.includes(kw));

    setAnswer(match ? "نعم ✅" : "لا ❌");
  };

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">الأقسام الطبية</h2>

      {/* بحث سريع */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ابحث عن قسم..."
        className="w-full border p-2 rounded mb-4"
      />

      {/* قائمة الأقسام */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredDepartments.map((dept) => (
          <div key={dept.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
            <p className="text-gray-600 mb-2 font-semibold">العيادات:</p>
            <ul className="text-gray-600 mb-2">
              {dept.clinics.map((clinic) => (
                <li key={clinic.id}>
                  {clinic.name} - هاتف: {clinic.phone} - أوقات: {clinic.hours}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setSelectedDept(dept);
                setAnswer("");
                setQuestion("");
              }}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              اسأل الذكاء الاصطناعي
            </button>
          </div>
        ))}
      </div>

      {/* الرد الذكي */}
      {selectedDept && (
        <div className="mt-6 bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-bold mb-2">
            سؤال للرد الذكي عن {selectedDept.name}
          </h3>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="اكتب سؤالك هنا..."
            className="w-full border p-2 rounded mb-2"
          />
          <button
            onClick={handleAskAI}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            إرسال
          </button>
          {answer && <p className="mt-4 bg-gray-100 p-2 rounded">{answer}</p>}
        </div>
      )}
    </section>
  );
};

export default MedicalDepartments;

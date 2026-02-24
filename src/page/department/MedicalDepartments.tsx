import React, { useEffect, useState } from "react";

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
  keywords: string[];
};

// 16 قسم حديث
const departments: Department[] = [
  {
    id: 1,
    name: "قسم الأشعة",
    clinics: [
      {
        id: 1,
        name: "مستشفى الرحمة",
        phone: "+201234567890",
        hours: "9am - 5pm",
      },
    ],
    keywords: ["أشعة", "X-ray", "CT", "MRI"],
  },
  {
    id: 2,
    name: "قسم المختبرات",
    clinics: [
      {
        id: 2,
        name: "مستشفى النيل",
        phone: "+201234567891",
        hours: "8am - 4pm",
      },
    ],
    keywords: ["تحاليل", "دم", "بول", "مختبر"],
  },
  {
    id: 3,
    name: "قسم القلب",
    clinics: [
      {
        id: 3,
        name: "مركز القلوب",
        phone: "+201234567892",
        hours: "10am - 6pm",
      },
    ],
    keywords: ["قلب", "EKG", "ضغط", "جراحة قلب"],
  },
  {
    id: 4,
    name: "قسم الأطفال",
    clinics: [
      {
        id: 4,
        name: "عيادة الأطفال",
        phone: "+201234567893",
        hours: "9am - 3pm",
      },
    ],
    keywords: ["أطفال", "رضع", "تطعيمات", "نزلات برد"],
  },
  {
    id: 5,
    name: "قسم العيون",
    clinics: [
      {
        id: 5,
        name: "مركز العيون",
        phone: "+201234567894",
        hours: "9am - 5pm",
      },
    ],
    keywords: ["عيون", "رمد", "ليزر", "عدسات"],
  },
  {
    id: 6,
    name: "قسم الجلدية",
    clinics: [
      {
        id: 6,
        name: "عيادة الجلدية",
        phone: "+201234567895",
        hours: "9:30am - 5:30pm",
      },
    ],
    keywords: ["جلدية", "حب شباب", "إكزيما", "حساسية"],
  },
  {
    id: 7,
    name: "قسم التغذية",
    clinics: [
      {
        id: 7,
        name: "عيادة التغذية",
        phone: "+201234567896",
        hours: "10am - 4pm",
      },
    ],
    keywords: ["تغذية", "رجيم", "سمنة", "حميات"],
  },
  {
    id: 8,
    name: "قسم العظام",
    clinics: [
      {
        id: 8,
        name: "مستشفى السلام",
        phone: "+201234567897",
        hours: "8am - 4pm",
      },
    ],
    keywords: ["عظام", "كسور", "إصابات", "جراحة"],
  },
  {
    id: 9,
    name: "قسم الأنف والأذن",
    clinics: [
      {
        id: 9,
        name: "مستشفى الشفاء",
        phone: "+201234567898",
        hours: "9am - 5pm",
      },
    ],
    keywords: ["أنف", "أذن", "حنجرة", "التهابات"],
  },
  {
    id: 10,
    name: "قسم الأسنان",
    clinics: [
      {
        id: 10,
        name: "مستشفى الرحمة",
        phone: "+201234567899",
        hours: "9am - 5pm",
      },
    ],
    keywords: ["أسنان", "تقويم", "حشوات", "تبييض"],
  },
  {
    id: 11,
    name: "قسم النساء والتوليد",
    clinics: [
      {
        id: 11,
        name: "مستشفى الأمومة",
        phone: "+201234567900",
        hours: "9am - 5pm",
      },
    ],
    keywords: ["نساء", "توليد", "حمل", "ولادة"],
  },
  {
    id: 12,
    name: "قسم الأمراض الباطنية",
    clinics: [
      {
        id: 12,
        name: "مستشفى النيل",
        phone: "+201234567901",
        hours: "8am - 4pm",
      },
    ],
    keywords: ["باطنة", "ضغط", "سكر", "كبد"],
  },
  {
    id: 13,
    name: "قسم الجهاز التنفسي",
    clinics: [
      {
        id: 13,
        name: "مستشفى السلام",
        phone: "+201234567902",
        hours: "9am - 5pm",
      },
    ],
    keywords: ["تنفسي", "ربو", "التهاب رئوي", "كحة"],
  },
  {
    id: 14,
    name: "قسم الأعصاب",
    clinics: [
      {
        id: 14,
        name: "مستشفى الأعصاب",
        phone: "+201234567903",
        hours: "9am - 5pm",
      },
    ],
    keywords: ["أعصاب", "صداع", "شلل", "تنميل"],
  },
  {
    id: 15,
    name: "قسم الكبد",
    clinics: [
      {
        id: 15,
        name: "مستشفى الكبد",
        phone: "+201234567904",
        hours: "8am - 4pm",
      },
    ],
    keywords: ["كبد", "فيروس", "التهاب", "تحاليل"],
  },
  {
    id: 16,
    name: "قسم الغدد",
    clinics: [
      {
        id: 16,
        name: "مستشفى الغدد",
        phone: "+201234567905",
        hours: "9am - 5pm",
      },
    ],
    keywords: ["غدد", "سكري", "هرمونات", "سمنة"],
  },
];

const MedicalDepartments: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAskAI = () => {
    if (!question) return alert("من فضلك اكتب سؤالك");
    const lowerQuestion = question.toLowerCase();
    const keywords = selectedDept?.keywords.map((k) => k.toLowerCase()) || [];
    const match = keywords.some((kw) => lowerQuestion.includes(kw));
    setAnswer(match ? "نعم ✅" : "لا ❌");
  };

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-center">الأقسام الطبية</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ابحث عن قسم..."
        className="w-full border p-2 rounded mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDepartments.map((dept, index) => (
          <div
            key={dept.id}
            className={`bg-white shadow rounded-lg p-4 transform transition-all duration-700 hover:scale-105
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} text-center`}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
            <p className="text-gray-600 mb-2 font-semibold">العيادات:</p>
            <ul className="text-gray-600 mb-2">
              {dept.clinics.map((clinic) => (
                <li key={clinic.id}>
                  {clinic.name} - هاتف:{" "}
                  <a
                    href={`tel:${clinic.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {clinic.phone}
                  </a>{" "}
                  - أوقات: {clinic.hours}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setSelectedDept(dept);
                setQuestion("");
                setAnswer("");
              }}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              اسأل الذكاء الاصطناعي
            </button>
          </div>
        ))}
      </div>

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

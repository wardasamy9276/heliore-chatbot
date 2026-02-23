// ClinicSection.tsx
import React, { useState } from "react";

type Clinic = {
  id: number;
  name: string;
  specialty: string;
  phone: string;
  hours: string;
  keywords?: string[]; // كلمات مفتاحية للرد الذكي
};

const clinics: Clinic[] = [
  {
    id: 1,
    name: "مستشفى الرحمة",
    specialty: "أسنان",
    phone: "+201234567890",
    hours: "9am - 5pm",
    keywords: ["أسنان", "تقويم", "حشوات", "جراحة أسنان"],
  },
  {
    id: 2,
    name: "مستشفى النيل",
    specialty: "باطنة",
    phone: "+201234567891",
    hours: "10am - 6pm",
    keywords: ["باطنة", "ضغط", "سكر", "أمراض داخلية"],
  },
  {
    id: 3,
    name: "مستشفى السلام",
    specialty: "جراحة",
    phone: "+201234567892",
    hours: "8am - 4pm",
    keywords: ["جراحة", "عظام", "قلب", "عمليات"],
  },
];

const ClinicSection: React.FC = () => {
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAskAI = () => {
    if (!question) return alert("من فضلك اكتب سؤالك");

    const lowerQuestion = question.toLowerCase();
    const keywords =
      selectedClinic?.keywords?.map((k) => k.toLowerCase()) || [];

    // البحث في الكلمات المفتاحية
    const match = keywords.some((kw) => lowerQuestion.includes(kw));

    setAnswer(match ? "نعم ✅" : "لا ❌");
  };

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-center">مجمع العيادات</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clinics.map((clinic) => (
          <div key={clinic.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-semibold">{clinic.name}</h3>
            <p className="text-gray-600">{clinic.specialty}</p>
            <p className="text-gray-600">هاتف: {clinic.phone}</p>
            <p className="text-gray-600">أوقات العمل: {clinic.hours}</p>
            <button
              onClick={() => {
                setSelectedClinic(clinic);
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

      {selectedClinic && (
        <div className="mt-6 bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-bold mb-2">
            سؤال للرد الذكي عن {selectedClinic.name}
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

export default ClinicSection;

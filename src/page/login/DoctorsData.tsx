import React, { useState } from "react";

/* ================= TYPES ================= */
type Doctor = {
  id: number;
  name: string;
  specialty: string;
  patients: Patient[];
};

type Patient = {
  id: number;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
};

type Appointment = {
  id: number;
  patient: string;
  time: string;
  status: "قادم" | "تم" | "ملغي";
};

/* ================= DATA ================= */
const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "د. أحمد",
    specialty: "باطنة",
    patients: [
      {
        id: 1,
        name: "أحمد محمد",
        age: 35,
        condition: "ضغط",
        lastVisit: "10/2/2026",
      },
      {
        id: 2,
        name: "سارة علي",
        age: 28,
        condition: "متابعة",
        lastVisit: "18/2/2026",
      },
    ],
  },
  {
    id: 2,
    name: "د. مريم",
    specialty: "نساء وتوليد",
    patients: [
      {
        id: 3,
        name: "مريم خالد",
        age: 31,
        condition: "أنيميا",
        lastVisit: "21/2/2026",
      },
      {
        id: 4,
        name: "نورهان أحمد",
        age: 26,
        condition: "كشف جديد",
        lastVisit: "23/2/2026",
      },
    ],
  },
];

/* ================= COMPONENT ================= */
const ClinicDashboard: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <div className="min-h-screen bg-slate-100 p-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-center">لوحة تحكم العيادة</h1>

      <div className="flex gap-8">
        {/* ===== DOCTORS LIST ===== */}
        <aside className="w-64 bg-white rounded-2xl p-6 shadow space-y-4">
          <h2 className="text-xl font-semibold mb-4">الأطباء</h2>
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoctor(doc)}
              className={`p-3 rounded-lg cursor-pointer hover:bg-blue-100 ${
                selectedDoctor?.id === doc.id ? "bg-blue-200 font-bold" : ""
              }`}
            >
              {doc.name} - {doc.specialty}
            </div>
          ))}
        </aside>

        {/* ===== DOCTOR DETAILS ===== */}
        <main className="flex-1 bg-white rounded-2xl p-6 shadow">
          {selectedDoctor ? (
            <>
              <h2 className="text-2xl font-bold mb-4">
                {selectedDoctor.name} - {selectedDoctor.specialty}
              </h2>

              {/* Patients Table */}
              <h3 className="text-xl font-semibold mb-2">👥 المرضى</h3>
              <table className="w-full text-right border-collapse mb-6">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="py-2">الاسم</th>
                    <th>العمر</th>
                    <th>الحالة</th>
                    <th>آخر زيارة</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedDoctor.patients.map((p) => (
                    <tr key={p.id} className="border-b last:border-0">
                      <td className="py-2 font-medium">{p.name}</td>
                      <td>{p.age}</td>
                      <td className="text-blue-600">{p.condition}</td>
                      <td>{p.lastVisit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Add more sections like appointments, notes etc. */}
              <h3 className="text-xl font-semibold mb-2">📅 المواعيد</h3>
              <p className="text-gray-500 mb-4">
                هنا يمكن إضافة جدول المواعيد لكل طبيب
              </p>
            </>
          ) : (
            <p className="text-gray-500 text-center mt-20">
              اختر طبيبًا لعرض التفاصيل
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default ClinicDashboard;

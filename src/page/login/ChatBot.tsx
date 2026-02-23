import React, { useState } from "react";
import { doctorsData, Doctor } from "../login/data/DoctorData";

const ClinicDashboard: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [chatMessages, setChatMessages] = useState<
    { from: string; text: string }[]
  >([]);
  const [chatInput, setChatInput] = useState("");

  const sendChat = () => {
    if (!chatInput || !selectedDoctor) return;
    const userMsg = { from: "user", text: chatInput };
    setChatMessages([...chatMessages, userMsg]);
    setChatInput("");

    const botReply = autoReply(chatInput, selectedDoctor);
    setChatMessages((prev) => [
      ...prev,
      userMsg,
      { from: "bot", text: botReply },
    ]);
  };

  const autoReply = (msg: string, doctor: Doctor) => {
    if (msg.includes("مواعيد"))
      return `مواعيد ${doctor.name}: ${doctor.appointments.map((a) => `${a.patient} الساعة ${a.time}`).join(", ")}`;
    if (msg.includes("مرضى"))
      return `عدد مرضى ${doctor.name}: ${doctor.patients.length}`;
    return "شكرًا، سيتم الرد عليك من الطبيب قريبًا.";
  };

  const stats = selectedDoctor
    ? [
        {
          title: "عدد المرضى",
          value: selectedDoctor.patients.length,
          color: "bg-blue-600",
          icon: "👥",
        },
        {
          title: "مواعيد اليوم",
          value: selectedDoctor.appointments.length,
          color: "bg-green-600",
          icon: "📅",
        },

        {
          title: "عدد المرضى",
          value: selectedDoctor.patients.length,
          color: "bg-blue-600",
          icon: "👥",
        },
        {
          title: "مواعيد اليوم",
          value: selectedDoctor.appointments.length,
          color: "bg-green-600",
          icon: "📅",
        },
        {
          title: "عدد المرضى",
          value: selectedDoctor.patients.length,
          color: "bg-blue-600",
          icon: "👥",
        },
        {
          title: "مواعيد اليوم",
          value: selectedDoctor.appointments.length,
          color: "bg-green-600",
          icon: "📅",
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-slate-100 p-6" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-center">لوحة تحكم العيادة</h1>

      <div className="flex gap-6">
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

        <main className="flex-1 space-y-6">
          {selectedDoctor ? (
            <>
              <h2 className="text-2xl font-bold mb-4">
                {selectedDoctor.name} - {selectedDoctor.specialty}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`${s.color} text-white p-4 rounded-xl shadow`}
                  >
                    <div className="text-2xl">{s.icon}</div>
                    <p className="text-sm opacity-80">{s.title}</p>
                    <p className="text-2xl font-bold">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-xl shadow mt-4">
                <h3 className="font-semibold text-xl mb-2">👥 المرضى</h3>
                <table className="w-full text-right border-collapse">
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
              </div>

              <div className="bg-white p-4 rounded-xl shadow mt-4">
                <h3 className="font-semibold text-xl mb-2">📅 المواعيد</h3>
                {selectedDoctor.appointments.map((a) => (
                  <div
                    key={a.id}
                    className="flex justify-between p-2 bg-gray-50 rounded-lg mb-2"
                  >
                    <span>{a.patient}</span>
                    <span>{a.time}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        a.status === "قادم"
                          ? "bg-blue-100 text-blue-700"
                          : a.status === "تم"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {a.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-xl shadow mt-4">
                <h3 className="font-semibold text-xl mb-2">💬 دردشة ذكية</h3>
                <div className="h-48 overflow-y-auto p-2 border rounded mb-2 space-y-1">
                  {chatMessages.map((m, i) => (
                    <div
                      key={i}
                      className={m.from === "user" ? "text-right" : "text-left"}
                    >
                      <span
                        className={`inline-block p-2 rounded-lg ${m.from === "user" ? "bg-blue-100" : "bg-gray-200"}`}
                      >
                        {m.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 border p-2 rounded-lg"
                    placeholder="اكتب رسالتك هنا..."
                  />
                  <button
                    onClick={sendChat}
                    className="bg-blue-600 text-white px-4 rounded-lg"
                  >
                    أرسل
                  </button>
                </div>
              </div>
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

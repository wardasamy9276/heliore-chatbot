import React, { useState } from "react";
import { doctorsData, Doctor } from "../login/data/Data";

type ChatMessage = {
  from: "user" | "bot";
  text: string;
};

const ClinicDashboard: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(doctorsData[0]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState<string>("");

  const autoReply = (msg: string, doctor: Doctor): string => {
    if (msg.includes("مواعيد"))
      return `عدد مواعيد اليوم: ${doctor.appointments.length}`;
    if (msg.includes("مرضى"))
      return `عدد المرضى المسجلين: ${doctor.patients.length}`;
    return "تم تسجيل رسالتك وسيتم الرد قريبًا ✅";
  };

  const sendChat = () => {
    if (!chatInput || !selectedDoctor) return;

    const userMsg: ChatMessage = { from: "user", text: chatInput };
    const botMsg: ChatMessage = {
      from: "bot",
      text: autoReply(chatInput, selectedDoctor),
    };

    setChatMessages((prev) => [...prev, userMsg, botMsg]);
    setChatInput("");
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
      ]
    : [];

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6" dir="rtl">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        لوحة تحكم العيادة
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Doctors */}
        <aside className="md:w-64 bg-white rounded-xl p-4 shadow">
          <h2 className="font-semibold mb-3">الأطباء</h2>
          <div className="flex md:block gap-2 overflow-x-auto">
            {doctorsData.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDoctor(doc)}
                className={`p-3 rounded-lg min-w-[200px] text-right ${
                  selectedDoctor?.id === doc.id
                    ? "bg-blue-200 font-bold"
                    : "bg-gray-100"
                }`}
              >
                {doc.name}
                <div className="text-sm text-gray-500">{doc.specialty}</div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 space-y-6">
          {!selectedDoctor && (
            <p className="text-center text-gray-500 mt-20">
              اختر طبيبًا لعرض التفاصيل
            </p>
          )}

          {selectedDoctor && (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.title}
                    className={`${s.color} text-white p-4 rounded-xl shadow`}
                  >
                    <div className="text-2xl">{s.icon}</div>
                    <p className="text-sm">{s.title}</p>
                    <p className="text-2xl font-bold">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Patients */}
              <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
                <h3 className="font-semibold mb-2">👥 المرضى</h3>
                <table className="min-w-[600px] w-full">
                  <thead>
                    <tr className="border-b text-gray-500">
                      <th>الاسم</th>
                      <th>العمر</th>
                      <th>الحالة</th>
                      <th>آخر زيارة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedDoctor.patients.map((p) => (
                      <tr key={p.id} className="border-b">
                        <td>{p.name}</td>
                        <td>{p.age}</td>
                        <td className="text-blue-600">{p.condition}</td>
                        <td>{p.lastVisit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Appointments */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-semibold mb-2">📅 المواعيد</h3>
                <div className="space-y-2">
                  {selectedDoctor.appointments.map((a) => (
                    <div
                      key={a.id}
                      className="flex justify-between bg-gray-100 p-2 rounded-lg text-sm"
                    >
                      <span>{a.patient}</span>
                      <span>{a.time}</span>
                      <span
                        className={`px-2 rounded ${
                          a.status === "تم"
                            ? "bg-green-200 text-green-800"
                            : a.status === "قادم"
                              ? "bg-blue-200 text-blue-800"
                              : "bg-red-200 text-red-800"
                        }`}
                      >
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat */}
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-semibold mb-2">💬 دردشة</h3>
                <div className="h-40 overflow-y-auto border rounded p-2 mb-2">
                  {chatMessages.map((m, i) => (
                    <div
                      key={i}
                      className={m.from === "user" ? "text-right" : "text-left"}
                    >
                      <span className="inline-block bg-gray-200 px-3 py-1 rounded mb-1">
                        {m.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 border rounded p-2"
                    placeholder="اكتب رسالتك..."
                  />
                  <button
                    onClick={sendChat}
                    className="bg-blue-600 text-white px-4 rounded"
                  >
                    إرسال
                  </button>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default ClinicDashboard;

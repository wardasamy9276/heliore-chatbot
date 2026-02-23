import React, { useState } from "react";

type Stat = {
  title: string;
  value: string;
  icon: string;
  color: string;
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
const stats: Stat[] = [
  { title: "إجمالي المرضى", value: "248", icon: "👥", color: "bg-blue-900" },
  { title: "مواعيد اليوم", value: "12", icon: "📅", color: "bg-green-900" },
  { title: "حالات حرجة", value: "3", icon: "🚨", color: "bg-green-900" },
  { title: "تقييم الطبيب", value: "4.9", icon: "⭐", color: "bg-green-900" },
  { title: "إجمالي المرضى", value: "248", icon: "👥", color: "bg-green-900" },
  { title: "مواعيد اليوم", value: "12", icon: "📅", color: "bg-green-900" },
  { title: "حالات حرجة", value: "3", icon: "🚨", color: "bg-green-900" },
  { title: "تقييم الطبيب", value: "4.9", icon: "⭐", color: "bg-green-900" },
  { title: "إجمالي المرضى", value: "248", icon: "👥", color: "bg-blue-900" },
  { title: "مواعيد اليوم", value: "12", icon: "📅", color: "bg-green-900" },
  { title: "حالات حرجة", value: "3", icon: "🚨", color: "bg-red-900" },
  { title: "تقييم الطبيب", value: "4.9", icon: "⭐", color: "bg-purple-900" },
  { title: "إجمالي المرضى", value: "248", icon: "👥", color: "bg-blue-900" },
  { title: "مواعيد اليوم", value: "12", icon: "📅", color: "bg-green-900" },
  { title: "حالات حرجة", value: "3", icon: "🚨", color: "bg-red-900" },
  { title: "تقييم الطبيب", value: "4.9", icon: "⭐", color: "bg-purple-900" },
  { title: "حالات حرجة", value: "3", icon: "🚨", color: "bg-red-900" },
  { title: "تقييم الطبيب", value: "4.9", icon: "⭐", color: "bg-purple-900" },
  { title: "حالات حرجة", value: "3", icon: "🚨", color: "bg-red-900" },
  { title: "تقييم الطبيب", value: "4.9", icon: "⭐", color: "bg-purple-900" },
];

const patients: Patient[] = [
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
  {
    id: 3,
    name: "محمد حسن",
    age: 42,
    condition: "سكر",
    lastVisit: "20/2/2026",
  },
  {
    id: 4,
    name: "مريم خالد",
    age: 31,
    condition: "أنيميا",
    lastVisit: "21/2/2026",
  },
  {
    id: 5,
    name: "خالد سمير",
    age: 50,
    condition: "قلب",
    lastVisit: "22/2/2026",
  },
  {
    id: 6,
    name: "نورهان أحمد",
    age: 26,
    condition: "كشف جديد",
    lastVisit: "23/2/2026",
  },
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
  {
    id: 3,
    name: "محمد حسن",
    age: 42,
    condition: "سكر",
    lastVisit: "20/2/2026",
  },
  {
    id: 4,
    name: "مريم خالد",
    age: 31,
    condition: "أنيميا",
    lastVisit: "21/2/2026",
  },
  {
    id: 5,
    name: "خالد سمير",
    age: 50,
    condition: "قلب",
    lastVisit: "22/2/2026",
  },
  {
    id: 6,
    name: "نورهان أحمد",
    age: 26,
    condition: "كشف جديد",
    lastVisit: "23/2/2026",
  },
];

const appointments: Appointment[] = [
  { id: 1, patient: "أحمد محمد", time: "10:00 AM", status: "قادم" },
  { id: 2, patient: "سارة علي", time: "11:30 AM", status: "تم" },
  { id: 3, patient: "محمد حسن", time: "01:00 PM", status: "قادم" },
  { id: 4, patient: "مريم خالد", time: "02:30 PM", status: "ملغي" },
  { id: 5, patient: "خالد سمير", time: "04:00 PM", status: "قادم" },
  { id: 1, patient: "أحمد محمد", time: "10:00 AM", status: "قادم" },
  { id: 2, patient: "سارة علي", time: "11:30 AM", status: "تم" },
  { id: 3, patient: "محمد حسن", time: "01:00 PM", status: "قادم" },
  { id: 4, patient: "مريم خالد", time: "02:30 PM", status: "ملغي" },
  { id: 5, patient: "خالد سمير", time: "04:00 PM", status: "قادم" },
  { id: 1, patient: "أحمد محمد", time: "10:00 AM", status: "قادم" },
  { id: 2, patient: "سارة علي", time: "11:30 AM", status: "تم" },
  { id: 3, patient: "محمد حسن", time: "01:00 PM", status: "قادم" },
  { id: 4, patient: "مريم خالد", time: "02:30 PM", status: "ملغي" },
  { id: 5, patient: "خالد سمير", time: "04:00 PM", status: "قادم" },
];

/* ================= SECTIONS COMPONENTS ================= */
const DashboardSection = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
    {stats.map((stat, i) => (
      <div
        key={i}
        className={`${stat.color} text-white p-6 rounded-2xl shadow`}
      >
        <div className="text-3xl mb-2">{stat.icon}</div>
        <p className="text-sm opacity-80">{stat.title}</p>
        <p className="text-3xl font-bold">{stat.value}</p>
      </div>
    ))}
  </section>
);

const PatientsSection = () => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <h2 className="text-xl font-semibold mb-4">👥 المرضى</h2>
    <table className="w-full text-right">
      <thead>
        <tr className="text-gray-500 border-b">
          <th className="py-2">الاسم</th>
          <th>العمر</th>
          <th>الحالة</th>
          <th>آخر زيارة</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.id} className="border-b last:border-0">
            <td className="py-3 font-medium">{p.name}</td>
            <td>{p.age}</td>
            <td className="text-blue-600">{p.condition}</td>
            <td>{p.lastVisit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AppointmentsSection = () => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <h2 className="text-xl font-semibold mb-4">📅 مواعيد اليوم</h2>
    <div className="space-y-4">
      {appointments.map((a) => (
        <div
          key={a.id}
          className="flex justify-between items-center bg-slate-50 p-4 rounded-xl"
        >
          <div>
            <p className="font-medium">{a.patient}</p>
            <p className="text-sm text-gray-500">{a.time}</p>
          </div>
          <span
            className={`text-sm px-3 py-1 rounded-full ${
              a.status === "قادم"
                ? "bg-blue-100 text-blue-700"
                : a.status === "تم"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-200"
            }`}
          >
            {a.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ReportsSection = () => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <h2 className="text-xl font-semibold mb-4">📊 التقارير</h2>
    <p>هنا سيتم عرض التقارير الخاصة بالعيادة.</p>
  </div>
);

const RecordsSection = () => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <h2 className="text-xl font-semibold mb-4">🧾 السجلات الطبية</h2>
    <p>السجلات الطبية لكل مريض هنا.</p>
  </div>
);

const SettingsSection = () => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <h2 className="text-xl font-semibold mb-4">⚙️ الإعدادات</h2>
    <p>إعدادات العيادة وبيانات الطبيب.</p>
  </div>
);

/* ================= MAIN COMPONENT ================= */
const DoctorDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    | "dashboard"
    | "patients"
    | "appointments"
    | "reports"
    | "records"
    | "settings"
  >("dashboard");

  return (
    <div className="min-h-screen bg-slate-100 flex" dir="rtl">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-72 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-10">👨‍⚕️ د. أحمد</h2>

        <nav className="flex flex-col space-y-3">
          <button
            onClick={() => setActiveSection("dashboard")}
            className={`text-right px-4 py-2 rounded-lg hover:bg-slate-700 transition ${
              activeSection === "dashboard" ? "bg-blue-600 font-semibold" : ""
            }`}
          >
            🏠 لوحة التحكم
          </button>
          <button
            onClick={() => setActiveSection("patients")}
            className={`text-right px-4 py-2 rounded-lg hover:bg-slate-700 transition ${
              activeSection === "patients" ? "bg-blue-600 font-semibold" : ""
            }`}
          >
            👥 المرضى
          </button>
          <button
            onClick={() => setActiveSection("appointments")}
            className={`text-right px-4 py-2 rounded-lg hover:bg-slate-700 transition ${
              activeSection === "appointments"
                ? "bg-blue-600 font-semibold"
                : ""
            }`}
          >
            📅 المواعيد
          </button>
          <button
            onClick={() => setActiveSection("reports")}
            className={`text-right px-4 py-2 rounded-lg hover:bg-slate-700 transition ${
              activeSection === "reports" ? "bg-blue-600 font-semibold" : ""
            }`}
          >
            📊 التقارير
          </button>
          <button
            onClick={() => setActiveSection("records")}
            className={`text-right px-4 py-2 rounded-lg hover:bg-slate-700 transition ${
              activeSection === "records" ? "bg-blue-600 font-semibold" : ""
            }`}
          >
            🧾 السجلات الطبية
          </button>
          <button
            onClick={() => setActiveSection("settings")}
            className={`text-right px-4 py-2 rounded-lg hover:bg-slate-700 transition ${
              activeSection === "settings" ? "bg-blue-600 font-semibold" : ""
            }`}
          >
            ⚙️ الإعدادات
          </button>
        </nav>
      </aside>

      {/* ===== MAIN ===== */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeSection === "dashboard" && <DashboardSection />}
        {activeSection === "patients" && <PatientsSection />}
        {activeSection === "appointments" && <AppointmentsSection />}
        {activeSection === "reports" && <ReportsSection />}
        {activeSection === "records" && <RecordsSection />}
        {activeSection === "settings" && <SettingsSection />}
      </main>
    </div>
  );
};

export default DoctorDashboard;

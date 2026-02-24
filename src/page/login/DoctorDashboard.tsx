import React, { useState } from "react";

/* ================= TYPES ================= */
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

type SectionKey =
  | "dashboard"
  | "patients"
  | "appointments"
  | "reports"
  | "records"
  | "settings";

/* ================= DATA ================= */
const stats: Stat[] = [
  { title: "إجمالي المرضى", value: "248", icon: "👥", color: "bg-blue-900" },
  { title: "مواعيد اليوم", value: "12", icon: "📅", color: "bg-blue-900" },
  { title: "حالات حرجة", value: "3", icon: "🚨", color: "bg-blue-900" },
  { title: "تقييم الطبيب", value: "4.9", icon: "⭐", color: "bg-blue-900" },
  { title: "استشارات جديدة", value: "7", icon: "🩺", color: "bg-blue-900" },
];

const patients: Patient[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `مريض ${i + 1}`,
  age: 20 + (i % 50),
  condition: ["ضغط", "سكر", "قلب", "أنيميا", "كشف جديد"][i % 5],
  lastVisit: `2/${10 + i}/2026`,
}));

const appointments: Appointment[] = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  patient: `مريض ${i + 1}`,
  time: `${9 + (i % 9)}:00 ${i % 2 === 0 ? "AM" : "PM"}`,
  status: ["قادم", "تم", "ملغي"][i % 3] as "قادم" | "تم" | "ملغي",
}));

/* ================= SECTIONS ================= */
const DashboardSection: React.FC = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
    {stats.map((stat, i) => (
      <div
        key={i}
        className={`${stat.color} text-white p-6 rounded-2xl shadow-lg ${
          i === 0 ? "scale-105 shadow-2xl" : ""
        } transform transition-all`}
      >
        <div className="text-4xl mb-3">{stat.icon}</div>
        <p className="text-sm opacity-90">{stat.title}</p>
        <p className="text-3xl font-extrabold">{stat.value}</p>
      </div>
    ))}
  </section>
);

const PatientsSection: React.FC = () => (
  <div className="bg-gray-800 text-white p-6 rounded-2xl shadow overflow-x-auto">
    <h2 className="text-xl font-semibold mb-4">👥 المرضى</h2>
    <table className="w-full text-right min-w-[600px]">
      <thead>
        <tr className="text-gray-300 border-b border-gray-600">
          <th className="py-2">الاسم</th>
          <th>العمر</th>
          <th>الحالة</th>
          <th>آخر زيارة</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.id} className="border-b border-gray-700 last:border-0">
            <td className="py-3 font-medium">{p.name}</td>
            <td>{p.age}</td>
            <td className="text-blue-400">{p.condition}</td>
            <td>{p.lastVisit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AppointmentsSection: React.FC = () => (
  <div className="bg-gray-800 text-white p-6 rounded-2xl shadow overflow-x-auto">
    <h2 className="text-xl font-semibold mb-4">📅 مواعيد اليوم</h2>
    <div className="space-y-4 min-w-[400px]">
      {appointments.map((a) => (
        <div
          key={a.id}
          className="flex justify-between items-center bg-gray-700 p-4 rounded-xl"
        >
          <div>
            <p className="font-medium">{a.patient}</p>
            <p className="text-sm text-gray-300">{a.time}</p>
          </div>
          <span
            className={`text-sm px-3 py-1 rounded-full ${
              a.status === "قادم"
                ? "bg-blue-600 text-white"
                : a.status === "تم"
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
            }`}
          >
            {a.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ReportsSection: React.FC = () => (
  <div className="bg-gray-800 text-white p-6 rounded-2xl shadow">
    <h2 className="text-xl font-semibold mb-4">📊 التقارير</h2>
    <p>هنا سيتم عرض التقارير الخاصة بالعيادة.</p>
  </div>
);

const RecordsSection: React.FC = () => (
  <div className="bg-gray-800 text-white p-6 rounded-2xl shadow">
    <h2 className="text-xl font-semibold mb-4">🧾 السجلات الطبية</h2>
    <p>السجلات الطبية لكل مريض هنا.</p>
  </div>
);

const SettingsSection: React.FC = () => (
  <div className="bg-gray-800 text-white p-6 rounded-2xl shadow">
    <h2 className="text-xl font-semibold mb-4">⚙️ الإعدادات</h2>
    <p>إعدادات العيادة وبيانات الطبيب.</p>
  </div>
);

const DoctorDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-900 text-white" dir="rtl">
      {/* ===== MOBILE HEADER ===== */}
      <div className="sm:hidden p-4 bg-gray-800 flex justify-between items-center">
        <h2 className="font-bold text-lg">👨‍⚕️ د. أحمد</h2>
        <button
          className="p-2 bg-blue-900 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* ===== SIDEBAR ===== */}
      <aside
        className={`fixed top-0 right-0 h-full bg-gray-800 p-6 z-50 transform transition-transform
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"} sm:translate-x-0 sm:relative sm:w-80`}
      >
        <h2 className="text-2xl font-bold mb-10 hidden sm:block">👨‍⚕️ د. أحمد</h2>
        <nav className="flex flex-col space-y-3">
          {[
            { key: "dashboard", label: "🏠 لوحة التحكم" },
            { key: "patients", label: "👥 المرضى" },
            { key: "appointments", label: "📅 المواعيد" },
            { key: "reports", label: "📊 التقارير" },
            { key: "records", label: "🧾 السجلات الطبية" },
            { key: "settings", label: "⚙️ الإعدادات" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveSection(item.key as SectionKey);
                setSidebarOpen(false);
              }}
              className={`text-right px-4 py-3 rounded-lg transition-all ${
                activeSection === item.key
                  ? "bg-blue-700 font-bold scale-105 shadow-xl"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* ===== OVERLAY FOR MOBILE ===== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== MAIN CONTENT ===== */}
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

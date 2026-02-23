// EmergenciesSection.tsx
import React, { useState } from "react";
import {
  emergencies as initialEmergencies,
  Emergency,
} from "./data/emergenciesData";

const EmergenciesSection: React.FC = () => {
  const [emergencies, setEmergencies] =
    useState<Emergency[]>(initialEmergencies);

  // إضافة حالة طوارئ جديدة
  const addEmergency = () => {
    const newEmergency: Emergency = {
      id: Date.now(),
      patientName: "مريض جديد",
      doctorName: "د. محمد فاروق",
      department: "قسم الطوارئ",
      date: "2026-02-24",
      time: "13:30",
      status: "جديد",
    };
    setEmergencies([...emergencies, newEmergency]);
  };

  // تغيير حالة الطوارئ
  const toggleStatus = (id: number) => {
    setEmergencies(
      emergencies.map((e) => {
        if (e.id === id) {
          let newStatus: Emergency["status"];
          if (e.status === "جديد") newStatus = "قيد المعالجة";
          else if (e.status === "قيد المعالجة") newStatus = "تم إنهاء";
          else newStatus = "جديد";
          return { ...e, status: newStatus };
        }
        return e;
      }),
    );
  };

  // ستايل جديد للبطاقة حسب الحالة
  const statusStyle = (status: string) => {
    switch (status) {
      case "جديد":
        return "bg-white border-l-4 border-orange-500";
      case "قيد المعالجة":
        return "bg-white border-l-4 border-blue-500";
      case "تم إنهاء":
        return "bg-white border-l-4 border-green-500";
      default:
        return "bg-white border-l-4 border-gray-300";
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-2xl">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">قسم الطوارئ</h2>
        <p className="mb-2 text-gray-700">
          إجمالي الحالات: {emergencies.length}
        </p>

        <button
          onClick={addEmergency}
          className="mb-6 px-5 py-2 bg-red-900 text-white rounded-full shadow-md hover:bg-red-700 transition"
        >
          أضف حالة طوارئ جديدة
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencies.map((e: Emergency) => (
          <div
            key={e.id}
            className={`p-5 rounded-xl shadow-lg ${statusStyle(e.status)} hover:shadow-xl transition`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {e.patientName}
            </h3>
            <p className="text-gray-600">
              <span className="font-medium">الطبيب:</span> {e.doctorName}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">القسم:</span> {e.department}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">التاريخ:</span> {e.date}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">الوقت:</span> {e.time}
            </p>
            <p className="mt-2 font-semibold text-gray-800">
              الحالة: {e.status}
            </p>
            <button
              onClick={() => toggleStatus(e.id)}
              className="mt-3 px-4 py-1 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
            >
              تغيير الحالة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergenciesSection;

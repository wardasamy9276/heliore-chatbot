import React, { useState } from "react";
import {
  appointments as initialAppointments,
  Appointment,
} from "./data/appointmentsData";

const AppointmentsSection: React.FC = () => {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  // إضافة حجز جديد
  const addAppointment = () => {
    const newAppointment: Appointment = {
      id: Date.now(), // رقم فريد
      patientName: "مريض جديد",
      doctorName: "د. أحمد علي",
      department: "القسم الباطني",
      date: "2026-02-27",
      time: "13:00",
      status: "قادم",
    };
    setAppointments([...appointments, newAppointment]);
  };

  // تغيير حالة الحجز (مؤكد / ملغي / قادم)
  const toggleStatus = (id: number) => {
    setAppointments(
      appointments.map((appt) => {
        if (appt.id === id) {
          let newStatus: Appointment["status"];
          if (appt.status === "قادم") newStatus = "مؤكد";
          else if (appt.status === "مؤكد") newStatus = "ملغي";
          else newStatus = "قادم";
          return { ...appt, status: newStatus };
        }
        return appt;
      }),
    );
  };

  const totalAppointments = appointments.length;
  const activeAppointments = appointments.filter(
    (a) => a.status === "مؤكد" || a.status === "قادم",
  ).length;

  // ألوان جديدة حسب الحالة
  const statusColor = (status: string) => {
    switch (status) {
      case "مؤكد":
        return "bg-blue-200";
      case "ملغي":
        return "bg-gray-300";
      case "قادم":
        return "bg-orange-200";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold mb-4 text-center">قسم الحجوزات</h2>
        <p className="text-center">إجمالي الحجوزات: {totalAppointments}</p>
        <p className="text-center">الحجوزات الفعالة: {activeAppointments}</p>

        <button
          onClick={addAppointment}
          className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg
         hover:bg-green-600 transition "
        >
          أضف حجز جديد
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        {appointments.map((appt: Appointment) => (
          <div
            key={appt.id}
            className={`p-4 rounded-lg shadow ${statusColor(appt.status)}`}
          >
            <h3 className="text-lg font-semibold">{appt.patientName}</h3>
            <p>الطبيب: {appt.doctorName}</p>
            <p>القسم: {appt.department}</p>
            <p>التاريخ: {appt.date}</p>
            <p>الوقت: {appt.time}</p>
            <p>الحالة: {appt.status}</p>
            <button
              onClick={() => toggleStatus(appt.id)}
              className="mt-2 px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              تغيير الحالة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsSection;

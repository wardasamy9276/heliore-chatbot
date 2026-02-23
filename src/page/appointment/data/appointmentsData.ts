// appointmentsData.ts
export type Appointment = {
  id: number;
  patientName: string;
  doctorName: string;
  department: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  status: "مؤكد" | "ملغي" | "قادم";
};

export const appointments: Appointment[] = [
  { id: 1, patientName: "محمد سامي", doctorName: "د. أحمد علي", department: "القسم الباطني", date: "2026-02-25", time: "10:00", status: "مؤكد" },
  { id: 2, patientName: "سارة محمود", doctorName: "د. ليلى خالد", department: "قسم الأطفال", date: "2026-02-25", time: "11:00", status: "قادم" },
  { id: 3, patientName: "كريم حسن", doctorName: "د. سارة محمود", department: "قسم الجراحة", date: "2026-02-25", time: "12:30", status: "ملغي" },
  { id: 4, patientName: "منى فاروق", doctorName: "د. هشام سعيد", department: "قسم الجراحة", date: "2026-02-26", time: "09:30", status: "مؤكد" },
  { id: 5, patientName: "هالة محمد", doctorName: "د. منال كمال", department: "قسم العيون", date: "2026-02-26", time: "14:00", status: "قادم" },
  // ممكن تضيف أي عدد من الحجوزات هنا
];
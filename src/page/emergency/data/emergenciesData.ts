// emergenciesData.ts
export type Emergency = {
  id: number;
  patientName: string;
  doctorName: string;
  department: string; // القسم
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  status: "جديد" | "قيد المعالجة" | "تم إنهاء";
};

export const emergencies: Emergency[] = [
  { id: 1, patientName: "محمد سامي", doctorName: "د. محمد فاروق", department: "قسم الطوارئ", date: "2026-02-23", time: "10:15", status: "جديد" },
  { id: 2, patientName: "سارة محمود", doctorName: "د. رنا سامي", department: "قسم الطوارئ", date: "2026-02-23", time: "11:00", status: "قيد المعالجة" },
  { id: 3, patientName: "كريم حسن", doctorName: "د. محمد فاروق", department: "قسم الطوارئ", date: "2026-02-23", time: "11:30", status: "تم إنهاء" },
  { id: 4, patientName: "منى فاروق", doctorName: "د. رنا سامي", department: "قسم الطوارئ", date: "2026-02-23", time: "12:00", status: "جديد" },
  { id: 5, patientName: "هالة محمد", doctorName: "د. محمد فاروق", department: "قسم الطوارئ", date: "2026-02-23", time: "12:45", status: "قيد المعالجة" },
];
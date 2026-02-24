export interface Emergency {
  id: number;
  patientName: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  status: "جديد" | "قيد المعالجة" | "تم إنهاء";
}

export const emergencies: Emergency[] = [
  {
    id: 1,
    patientName: "أحمد علي",
    doctorName: "د. محمد فاروق",
    department: "قسم الطوارئ",
    date: "2026-02-23",
    time: "09:30",
    status: "جديد",
  },
  {
    id: 2,
    patientName: "منى حسين",
    doctorName: "د. سارة أحمد",
    department: "قسم الطوارئ",
    date: "2026-02-23",
    time: "10:15",
    status: "قيد المعالجة",
  },
  {
    id: 3,
    patientName: "خالد سمير",
    doctorName: "د. علي مصطفى",
    department: "قسم الطوارئ",
    date: "2026-02-23",
    time: "11:00",
    status: "تم إنهاء",
  },
  {
    id: 4,
    patientName: "ليلى محمود",
    doctorName: "د. محمد فاروق",
    department: "قسم الطوارئ",
    date: "2026-02-23",
    time: "11:45",
    status: "جديد",
  },
  {
    id: 5,
    patientName: "سامر جمال",
    doctorName: "د. سارة أحمد",
    department: "قسم الطوارئ",
    date: "2026-02-23",
    time: "12:30",
    status: "قيد المعالجة",
  },
];
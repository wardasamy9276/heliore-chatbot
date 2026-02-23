// data/doctorsData.ts

export type Patient = {
  id: number;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
};

export type Appointment = {
  id: number;
  patient: string;
  time: string;
  status: "قادم" | "تم" | "ملغي";
};

export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  patients: Patient[];
  appointments: Appointment[];
};

export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "د. أحمد",
    specialty: "باطنة",
    patients: [
      { id: 1, name: "أحمد محمد", age: 35, condition: "ضغط", lastVisit: "10/2/2026" },
      { id: 2, name: "سارة علي", age: 28, condition: "متابعة", lastVisit: "18/2/2026" },
      { id: 5, name: "حسين سامي", age: 40, condition: "سكري", lastVisit: "15/2/2026" },
      { id: 6, name: "منى خالد", age: 32, condition: "ضغط", lastVisit: "20/2/2026" },
      { id: 11, name: "ياسر عبد الله", age: 50, condition: "كوليسترول", lastVisit: "21/2/2026" },
    ],
    appointments: [
      { id: 1, patient: "أحمد محمد", time: "10:00 AM", status: "قادم" },
      { id: 2, patient: "سارة علي", time: "11:30 AM", status: "تم" },
      { id: 5, patient: "حسين سامي", time: "02:00 PM", status: "قادم" },
      { id: 9, patient: "منى خالد", time: "03:00 PM", status: "قادم" },
    ],
  },
  {
    id: 2,
    name: "د. مريم",
    specialty: "نساء وتوليد",
    patients: [
      { id: 3, name: "مريم خالد", age: 31, condition: "أنيميا", lastVisit: "21/2/2026" },
      { id: 4, name: "نورهان أحمد", age: 26, condition: "كشف جديد", lastVisit: "23/2/2026" },
      { id: 7, name: "ليلى سعيد", age: 29, condition: "حمل", lastVisit: "19/2/2026" },
      { id: 8, name: "نجلاء مصطفى", age: 34, condition: "ولادة", lastVisit: "12/2/2026" },
      { id: 12, name: "هالة كريم", age: 27, condition: "متابعة", lastVisit: "22/2/2026" },
    ],
    appointments: [
      { id: 3, patient: "مريم خالد", time: "12:00 PM", status: "قادم" },
      { id: 4, patient: "نورهان أحمد", time: "01:30 PM", status: "قادم" },
      { id: 6, patient: "ليلى سعيد", time: "03:00 PM", status: "تم" },
      { id: 10, patient: "هالة كريم", time: "04:00 PM", status: "قادم" },
    ],
  },
  {
    id: 3,
    name: "د. خالد",
    specialty: "عيون",
    patients: [
      { id: 9, name: "سعيد محمود", age: 45, condition: "ضعف نظر", lastVisit: "10/2/2026" },
      { id: 10, name: "منى علي", age: 38, condition: "جفاف العين", lastVisit: "18/2/2026" },
      { id: 13, name: "علي سمير", age: 42, condition: "المياه البيضاء", lastVisit: "15/2/2026" },
      { id: 14, name: "ندى حسين", age: 30, condition: "زرق العين", lastVisit: "20/2/2026" },
    ],
    appointments: [
      { id: 7, patient: "سعيد محمود", time: "09:00 AM", status: "قادم" },
      { id: 8, patient: "منى علي", time: "11:00 AM", status: "ملغي" },
      { id: 11, patient: "علي سمير", time: "01:00 PM", status: "تم" },
      { id: 12, patient: "ندى حسين", time: "02:30 PM", status: "قادم" },
    ],
  },
  {
    id: 4,
    name: "د. سلمى",
    specialty: "أسنان",
    patients: [
      { id: 15, name: "رامي عبد الرحمن", age: 36, condition: "تسوس", lastVisit: "12/2/2026" },
      { id: 16, name: "منى سامي", age: 29, condition: "تنظيف", lastVisit: "18/2/2026" },
      { id: 17, name: "هشام علي", age: 40, condition: "حشو", lastVisit: "15/2/2026" },
    ],
    appointments: [
      { id: 13, patient: "رامي عبد الرحمن", time: "10:00 AM", status: "قادم" },
      { id: 14, patient: "منى سامي", time: "11:00 AM", status: "قادم" },
      { id: 15, patient: "هشام علي", time: "12:30 PM", status: "تم" },
    ],
  },

  {
    id: 5,
    name: "د. مى",
    specialty: "أسنان",
    patients: [
      { id: 15, name: "رامي عبد الرحمن", age: 36, condition: "تسوس", lastVisit: "12/2/2026" },
      { id: 16, name: "منى سامي", age: 29, condition: "تنظيف", lastVisit: "18/2/2026" },
      { id: 17, name: "هشام علي", age: 40, condition: "حشو", lastVisit: "15/2/2026" },
    ],
    appointments: [
      { id: 13, patient: "رامي عبد الرحمن", time: "10:00 AM", status: "قادم" },
      { id: 14, patient: "منى سامي", time: "11:00 AM", status: "قادم" },
      { id: 15, patient: "هشام علي", time: "12:30 PM", status: "تم" },
    ],
  },
  {
    id: 5,
    name: "د. منى",
    specialty: "أسنان",
    patients: [
      { id: 15, name: "رامي عبد الرحمن", age: 36, condition: "تسوس", lastVisit: "12/2/2026" },
      { id: 16, name: "منى سامي", age: 29, condition: "تنظيف", lastVisit: "18/2/2026" },
      { id: 17, name: "هشام علي", age: 40, condition: "حشو", lastVisit: "15/2/2026" },
    ],
    appointments: [
      { id: 13, patient: "رامي عبد الرحمن", time: "10:00 AM", status: "قادم" },
      { id: 14, patient: "منى سامي", time: "11:00 AM", status: "قادم" },
      { id: 15, patient: "هشام علي", time: "12:30 PM", status: "تم" },
    ],
  },
  {
    id: 6,
    name: "د. نهى",
    specialty: "أسنان",
    patients: [
      { id: 15, name: "رامي عبد الرحمن", age: 36, condition: "تسوس", lastVisit: "12/2/2026" },
      { id: 16, name: "منى سامي", age: 29, condition: "تنظيف", lastVisit: "18/2/2026" },
      { id: 17, name: "هشام علي", age: 40, condition: "حشو", lastVisit: "15/2/2026" },
    ],
    appointments: [
      { id: 13, patient: "رامي عبد الرحمن", time: "10:00 AM", status: "قادم" },
      { id: 14, patient: "منى سامي", time: "11:00 AM", status: "قادم" },
      { id: 15, patient: "هشام علي", time: "12:30 PM", status: "تم" },
    ],
  },
    {
    id: 7,
    name: "د.احمد",
    specialty: "عيون",
    patients: [
      { id: 9, name: "سعيد محمود", age: 45, condition: "ضعف نظر", lastVisit: "10/2/2026" },
      { id: 10, name: "منى علي", age: 38, condition: "جفاف العين", lastVisit: "18/2/2026" },
      { id: 13, name: "علي سمير", age: 42, condition: "المياه البيضاء", lastVisit: "15/2/2026" },
      { id: 14, name: "ندى حسين", age: 30, condition: "زرق العين", lastVisit: "20/2/2026" },
    ],
    appointments: [
      { id: 7, patient: "سعيد محمود", time: "09:00 AM", status: "قادم" },
      { id: 8, patient: "منى علي", time: "11:00 AM", status: "ملغي" },
      { id: 11, patient: "علي سمير", time: "01:00 PM", status: "تم" },
      { id: 12, patient: "ندى حسين", time: "02:30 PM", status: "قادم" },
    ],
  },
    {
    id: 8,
    name: "د. خالد",
    specialty: "عيون",
    patients: [
      { id: 9, name: "سعيد محمود", age: 45, condition: "ضعف نظر", lastVisit: "10/2/2026" },
      { id: 10, name: "منى علي", age: 38, condition: "جفاف العين", lastVisit: "18/2/2026" },
      { id: 13, name: "علي سمير", age: 42, condition: "المياه البيضاء", lastVisit: "15/2/2026" },
      { id: 14, name: "ندى حسين", age: 30, condition: "زرق العين", lastVisit: "20/2/2026" },
    ],
    appointments: [
      { id: 7, patient: "سعيد محمود", time: "09:00 AM", status: "قادم" },
      { id: 8, patient: "منى علي", time: "11:00 AM", status: "ملغي" },
      { id: 11, patient: "علي سمير", time: "01:00 PM", status: "تم" },
      { id: 12, patient: "ندى حسين", time: "02:30 PM", status: "قادم" },
    ],
  },
];
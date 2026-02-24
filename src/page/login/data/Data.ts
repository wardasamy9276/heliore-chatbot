

export interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
}

export interface Appointment {
  id: number;
  patient: string;
  time: string;
  status: "قادم" | "تم" | "ملغي";
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  patients: Patient[];
  appointments: Appointment[];
}



export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "د. أحمد علي",
    specialty: "باطنة",
    patients: [
      { id: 1, name: "محمد حسن", age: 45, condition: "ضغط", lastVisit: "2025-01-10" },
      { id: 2, name: "سارة محمود", age: 30, condition: "أنيميا", lastVisit: "2025-01-18" },
      { id: 3, name: "محمود سمير", age: 55, condition: "سكري", lastVisit: "2025-02-02" },
    ],
    appointments: [
      { id: 1, patient: "محمد حسن", time: "09:00", status: "تم" },
      { id: 2, patient: "سارة محمود", time: "10:30", status: "قادم" },
      { id: 3, patient: "محمود سمير", time: "12:00", status: "قادم" },
    ],
  },
  {
    id: 2,
    name: "د. منى يوسف",
    specialty: "أطفال",
    patients: [
      { id: 4, name: "آدم أحمد", age: 5, condition: "برد", lastVisit: "2025-02-01" },
      { id: 5, name: "ليلى كريم", age: 3, condition: "حساسية", lastVisit: "2025-02-05" },
      { id: 6, name: "ياسين محمد", age: 6, condition: "حمى", lastVisit: "2025-02-11" },
    ],
    appointments: [
      { id: 4, patient: "آدم أحمد", time: "09:00", status: "تم" },
      { id: 5, patient: "ليلى كريم", time: "10:00", status: "قادم" },
      { id: 6, patient: "ياسين محمد", time: "11:30", status: "قادم" },
    ],
  },
  {
    id: 3,
    name: "د. خالد حسن",
    specialty: "عظام",
    patients: [
      { id: 7, name: "عمرو سعيد", age: 50, condition: "خشونة ركبة", lastVisit: "2025-01-25" },
      { id: 8, name: "طارق يوسف", age: 34, condition: "إصابة ملاعب", lastVisit: "2025-02-03" },
      { id: 9, name: "محمود رجب", age: 60, condition: "آلام ظهر", lastVisit: "2025-02-17" },
    ],
    appointments: [
      { id: 7, patient: "عمرو سعيد", time: "11:00", status: "تم" },
      { id: 8, patient: "طارق يوسف", time: "13:00", status: "قادم" },
    ],
  },
  {
    id: 4,
    name: "د. ريم عبد الله",
    specialty: "جلدية",
    patients: [
      { id: 10, name: "نهى سامي", age: 28, condition: "حب الشباب", lastVisit: "2025-02-01" },
      { id: 11, name: "هبة علي", age: 35, condition: "حساسية جلد", lastVisit: "2025-02-08" },
      { id: 12, name: "داليا عمر", age: 40, condition: "تصبغات", lastVisit: "2025-02-14" },
    ],
    appointments: [
      { id: 9, patient: "نهى سامي", time: "10:00", status: "تم" },
      { id: 10, patient: "هبة علي", time: "12:30", status: "قادم" },
      { id: 11, patient: "داليا عمر", time: "14:00", status: "قادم" },
    ],
  },
  {
    id: 5,
    name: "د. سامي عبد الرحمن",
    specialty: "أذن وأنف وحنجرة",
    patients: [
      { id: 13, name: "مروان أيمن", age: 25, condition: "التهاب أذن", lastVisit: "2025-01-30" },
      { id: 14, name: "علياء كريم", age: 32, condition: "صداع نصفي", lastVisit: "2025-02-07" },
    ],
    appointments: [
      { id: 12, patient: "مروان أيمن", time: "09:30", status: "تم" },
      { id: 13, patient: "علياء كريم", time: "11:00", status: "قادم" },
    ],
  },
  {
    id: 6,
    name: "د. ليلى فؤاد",
    specialty: "عيون",
    patients: [
      { id: 15, name: "سامي شريف", age: 40, condition: "قصر نظر", lastVisit: "2025-02-05" },
      { id: 16, name: "منة الله خالد", age: 29, condition: "إعتام عدسة", lastVisit: "2025-02-10" },
    ],
    appointments: [
      { id: 14, patient: "سامي شريف", time: "10:00", status: "تم" },
      { id: 15, patient: "منة الله خالد", time: "11:30", status: "قادم" },
    ],
  },
  {
    id: 7,
    name: "د. مازن فهمي",
    specialty: "أسنان",
    patients: [
      { id: 17, name: "ليلى محمد", age: 20, condition: "تسوس", lastVisit: "2025-02-03" },
      { id: 18, name: "هشام علي", age: 33, condition: "لثة ملتهبة", lastVisit: "2025-02-12" },
    ],
    appointments: [
      { id: 16, patient: "ليلى محمد", time: "09:00", status: "تم" },
      { id: 17, patient: "هشام علي", time: "10:30", status: "قادم" },
    ],
  },
  {
    id: 8,
    name: "د. نورهان مصطفى",
    specialty: "طب نفسي",
    patients: [
      { id: 19, name: "سامر نبيل", age: 28, condition: "قلق", lastVisit: "2025-02-01" },
      { id: 20, name: "هالة جمال", age: 35, condition: "اكتئاب", lastVisit: "2025-02-08" },
    ],
    appointments: [
      { id: 18, patient: "سامر نبيل", time: "09:00", status: "تم" },
      { id: 19, patient: "هالة جمال", time: "10:30", status: "قادم" },
    ],
  },
  {
    id: 9,
    name: "د. خالد سمير",
    specialty: "غدد صماء",
    patients: [
      { id: 21, name: "أحمد نادر", age: 50, condition: "سكر", lastVisit: "2025-01-20" },
      { id: 22, name: "مريم سعيد", age: 45, condition: "ضغط", lastVisit: "2025-02-05" },
    ],
    appointments: [
      { id: 20, patient: "أحمد نادر", time: "09:00", status: "تم" },
      { id: 21, patient: "مريم سعيد", time: "10:30", status: "قادم" },
    ],
  },
  {
    id: 10,
    name: "د. سارة فوزي",
    specialty: "تخسيس وتغذية",
    patients: [
      { id: 23, name: "ريم أحمد", age: 29, condition: "سمنة", lastVisit: "2025-02-03" },
      { id: 24, name: "عمر حسن", age: 35, condition: "سمنة", lastVisit: "2025-02-10" },
    ],
    appointments: [
      { id: 22, patient: "ريم أحمد", time: "09:00", status: "تم" },
      { id: 23, patient: "عمر حسن", time: "10:30", status: "قادم" },
    ],
  },
  {
    id: 11,
    name: "د. أيمن الشامي",
    specialty: "مسالك بولية",
    patients: [
      { id: 25, name: "محمد صلاح", age: 40, condition: "حصوات", lastVisit: "2025-02-05" },
      { id: 26, name: "طارق عادل", age: 50, condition: "تضخم غدة", lastVisit: "2025-02-12" },
    ],
    appointments: [
      { id: 24, patient: "محمد صلاح", time: "09:00", status: "تم" },
      { id: 25, patient: "طارق عادل", time: "10:30", status: "قادم" },
    ],
  },
  {
    id: 12,
    name: "د. مها حسنين",
    specialty: "أمراض صدر",
    patients: [
      { id: 27, name: "عصام جمال", age: 55, condition: "ربو", lastVisit: "2025-02-01" },
      { id: 28, name: "ليلى سامي", age: 60, condition: "انسداد رئة", lastVisit: "2025-02-08" },
    ],
    appointments: [
      { id: 26, patient: "عصام جمال", time: "09:00", status: "تم" },
      { id: 27, patient: "ليلى سامي", time: "10:30", status: "قادم" },
    ],
  },
  {
    id: 13,
    name: "د. حسن فؤاد",
    specialty: "جلدية",
    patients: [
      { id: 29, name: "منة علي", age: 30, condition: "حساسية جلد", lastVisit: "2025-02-01" },
      { id: 30, name: "أحمد جمال", age: 35, condition: "حب شباب", lastVisit: "2025-02-07" },
    ],
    appointments: [
      { id: 28, patient: "منة علي", time: "09:00", status: "تم" },
      { id: 29, patient: "أحمد جمال", time: "10:30", status: "قادم" },
    ],
  },
  {
    id: 14,
    name: "د. هالة فهمي",
    specialty: "عظام",
    patients: [
      { id: 31, name: "رامي يوسف", age: 45, condition: "كسور", lastVisit: "2025-02-03" },
      { id: 32, name: "نوران شريف", age: 50, condition: "خشونة مفصل", lastVisit: "2025-02-10" },
    ],
    appointments: [
      { id: 30, patient: "رامي يوسف", time: "09:00", status: "تم" },
      { id: 31, patient: "نوران شريف", time: "10:30", status: "قادم" },
    ],
  },
  {
    id: 15,
    name: "د. أحمد مرسي",
    specialty: "باطنة",
    patients: [
      { id: 33, name: "سلمى علي", age: 40, condition: "ضغط", lastVisit: "2025-02-05" },
      { id: 34, name: "عمر فؤاد", age: 50, condition: "سكري", lastVisit: "2025-02-12" },
    ],
    appointments: [
      { id: 32, patient: "سلمى علي", time: "09:00", status: "تم" },
      { id: 33, patient: "عمر فؤاد", time: "10:30", status: "قادم" },
    ],
  },
];
// src/login/data/DoctorData.ts
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
  status: "قادم" | "تم" | "ملغى";
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  patients: Patient[];
  appointments: Appointment[];
}

// أسماء المرضى
const patientNames = [
  "أحمد علي", "منى حسين", "خالد سمير", "ليلى سامي", "سارة محمود",
  "يوسف عادل", "نورهان كريم", "هشام فهمي", "دينا شريف", "محمد جمال",
  "ليلى يوسف", "رامي حسام", "ندى خالد", "عمر سعيد", "هالة سامي",
  "محمود طارق", "هند سمير", "أشرف عماد", "سارة حسن", "زينب علي",
];

// الحالات
const conditions = ["ضغط مرتفع", "سكري", "نزلة برد", "حمى", "صداع", "حساسية"];

// التخصصات
const doctorSpecialties = [
  "أمراض باطنية", "أطفال", "جراحة", "أسنان", "عيون",
  "نساء وتوليد", "طب نفسي", "أذن أنف حنجرة", "أورام", "جلدية",
  "عظام", "مسالك بولية", "قلب", "أنف وأذن", "روماتيزم",
  "أعصاب", "تخدير", "أشعة", "طب الأسرة", "تغذية"
];

export const doctorsData: Doctor[] = Array.from({ length: 20 }, (_, i) => {
  // نوزع 5 مرضى لكل طبيب
  const patients: Patient[] = Array.from({ length: 5 }, (_, j) => {
    const nameIndex = (i * 5 + j) % patientNames.length;
    const name = patientNames[nameIndex];
    const age = 20 + ((i + j) * 3) % 60;
    const condition = conditions[(i + j) % conditions.length];
    const lastVisit = `2026-02-${10 + ((i + j) % 15)}`;
    return { id: i * 10 + j + 1, name, age, condition, lastVisit };
  });

  const appointments: Appointment[] = patients.map((p, k) => ({
    id: i * 10 + k + 1,
    patient: p.name,
    time: `${9 + k}:00`,
    status: ["قادم", "تم", "ملغى"][k % 3] as "قادم" | "تم" | "ملغى",
  }));

  return {
    id: i + 1,
    name: `د. طبيب ${i + 1}`,
    specialty: doctorSpecialties[i % doctorSpecialties.length],
    patients,
    appointments,
  };
});
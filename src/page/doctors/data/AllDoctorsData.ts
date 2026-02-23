// allDoctorsData.ts
export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  department: string; // القسم
  isAvailable: boolean; // هل حاضر اليوم
};

export const doctors: Doctor[] = [
  // قسم الباطنة
  { id: 1, name: "د. أحمد علي", specialty: "باطنة عامة", department: "القسم الباطني", isAvailable: true },
  { id: 2, name: "د. منى فاروق", specialty: "باطنة", department: "القسم الباطني", isAvailable: true },
  
  // قسم الجراحة
  { id: 3, name: "د. سارة محمود", specialty: "جراحة عامة", department: "قسم الجراحة", isAvailable: false },
  { id: 4, name: "د. هشام سعيد", specialty: "جراحة أورام", department: "قسم الجراحة", isAvailable: true },
  
  // قسم الأطفال
  { id: 5, name: "د. ليلى خالد", specialty: "أطفال", department: "قسم الأطفال", isAvailable: false },
  { id: 6, name: "د. نرمين كمال", specialty: "أطفال حديثي الولادة", department: "قسم الأطفال", isAvailable: true },
  
  // قسم الأسنان
  { id: 7, name: "د. كريم حسن", specialty: "أسنان عامة", department: "قسم الأسنان", isAvailable: true },
  { id: 8, name: "د. ريم مصطفى", specialty: "تقويم الأسنان", department: "قسم الأسنان", isAvailable: false },
  
  // قسم النساء والتوليد
  { id: 9, name: "د. هالة محمد", specialty: "نساء وتوليد", department: "قسم النساء والتوليد", isAvailable: true },
  { id: 10, name: "د. مريم سامي", specialty: "أمراض نساء", department: "قسم النساء والتوليد", isAvailable: true },
  
  // قسم القلب
  { id: 11, name: "د. أيمن يوسف", specialty: "أمراض قلب", department: "قسم القلب", isAvailable: false },
  { id: 12, name: "د. نجلاء فتحي", specialty: "جراحة قلب", department: "قسم القلب", isAvailable: true },
  
  // قسم العظام
  { id: 13, name: "د. حسام عبد الله", specialty: "عظام عامة", department: "قسم العظام", isAvailable: true },
  { id: 14, name: "د. سلمى محمود", specialty: "جراحة عظام", department: "قسم العظام", isAvailable: false },
  
  // قسم المخ والأعصاب
  { id: 15, name: "د. تامر حمدي", specialty: "مخ وأعصاب", department: "قسم المخ والأعصاب", isAvailable: true },
  { id: 16, name: "د. لمياء علي", specialty: "جراحة أعصاب", department: "قسم المخ والأعصاب", isAvailable: true },
  
  // قسم الطوارئ
  { id: 17, name: "د. محمد فاروق", specialty: "طوارئ", department: "قسم الطوارئ", isAvailable: true },
  { id: 18, name: "د. رنا سامي", specialty: "طوارئ", department: "قسم الطوارئ", isAvailable: false },
  
  // قسم العيون
  { id: 19, name: "د. هاني محمود", specialty: "عيون", department: "قسم العيون", isAvailable: true },
  { id: 20, name: "د. منال كمال", specialty: "جراحة عيون", department: "قسم العيون", isAvailable: true },
  
  // قسم الجلدية
  { id: 21, name: "د. نادين سمير", specialty: "جلدية", department: "قسم الجلدية", isAvailable: true },
  { id: 22, name: "د. شيماء علي", specialty: "أمراض جلدية", department: "قسم الجلدية", isAvailable: false },
  
  // قسم الأشعة
  { id: 23, name: "د. مصطفى حسن", specialty: "أشعة", department: "قسم الأشعة", isAvailable: true },
  { id: 24, name: "د. سعاد عبد الرحمن", specialty: "أشعة تشخيصية", department: "قسم الأشعة", isAvailable: true },
  
  // قسم المعمل والتحاليل
  { id: 25, name: "د. هاجر سامي", specialty: "تحاليل طبية", department: "قسم التحاليل", isAvailable: true },
  { id: 26, name: "د. علاء الدين", specialty: "تحاليل طبية متقدمة", department: "قسم التحاليل", isAvailable: false },
];
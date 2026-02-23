// footerData.ts

export interface FooterLink {
  name: string;
  link: string;
}

export const hospitals: FooterLink[] = [
  { name: "مستشفى المدينة", link: "/hospital/medina" },
  { name: "مستشفى السلام", link: "/hospital/alsalam" },
  { name: "مستشفى الشفاء", link: "/hospital/alshefa" },
  { name: "مستشفى الرحمة", link: "/hospital/alrahma" },
  { name: "مستشفى النور", link: "/hospital/alnoor" },
  { name: "مستشفى الهدى", link: "/hospital/alhuda" },
  { name: "مستشفى الأمل", link: "/hospital/alamal" },
  { name: "مستشفى الحياة", link: "/hospital/alhayat" },
  { name: "مستشفى الصفاء", link: "/hospital/alsafaa" },
  { name: "مستشفى دار الفؤاد", link: "/hospital/daralfouad" },
  { name: "مستشفى العسكري", link: "/hospital/military" },
  { name: "مستشفى الشرطة", link: "/hospital/police" },
];

export const departments: FooterLink[] = [
  { name: "الطوارئ", link: "/departments/emergency" },
  { name: "الجراحة", link: "/departments/surgery" },
  { name: "طب الأسنان", link: "/departments/dentistry" },
  { name: "المختبرات", link: "/departments/lab" },
  { name: "أمراض القلب", link: "/departments/cardiology" },
  { name: "طب الأطفال", link: "/departments/pediatrics" },
  { name: "الأعصاب", link: "/departments/neurology" },
  { name: "العظام", link: "/departments/orthopedics" },
  { name: "النساء والتوليد", link: "/departments/gynecology" },
  { name: "الأنف والأذن", link: "/departments/ent" },
];

export const quickLinks: FooterLink[] = [
  { name: "الرئيسية", link: "/" },
  { name: "من نحن", link: "/about" },
  { name: "الأطباء", link: "/doctors" },
  { name: "حجز موعد", link: "/appointment" },
  { name: "الطوارئ", link: "/emergency" },
  { name: "تواصل معنا", link: "/contact" },
];
import React, { useEffect, useState } from "react";

type Clinic = {
  id: number;
  name: string;
  specialty: string;
  phone: string;
  hours: string;
  color: string;
};

const clinics: Clinic[] = [
  {
    id: 1,
    name: "مستشفى الرحمة",
    specialty: "باطنة",
    phone: "+201234567890",
    hours: "9am - 5pm",
    color: "bg-sky-900",
  },
  {
    id: 2,
    name: "عيادة الشفاء",
    specialty: "أسنان",
    phone: "+201234567891",
    hours: "10am - 6pm",
    color: "bg-sky-900",
  },
  {
    id: 3,
    name: "مركز القلوب",
    specialty: "قلب",
    phone: "+201234567892",
    hours: "8am - 4pm",
    color: "bg-sky-900",
  },
  {
    id: 4,
    name: "عيادة الأطفال",
    specialty: "أطفال",
    phone: "+201234567893",
    hours: "9am - 3pm",
    color: "bg-sky-900",
  },
  {
    id: 5,
    name: "مركز العيون",
    specialty: "عيون",
    phone: "+201234567894",
    hours: "9am - 5pm",
    color: "bg-sky-900",
  },
  {
    id: 6,
    name: "عيادة الجلدية",
    specialty: "جلدية",
    phone: "+201234567895",
    hours: "9:30am - 5:30pm",
    color: "bg-sky-900",
  },
  {
    id: 7,
    name: "مستشفى النور",
    specialty: "باطنة",
    phone: "+201234567896",
    hours: "8am - 4pm",
    color: "bg-sky-900",
  },
  {
    id: 8,
    name: "عيادة الابتسامة",
    specialty: "أسنان",
    phone: "+201234567897",
    hours: "10am - 6pm",
    color: "bg-sky-900",
  },
  {
    id: 9,
    name: "مركز الشفاء",
    specialty: "قلب",
    phone: "+201234567898",
    hours: "8am - 5pm",
    color: "bg-sky-900",
  },
  {
    id: 10,
    name: "عيادة النجوم",
    specialty: "أطفال",
    phone: "+201234567899",
    hours: "9am - 3pm",
    color: "bg-sky-900",
  },
  {
    id: 11,
    name: "مستشفى الرؤية",
    specialty: "عيون",
    phone: "+201234567900",
    hours: "9am - 5pm",
    color: "bg-sky-900",
  },
  {
    id: 12,
    name: "عيادة الجلد الجميل",
    specialty: "جلدية",
    phone: "+201234567901",
    hours: "9:30am - 5:30pm",
    color: "bg-sky-900",
  },
  {
    id: 13,
    name: "مستشفى الحياة",
    specialty: "باطنة",
    phone: "+201234567902",
    hours: "8am - 4pm",
    color: "bg-sky-900",
  },
  {
    id: 14,
    name: "عيادة الأسنان المشرق",
    specialty: "أسنان",
    phone: "+201234567903",
    hours: "10am - 6pm",
    color: "bg-sky-900",
  },
  {
    id: 15,
    name: "مركز القلوب السعيد",
    specialty: "قلب",
    phone: "+201234567904",
    hours: "8am - 5pm",
    color: "bg-sky-900",
  },
  {
    id: 16,
    name: "عيادة الأطفال الصغيرة",
    specialty: "أطفال",
    phone: "+201234567905",
    hours: "9am - 3pm",
    color: "bg-sky-900",
  },
];

const ClinicsSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">🏥 العيادات</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {clinics.map((clinic, index) => (
          <div
            key={clinic.id}
            className={`
              ${clinic.color} text-white p-5 rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              text-center
            `}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <h3 className="text-lg font-bold mb-2">{clinic.name}</h3>
            <p className="mb-1 font-semibold">التخصص: {clinic.specialty}</p>
            <p className="mb-2 font-semibold">ساعات العمل: {clinic.hours}</p>
            <a
              href={`tel:${clinic.phone}`}
              className="inline-block mt-3 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
            >
              📞 اتصل
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClinicsSection;

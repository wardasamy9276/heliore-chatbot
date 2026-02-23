import { useState } from "react";

type Hospital = {
  id: number;
  name: string;
  nameEn: string;
  city: string;
  phone: string;
  details?: string;
};

const hospitals: Hospital[] = [
  {
    id: 1,
    name: "مستشفى الرحمة",
    nameEn: "Al Rahma Hospital",
    city: "القاهرة",
    phone: "+201234567890",
    details: "أول مستشفى مجهز بتقنيات ذكية للحماية.",
  },
  {
    id: 2,
    name: "مستشفى النيل",
    nameEn: "Al Nile Hospital",
    city: "الإسكندرية",
    phone: "+201234567891",
    details: "خدمة مميزة للمرضى مع متابعة دقيقة.",
  },
  {
    id: 3,
    name: "مستشفى القوات المسلحة",
    nameEn: "Armed Forces Hospital",
    city: "القاهرة",
    phone: "+201234567892",
    details: "أحدث المعدات الطبية وطاقم متخصص.",
  },
];

const AdvancedHospitalSection: React.FC = () => {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 transition"
          >
            {lang === "ar" ? "EN" : "AR"}
          </button>
        </div>

        {/* Hero */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold">
            {lang === "ar" ? "مجمع المستشفيات" : "Hospital Complex"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === "ar"
              ? "استعرض بيانات كل مستشفى بسهولة ووضوح."
              : "Explore details of each hospital easily and clearly."}
          </p>
        </div>

        {/* Hospitals List */}
        <div className="space-y-8">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col md:flex-row"
            >
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {lang === "ar" ? hospital.name : hospital.nameEn}
                </h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">
                    {lang === "ar" ? "المدينة: " : "City: "}
                  </span>
                  {hospital.city}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">
                    {lang === "ar" ? "رقم الهاتف: " : "Phone: "}
                  </span>
                  {hospital.phone}
                </p>
                {hospital.details && (
                  <p className="text-gray-500 mt-2">{hospital.details}</p>
                )}
              </div>
              {/* Optional: Image or Icon for hospital */}
              <div className="md:w-1/3 bg-blue-50 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-6xl">🏥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedHospitalSection;

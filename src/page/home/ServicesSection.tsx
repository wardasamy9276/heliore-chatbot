import {
  FaStethoscope,
  FaHeartbeat,
  FaXRay,
  FaTooth,
  FaBaby,
  FaBrain,
  FaBone,
  FaUserNurse,
  FaSyringe,
  FaHospital,
  FaPrescriptionBottleAlt,
  FaAmbulance,
  FaClinicMedical,
  FaPrescription,
  FaMicroscope,
  FaWheelchair,
  FaCapsules,
  FaFlask,
} from "react-icons/fa";

interface Service {
  title: string;
  desc: string;
  icon: any; // ✅
}

const services: Service[] = [
  {
    title: "الفحص العام",
    icon: <FaStethoscope size={30} className="text-blue-600" />,
    desc: "تقييم شامل للحالة الصحية للمرضى.",
  },
  {
    title: "أمراض القلب",
    icon: <FaHeartbeat size={30} className="text-red-600" />,
    desc: "خدمات متخصصة لتشخيص وعلاج أمراض القلب.",
  },
  {
    title: "الأشعة",
    icon: <FaXRay size={30} className="text-yellow-600" />,
    desc: "أشعة سينية ورنين مغناطيسي عالي الجودة.",
  },
  {
    title: "طب الأسنان",
    icon: <FaTooth size={30} className="text-green-600" />,
    desc: "خدمات الأسنان للأطفال والكبار بأحدث التقنيات.",
  },
  {
    title: "طب الأطفال",
    icon: <FaBaby size={30} className="text-pink-600" />,
    desc: "رعاية صحية شاملة للأطفال من مختلف الأعمار.",
  },
  {
    title: "الأعصاب",
    icon: <FaBrain size={30} className="text-purple-600" />,
    desc: "تشخيص وعلاج الأمراض العصبية المختلفة.",
  },
  {
    title: "العظام",
    icon: <FaBone size={30} className="text-blue-800" />,
    desc: "خدمات متخصصة لإصابات وكسور العظام.",
  },
  {
    title: "التمريض والرعاية",
    icon: <FaUserNurse size={30} className="text-teal-600" />,
    desc: "رعاية متواصلة ودعم صحي على مدار اليوم.",
  },
  {
    title: "الحقن والتطعيمات",
    icon: <FaSyringe size={30} className="text-red-400" />,
    desc: "خدمات تطعيمات وحقن آمنة وفعّالة.",
  },
  {
    title: "خدمات المستشفى",
    icon: <FaHospital size={30} className="text-gray-700" />,
    desc: "خدمات متنوعة داخل المستشفى لجميع التخصصات.",
  },
  {
    title: "الأدوية والوصفات",
    icon: <FaPrescriptionBottleAlt size={30} className="text-orange-600" />,
    desc: "توفير الأدوية والوصفات الطبية بجودة عالية.",
  },
  {
    title: "خدمة الطوارئ",
    icon: <FaAmbulance size={30} className="text-red-600" />,
    desc: "خدمة إسعاف وطوارئ متوفرة على مدار الساعة.",
  },
  {
    title: "علاج الإدمان",
    icon: <FaClinicMedical size={30} className="text-purple-700" />,
    desc: "برامج علاجية متكاملة للتغلب على الإدمان وتأهيل المرضى.",
  },
  // 5 خدمات إضافية
  {
    title: "الوصفات الطبية",
    icon: <FaPrescription size={30} className="text-blue-500" />,
    desc: "إصدار ومتابعة الوصفات الطبية بسهولة.",
  },
  {
    title: "المختبرات الطبية",
    icon: <FaMicroscope size={30} className="text-green-700" />,
    desc: "تحاليل دقيقة لجميع الفحوصات الطبية.",
  },
  {
    title: "خدمات المعاقين",
    icon: <FaWheelchair size={30} className="text-purple-500" />,
    desc: "توفير الدعم الطبي وخدمات مخصصة للمعاقين.",
  },
  {
    title: "الأدوية والمكملات",
    icon: <FaCapsules size={30} className="text-orange-500" />,
    desc: "توفير الأدوية والمكملات الغذائية بجودة عالية.",
  },
  {
    title: "البحوث الطبية",
    icon: <FaFlask size={30} className="text-red-500" />,
    desc: "أبحاث ودراسات طبية حديثة لتطوير العلاج.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-700">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

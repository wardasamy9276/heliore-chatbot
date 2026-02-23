import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface Hospital {
  name: string;
  link: string;
}

interface Department {
  name: string;
  link: string;
}

const hospitals: Hospital[] = [
  { name: "مستشفى المدينة", link: "/hospital/medina" },
  { name: "مستشفى السلام", link: "/hospital/alsalam" },
  { name: "مستشفى الشفاء", link: "/hospital/alshefa" },
  { name: "مستشفى الرحمة", link: "/hospital/alrahma" },
  { name: "مستشفى النور", link: "/hospital/alnoor" },
  { name: "مستشفى الهدى", link: "/hospital/alhuda" },
  { name: "مستشفى الرفاهية", link: "/hospital/alrefahiya" },
  { name: "مستشفى الأمل", link: "/hospital/alamal" },
  { name: "مستشفى الحياة", link: "/hospital/alhayat" },
  { name: "مستشفى الصفاء", link: "/hospital/alsafaa" },
];
const departments: Department[] = [
  { name: "الطوارئ", link: "/departments/emergency" },
  { name: "الجراحة", link: "/departments/surgery" },
  { name: "طب الأسنان", link: "/departments/dentistry" },
  { name: "المختبرات", link: "/departments/lab" },
  { name: "أمراض القلب", link: "/departments/cardiology" },
  { name: "طب الأطفال", link: "/departments/pediatrics" },
  { name: "الأعصاب", link: "/departments/neurology" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* About / Logo */}
        <div className="md:col-span-1">
          <h1 className="text-2xl font-bold text-blue-100 mb-4 space-4 font-normal">
            HealthPoint
          </h1>
          <p className="text-gray-400 leading-relaxed">
            مجمع مستشفيات يقدم خدمات صحية متكاملة بأعلى معايير الجودة.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Hospitals */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">المستشفيات</h3>
          <ul className="space-y-2">
            {hospitals.map((h, idx) => (
              <li key={idx}>
                <Link to={h.link} className="hover:text-blue-500">
                  {h.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">أقسامنا</h3>
          <ul className="space-y-2">
            {departments.map((d, idx) => (
              <li key={idx}>
                <Link to={d.link} className="hover:text-blue-500">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-500">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                معلومات عنا
              </Link>
            </li>
            <li>
              <Link to="/appointment" className="hover:text-blue-500">
                حجز موعد
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">تواصل معنا</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> القاهرة، مصر
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +20 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@healthpoint.com
            </li>
          </ul>

          <h3 className="font-semibold text-lg mt-6 mb-2 text-white">
            اشترك بالنشرة
          </h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full px-3 py-2 rounded-lg text-gray-900 focus:outline-none"
            />
            <Link
              to={"/subscribe"}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg
               hover:bg-blue-700 transition"
            >
              اشترك
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © 2026 HealthPoint. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

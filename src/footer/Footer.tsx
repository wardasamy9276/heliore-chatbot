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

import { hospitals, departments, quickLinks } from "../footer/data/footerdata";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-8">
      <div
        className="container mx-auto px-4 sm:px-6
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10"
      >
        {/* About */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-100 mb-3 sm:mb-4">
            HealthPoint
          </h1>
          <p className="text-gray-400 leading-relaxed text-sm">
            مجمع مستشفيات يقدم خدمات صحية متكاملة بأعلى معايير الجودة والرعاية
            الطبية الحديثة.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4 text-lg">
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
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
            المستشفيات
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
            {hospitals.map((h) => (
              <li key={h.link}>
                <Link
                  to={h.link}
                  className="hover:text-blue-500 block text-center md:text-left"
                >
                  {h.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
            أقسامنا
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
            {departments.map((d) => (
              <li key={d.link}>
                <Link
                  to={d.link}
                  className="hover:text-blue-500 block text-center md:text-left"
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
            روابط سريعة
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((q) => (
              <li key={q.link}>
                <Link
                  to={q.link}
                  className="hover:text-blue-500 block text-center md:text-left"
                >
                  {q.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
            تواصل معنا
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt /> القاهرة، مصر
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt /> +20 123 456 789
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope /> info@healthpoint.com
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-white text-sm">
              اشترك في النشرة البريدية
            </h4>
            <div className="flex flex-col gap-2 items-center md:items-stretch">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
              />
              <Link
                to="/subscribe"
                className="w-full px-4 py-2 bg-blue-600 text-white
                rounded-lg text-center hover:bg-blue-700 transition"
              >
                اشترك
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 border-t border-gray-700 pt-5 sm:pt-6 text-center text-gray-500 text-sm">
        © 2026 HealthPoint. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

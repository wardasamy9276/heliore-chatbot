import { NavLink } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import HospitalSearchBar from "./SearchBar";

const data = [
  { id: 1, name: "الرئيسية", link: "/" },
  { id: 2, name: "وظائف", link: "/jobs" },
  { id: 3, name: "تسجيل الدخول", link: "/login" },
  { id: 4, name: "مدونة", link: "/blog" },
  { id: 5, name: "يتصل", link: "/contact" },
  { id: 6, name: "معلومات عنا", link: "/about" },
];

const hospitalMenu = [
  { id: 1, name: "العيادات", link: "/clinics" },
  { id: 2, name: "الأقسام الطبية", link: "/departments" },
  { id: 3, name: "الأطباء", link: "/doctors" },
  { id: 4, name: "حجز موعد", link: "/appointment" },
  { id: 5, name: "الطوارئ", link: "/emergency" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <HospitalSearchBar />
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {data.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold" // Active ثابت أزرق
                    : "text-gray-900 hover:text-blue-400" // غير Active عند Hover يظهر أزرق فاتح
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Hospital Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-gray-900"
            >
              خدمات المستشفى
              <span className="text-sm">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
              <div className="absolute top-full mt-4 right-0 w-56 bg-white border rounded-[16px] shadow-xl z-50 flex flex-col gap-2">
                {hospitalMenu.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block p-3 text-sm w-full text-center rounded-[8px] bg-blue-600 text-white font-semibold"
                        : "block p-3 text-sm w-full text-center rounded-[8px] text-gray-900 hover:bg-blue-200 hover:text-blue-900"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 border-t pt-4">
          <LanguageSwitcher />

          {data.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-400"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Hospital Menu */}
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-gray-700 font-medium"
            >
              خدمات المستشفى
              <span className="text-sm">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
              <div className="mt-3 ml-4 flex flex-col gap-2">
                {hospitalMenu.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    onClick={() => {
                      setOpen(false);
                      setMobileOpen(false);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600"
                        : "text-gray-900 hover:text-blue-900"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

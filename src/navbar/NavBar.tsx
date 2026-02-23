import { NavLink } from "react-router-dom";
import { useState } from "react";
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Search */}
        <div className="flex-1">
          <HospitalSearchBar />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl font-bold ml-3"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {data.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Desktop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-gray-800 font-medium"
            >
              خدمات المستشفى
              <span className="text-sm">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-white border rounded-xl shadow-lg p-2 flex flex-col gap-1">
                {hospitalMenu.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-sm rounded-md bg-blue-600 text-white text-center font-semibold"
                        : "block py-2 px-3 text-sm rounded-md text-gray-700 text-center hover:bg-blue-100 hover:text-blue-800"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 border-t bg-white">
          <div className="flex flex-col gap-1 mt- text-center">
            {data.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "w-full py-3 px-2 rounded-lg bg-blue-50 text-blue-600 font-semibold"
                    : "w-full py-3 px-2 rounded-lg text-gray-700 hover:bg-gray-100"
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Hospital Dropdown */}
            <div className="mt-2">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-3 px-2 rounded-lg text-gray-800 font-medium hover:bg-gray-100"
              >
                خدمات المستشفى
                <span className="text-sm">{open ? "▲" : "▼"}</span>
              </button>

              {open && (
                <div className="mt-2 flex flex-col gap-1 pl-3 border-l border-gray-200">
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
                          ? "py-2 px-2 rounded-md bg-blue-100 text-blue-700 font-semibold text-sm"
                          : "py-2 px-2 rounded-md text-gray-700 text-sm hover:bg-gray-100"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

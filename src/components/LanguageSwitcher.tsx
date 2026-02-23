import { useState } from "react";

type Language = {
  id: number;
  name: string;
  code: "ar" | "en" | "de";
  flag: string;
};

const languages: Language[] = [
  { id: 1, name: "العربية", code: "ar", flag: "🇪🇬" },
  { id: 2, name: "English", code: "en", flag: "🇬🇧" },
  { id: 3, name: "Deutsch", code: "de", flag: "🇩🇪" },
];

function LanguageSwitcher() {
  const [open, setOpen] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);

  const toggleMenu = (): void => {
    setOpen((prev) => !prev);
  };

  const selectLanguage = (lang: Language): void => {
    setCurrentLang(lang);
    setOpen(false);
    // لاحقًا:
    // i18n.changeLanguage(lang.code);
  };

  return (
    <div className="relative mx-4">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 text-gray-700
         hover:text-blue-600 font-medium"
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <span className="text-xs">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div
          className="absolute top-full left-3 mt-2 w-44
         bg-white border rounded-lg shadow-lg z-50 p-3 "
        >
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => selectLanguage(lang)}
              className="w-full flex items-center gap-2 
              px-4 py-2 text-sm text-gray-700 hover:bg-blue-50
               hover:text-blue-700"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;

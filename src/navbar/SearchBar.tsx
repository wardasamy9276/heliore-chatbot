import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // للتوجيه بين الصفحات

export default function HospitalSearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // للتوجيه للصفحة الجديدة

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
    if (search.trim() !== "") {
      // Redirect لصفحة نتائج البحث الخاصة بالمستشفيات
      navigate(`/hospitals/search?query=${encodeURIComponent(search)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex-1 min-w-[150px] max-w-md w-full relative mx-2"
    >
      <input
        type="text"
        placeholder="ابحث عن مستشفى أو تخصص"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 pl-4 pr-10 rounded-full border
        border-gray-300 focus:outline-none focus:ring-2
        focus:ring-[#1ec1fcaa] text-center"
      />
      {/* Search Icon */}
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        <IoSearchOutline className="w-5 h-5" />
      </button>
    </form>
  );
}

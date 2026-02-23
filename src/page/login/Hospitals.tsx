import { useEffect, useState } from "react";
import { hospitalsData, Hospital } from "../login/data/hospitalsData";
import { AiFillDelete } from "react-icons/ai";
const cardColors = ["bg-blue-200 text-blue-700 text-center"];

const Hospitals = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [newHospital, setNewHospital] = useState({
    name: "",
    city: "",
    phone: "",
  });

  useEffect(() => {
    setHospitals(hospitalsData);
  }, []);

  const handleAdd = () => {
    if (!newHospital.name || !newHospital.city || !newHospital.phone)
      return alert("املئي كل الحقول");

    const nextId = hospitals.length
      ? Math.max(...hospitals.map((h) => h.id)) + 1
      : 1;
    const added: Hospital = { id: nextId, ...newHospital };
    setHospitals([...hospitals, added]);
    setNewHospital({ name: "", city: "", phone: "" });
  };

  const handleDelete = (id: number) => {
    setHospitals(hospitals.filter((h) => h.id !== id));
  };

  return (
    <div className="p-8">
      {/* Add Hospital */}
      <div className="p-6" dir="rtl">
        {/* العنوان الرئيسي */}
        <h1 className="text-4xl font-bold mb-2 text-center">
          كل مستشفياتنا تحت إشرافنا
        </h1>
        {/* العنوان الفرعي */}
        <p className="text-center text-gray-600 mb-6">
          تصفح كل المستشفيات المتاحة وأضف أو احذف حسب الحاجة
        </p>

        {/* باقي الكومبوننت */}
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        <input
          placeholder="اسم المستشفى"
          value={newHospital.name}
          onChange={(e) =>
            setNewHospital({ ...newHospital, name: e.target.value })
          }
          className="border p-2 rounded flex-1 min-w-[150px]"
        />
        <input
          placeholder="المدينة"
          value={newHospital.city}
          onChange={(e) =>
            setNewHospital({ ...newHospital, city: e.target.value })
          }
          className="border p-2 rounded flex-1 min-w-[150px]"
        />
        <input
          placeholder="الهاتف +2..."
          value={newHospital.phone}
          onChange={(e) =>
            setNewHospital({ ...newHospital, phone: e.target.value })
          }
          className="border p-2 rounded flex-1 min-w-[150px]"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          أضف مستشفى
        </button>
      </div>

      {/* Hospitals Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-6"
      >
        {hospitals.map((h, index) => (
          <div
            key={h.id}
            className={`relative rounded-xl shadow p-4 ${cardColors[index % cardColors.length]}`}
          >
            {/* Delete Icon */}
            <button
              onClick={() => handleDelete(h.id)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-700"
              title="حذف المستشفى"
            >
              <AiFillDelete size={22} />
            </button>

            <h3 className="font-bold text-lg mb-1">{h.name}</h3>
            <p className="text-sm mb-1">{h.city}</p>
            <p className="text-sm">{h.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;

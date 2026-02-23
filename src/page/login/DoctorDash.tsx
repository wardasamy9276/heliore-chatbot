import { useState } from "react";

/* ============ TYPES ============ */
type Patient = {
  id: number;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
};

/* ============ DATA ============ */
const patients: Patient[] = Array.from({ length: 27 }, (_, i) => ({
  id: i + 1,
  name: `مريض رقم ${i + 1}`,
  age: 20 + (i % 30),
  condition: i % 2 === 0 ? "متابعة" : "كشف جديد",
  lastVisit: "20/2/2026",
}));

/* ============ COMPONENT ============ */
const DoctorDashboard = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(patients.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPatients = patients.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">👥 المرضى</h1>

      {/* TABLE */}
      <div className="bg-white rounded-2xl p-6 shadow border">
        <table className="w-full text-right">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">الاسم</th>
              <th>العمر</th>
              <th>الحالة</th>
              <th>آخر زيارة</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((p) => (
              <tr key={p.id} className="border-b last:border-0">
                <td className="py-3 font-medium">{p.name}</td>
                <td>{p.age}</td>
                <td>{p.condition}</td>
                <td>{p.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            السابق
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page ? "bg-blue-600 text-white" : "border"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

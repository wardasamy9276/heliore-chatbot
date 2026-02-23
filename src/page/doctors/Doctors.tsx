// DoctorsComplexSection.tsx
import React from "react";
import { doctors, Doctor } from "./data/AllDoctorsData";

const DoctorsComplexSection: any = () => {
  // جروب حسب القسم
  const departments = Array.from(new Set(doctors.map((doc) => doc.department)));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">مجمع الأطباء</h1>

      {departments.map((dept) => {
        const deptDoctors = doctors.filter((doc) => doc.department === dept);
        const availableCount = deptDoctors.filter((d) => d.isAvailable).length;

        return (
          <div key={dept} className="mb-8 p-4 border rounded-lg bg-gray-50">
            <h2 className="text-2xl font-semibold mb-2">{dept}</h2>
            <p>
              إجمالي الأطباء: {deptDoctors.length} | الحاضرين: {availableCount}
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {deptDoctors.map((doc: Doctor) => (
                <div
                  key={doc.id}
                  className={`p-4 rounded-lg shadow ${
                    doc.isAvailable ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{doc.name}</h3>
                  <p>التخصص: {doc.specialty}</p>
                  <p>الحالة: {doc.isAvailable ? "حاضر" : "غائب"}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorsComplexSection;

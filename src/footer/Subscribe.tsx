// import { useState } from "react";
// import DoctorForm from "./DoctorForm";
// import PatientForm from "./PatientForm";

// interface Footer {}
// const Subscribe = () => {
//   const [type, setType] = useState(null);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         {!type && (
//           <>
//             <h1 className="text-2xl font-bold text-center mb-6">
//               اختر نوع الحساب
//             </h1>

//             <div className="flex gap-4">
//               <button
//                 onClick={() => setType("doctor")}
//                 className="w-1/2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
//               >
//                 طبيب
//               </button>

//               <button
//                 onClick={() => setType("patient")}
//                 className="w-1/2 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
//               >
//                 مريض
//               </button>
//             </div>
//           </>
//         )}

//         {type === "doctor" && <DoctorForm />}
//         {type === "patient" && <PatientForm />}
//       </div>
//     </div>
//   );
// };

// export default Subscribe;

import { useState } from "react";
import DoctorForm from "./DoctorForm";
import PatientForm from "./PatientForm";

type UserType = "doctor" | "patient";

const Subscribe = () => {
  const [type, setType] = useState<UserType | null>(null);

  return (
    <div
      className="min-h-screen  flex items-center 
    justify-center bg-gray-100"
    >
      <div
        className="bg-white p-8 rounded-2xl
       shadow-lg w-full max-w-md flex flex-col "
      >
        {!type && (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">
              اختر نوع الحساب
            </h1>

            <div className="flex gap-4">
              <button
                onClick={() => setType("doctor")}
                className="w-1/2 bg-blue-400 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
                طبيب
              </button>

              <button
                onClick={() => setType("patient")}
                className="w-1/2 bg-green-400 text-white py-3 rounded-xl hover:bg-green-700 transition"
              >
                مريض
              </button>
            </div>
          </>
        )}

        {type === "doctor" && <DoctorForm />}
        {type === "patient" && <PatientForm />}
      </div>
    </div>
  );
};

export default Subscribe;

// import React, { useState } from "react";
// import { handleCall } from "../../apiCalls"; // تأكدي المسار صح

// const CallForm: React.FC = () => {
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const onCall = async () => {
//     if (!phone) {
//       alert("من فضلك أدخلي رقم المريض");
//       return;
//     }

//     // تحقق من الصيغة الدولية
//     const phoneRegex = /^\+\d{10,15}$/;
//     if (!phoneRegex.test(phone)) {
//       alert("من فضلك أدخلي رقم صحيح بالصيغة الدولية +1XXXXXXXXXX");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");
//       const result = await handleCall(phone); // افترض أن handleCall async
//       setMessage(result?.message || "تم الاتصال بالمريض بنجاح!");
//     } catch (err: any) {
//       console.error(err);
//       setMessage(err?.message || "حدث خطأ أثناء الاتصال");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center m-4">
//       <div className="bg-blue-100 w-full max-w-sm h-[300px] rounded-2xl flex items-center justify-center">
//         <div className="flex flex-col gap-6 w-64">
//           <input
//             type="tel"
//             placeholder="أدخل رقم المريض بالصيغة الدولية +1XXXXXXXXXX"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={onCall}
//             disabled={loading}
//             className={`px-4 py-2 rounded text-white ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "جارٍ الاتصال..." : "اتصل بالمريض"}
//           </button>
//           {message && (
//             <p className="text-center text-sm text-gray-700">{message}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallForm;
import React, { useState } from "react";
import { handleCall } from "../../apiCalls"; // تأكدي المسار صح

const CallForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onCall = async () => {
    if (!phone) {
      alert("من فضلك أدخلي رقم المريض");
      return;
    }

    // تحقق من الصيغة الدولية
    const phoneRegex = /^\+\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      alert("من فضلك أدخلي رقم صحيح بالصيغة الدولية +1XXXXXXXXXX");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // استدعاء handleCall (تدعم async و non-async)
      const result = handleCall(phone);
      if (result instanceof Promise) {
        await result;
      }

      setMessage("تم الاتصال بالمريض بنجاح!");
    } catch (err: any) {
      console.error(err);
      setMessage(err?.message || "حدث خطأ أثناء الاتصال");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-blue-100 w-full max-w-sm h-[300px] rounded-2xl flex items-center justify-center shadow-md">
        <div className="flex flex-col gap-6 w-64">
          <input
            type="tel"
            maxLength={16}
            placeholder="أدخل رقم المريض بالصيغة الدولية +1XXXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={onCall}
            disabled={loading}
            className={`px-4 py-2 rounded text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {loading ? "جارٍ الاتصال..." : "اتصل بالمريض"}
          </button>
          {message && (
            <p className="text-center text-sm text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallForm;

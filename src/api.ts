// export const API_URL = "http://localhost:3000"; // رابط الباك أثناء التطوير

// export const handleCall = async (patientNumber: string) => {
//   try {
//     const res = await fetch(`${API_URL}/voice`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ patientNumber }),
//     });

//     const data = await res.json();
//     alert(data.message);
//   } catch (err) {
//     console.error(err);
//     alert("حدث خطأ أثناء الاتصال بالباك");
//   }
// };
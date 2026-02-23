export const getHospitals = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/hospitals");
    if (!res.ok) throw new Error("فشل جلب المستشفيات");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addHospital = async (hospital: {
  name: string;
  city: string;
  phone: string;
  image?: string;
}) => {
  try {
    const res = await fetch("http://localhost:5000/api/hospitals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hospital),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const callPatient = async (phone: string) => {
  try {
    const res = await fetch("http://localhost:5000/api/call/voice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientNumber: phone }),
    });
    const data = await res.json();
    alert(data.message);
  } catch (error) {
    console.error(error);
    alert("حدث خطأ أثناء الاتصال");
  }
};

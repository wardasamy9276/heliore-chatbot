import React, { useState } from "react";

/* ================= TYPES ================= */
type Doctor = {
  id: number;
  name: string;
  email: string;
  specialty: string;
  password: string;
};

/* ================= COMPONENT ================= */
const DoctorSignUp: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    specialty: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("كلمة المرور غير متطابقة");
      return;
    }
    const newDoctor: Doctor = {
      id: doctors.length + 1,
      name: form.name,
      email: form.email,
      specialty: form.specialty,
      password: form.password,
    };
    setDoctors([...doctors, newDoctor]);
    setForm({
      name: "",
      email: "",
      specialty: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
    alert(`تم تسجيل الدكتور ${newDoctor.name} بنجاح!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">تسجيل طبيب جديد</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">الاسم الكامل</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">التخصص</label>
            <input
              type="text"
              name="specialty"
              value={form.specialty}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">كلمة المرور</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">تأكيد كلمة المرور</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            تسجيل
          </button>
        </form>

        {doctors.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">الدكاترة المسجلين:</h2>
            <ul className="space-y-1 text-gray-700">
              {doctors.map((doc) => (
                <li key={doc.id}>
                  {doc.name} - {doc.specialty} - {doc.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorSignUp;

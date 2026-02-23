import React, { useState } from "react";

type Booking = {
  patientName: string;
  doctor: string;
  date: string;
  time: string;
};

const doctors = ["د. أحمد", "د. مريم", "د. خالد"];

const VoiceBooking: React.FC = () => {
  const [booking, setBooking] = useState<Booking>({
    patientName: "",
    doctor: doctors[0],
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reply = `مرحبًا ${booking.patientName}, تم حجز موعدك مع ${booking.doctor} يوم ${booking.date} الساعة ${booking.time}.`;
    setMessage(reply);

    // تحويل النص لصوت
    const speech = new SpeechSynthesisUtterance(reply);
    speech.lang = "ar-EG";
    speech.rate = 1; // سرعة الصوت
    speech.pitch = 1; // درجة الصوت
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">حجز موعد</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="patientName"
          placeholder="اسم المريض"
          value={booking.patientName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="doctor"
          value={booking.doctor}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          {doctors.map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="time"
          name="time"
          value={booking.time}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          احجز
        </button>
      </form>

      {message && (
        <p className="mt-4 text-green-700 font-semibold">{message}</p>
      )}
    </div>
  );
};

export default VoiceBooking;

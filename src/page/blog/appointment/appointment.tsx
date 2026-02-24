import React from "react";

type BookingOption = {
  id: number;
  title: string;
  description: string;
  action: string; // إما رابط tel أو رابط لمكان الحجز
};

const bookingOptions: BookingOption[] = [
  {
    id: 1,
    title: "الحجز بالتليفون",
    description: "اتصل بنا مباشرة لحجز موعد مع العيادة.",
    action: "tel:+201234567890",
  },
  {
    id: 2,
    title: "الحجز بالحضور",
    description: "قم بزيارة العيادة وحجز موعدك مباشرة من الاستقبال.",
    action: "#in-person", // يمكنك ربطه بمكان في الصفحة أو صفحة جديدة
  },
];

const BookingSection: React.FC = () => {
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">الحجز</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {bookingOptions.map((option) => (
          <div
            key={option.id}
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <a
              href={option.action}
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {option.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingSection;

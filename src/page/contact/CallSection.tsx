const SecureCallSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Icon */}
        <div className="text-5xl mb-6">🔐</div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          اتصال آمن لحماية بياناتك
        </h2>

        {/* Description */}
        <p className="text-blue-100 mb-8 text-lg">
          نوفر اتصالًا ذكيًا يعتمد على التحقق بالبصمة وتشفير البيانات لضمان
          الخصوصية الكاملة أثناء التواصل.
        </p>

        {/* Call Button */}
        <button
          onClick={() => alert("بدء اتصال آمن")}
          className="bg-white text-blue-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-100 transition shadow-lg"
        >
          📞 بدء اتصال آمن
        </button>

        {/* Privacy Note */}
        <p className="mt-6 text-sm text-blue-200">
          🔒 لا يتم تسجيل المكالمات إلا بعد موافقة المستخدم
        </p>
      </div>
    </section>
  );
};

export default SecureCallSection;

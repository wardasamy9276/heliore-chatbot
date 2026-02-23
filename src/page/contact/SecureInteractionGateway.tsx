const SecureInteractionGateway = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            بوابة التفاعل الآمن
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            إطار ذكي ينظم التفاعل بين المستخدم والنظام مع ضمان التحقق الكامل من
            الهوية وحماية البيانات.
          </p>
        </div>

        {/* Flow */}
        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-700" />

          {/* Step 1 */}
          <div className="relative bg-gray-800 p-8 rounded-2xl">
            <span className="absolute -top-4 left-4 text-xs bg-gray-700 px-3 py-1 rounded-full">
              Step 01
            </span>
            <h3 className="text-xl font-semibold mb-3">توثيق الهوية</h3>
            <p className="text-gray-400 text-sm">
              يبدأ التفاعل فقط بعد التحقق البيومتري من هوية المستخدم.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-gray-800 p-8 rounded-2xl">
            <span className="absolute -top-4 left-4 text-xs bg-gray-700 px-3 py-1 rounded-full">
              Step 02
            </span>
            <h3 className="text-xl font-semibold mb-3">قناة مشفّرة</h3>
            <p className="text-gray-400 text-sm">
              يتم إنشاء قناة اتصال مؤقتة ومشفّرة بالكامل.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-gray-800 p-8 rounded-2xl">
            <span className="absolute -top-4 left-4 text-xs bg-gray-700 px-3 py-1 rounded-full">
              Step 03
            </span>
            <h3 className="text-xl font-semibold mb-3">تفاعل ذكي</h3>
            <p className="text-gray-400 text-sm">
              تنفيذ الرد الذكي دون تخزين بيانات أو تدخل بشري.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-14 text-sm text-gray-500">
          مصمم ليتوافق مع أعلى معايير أمن المعلومات والخصوصية
        </div>
      </div>
    </section>
  );
};

export default SecureInteractionGateway;

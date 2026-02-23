const PatientForm = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center">تسجيل حساب مريض</h2>

      <form className="space-y-3  flex flex-col justify-center gap-4">
        <input type="text" placeholder="الاسم الكامل" className="input" />
        <input type="number" placeholder="العمر" className="input" />
        <input type="tel" placeholder="رقم الهاتف" className="input" />
        <input type="email" placeholder="البريد الإلكتروني" className="input" />
        <input type="password" placeholder="كلمة المرور" className="input" />

        <button className="w-full bg-green-600 text-white py-2 rounded-lg">
          إنشاء الحساب
        </button>
      </form>
    </>
  );
};
export default PatientForm;

const DoctorForm = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center">تسجيل حساب طبيب</h2>

      <form className="space-y-3  flex flex-col justify-center gap-4 ">
        <input type="text" placeholder="الاسم الكامل" className="input" />
        <input type="text" placeholder="التخصص" className="input" />
        <input type="text" placeholder="رقم الترخيص" className="input" />
        <input type="email" placeholder="البريد الإلكتروني" className="input" />
        <input type="password" placeholder="كلمة المرور" className="input" />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          إنشاء الحساب
        </button>
      </form>
    </>
  );
};
export default DoctorForm;

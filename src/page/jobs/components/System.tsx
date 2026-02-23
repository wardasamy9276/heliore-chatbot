import { systemSections } from "../data/systemData";

interface SystemSection {
  title: string;
  items: string[];
}

const System: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            النظام والإدارة
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            لوحة تحكم شاملة لإدارة النظام، المستخدمين، الصلاحيات، ووكلاء الذكاء
            الاصطناعي داخل المنصة.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {(systemSections as SystemSection[]).map((section, index) => (
            <section
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>

              <ul className="space-y-2 text-gray-600">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default System;

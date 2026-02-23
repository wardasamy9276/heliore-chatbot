import { tasksSections } from "../data/tasksSections";

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 ">
      <div className="mx-auto max-w-6xl text-center">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            المهام والإنتاجية
          </h1>
          <p className="text-gray-600 max-w-3xl">
            إدارة ذكية للمهام تساعد الفرق على التنظيم، تحديد الأولويات، وتتبع
            التقدم بكفاءة عالية
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasksSections.map((section, index) => (
            <section
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>

              <ul className="space-y-2 text-gray-600">
                {section.items.map((item, i) => (
                  <li className="text-right" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;

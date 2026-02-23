import { integrationSections } from "../jobs/data/integrationSections";

const Integration = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            التكيف والتكامل
          </h1>
          <p className="text-gray-600 max-w-3xl">
            تكامل كامل مع API و Webhooks لتوسيع وظائف المنصة وربطها بأنظمة
            خارجية بسهولة.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrationSections.map((section, index) => (
            <section
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {section.title}
              </h2>

              <ul className="space-y-2 text-gray-600 text-right">
                {section.items.map((item, i) => (
                  <li className="" key={i}>
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

export default Integration;

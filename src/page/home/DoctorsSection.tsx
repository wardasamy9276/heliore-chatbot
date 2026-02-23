import drSami from "../../assets/imgs/fotos-1CFqScR6LGA-unsplash.jpg";

import drLeila from "../../assets/imgs/fotos-nZ6uyHfWeDI-unsplash.jpg";

import drKarim from "../../assets/imgs/fotos-ZQFw3C77DDc-unsplash.jpg";

import drHala from "../../assets/imgs/fotos-nZ6uyHfWeDI-unsplash.jpg";

import drYoussef from "../../assets/imgs/fotos-1CFqScR6LGA-unsplash.jpg";
import drSalma from "../../assets/imgs/pexels-gustavo-fring-4173251.jpg";
import drKhaled from "../../assets/imgs/fotos-1CFqScR6LGA-unsplash.jpg";
import drMona from "../../assets/imgs/pexels-gustavo-fring-4173251.jpg";

import drAdel from "../../assets/imgs/fotos-7_C6mLL-H8s-unsplash.jpg";
import drAmr from "../../assets/imgs/fotos-ZQFw3C77DDc-unsplash.jpg";
import drNaglaa from "../../assets/imgs/fotos-nZ6uyHfWeDI-unsplash.jpg";
import drNoha from "../../assets/imgs/pexels-gustavo-fring-4173251.jpg";

import drHany from "../../assets/imgs/pexels-klaus-nielsen-6303775.jpg";
import drReem from "../../assets/imgs/pexels-shkrabaanthony-6749773.jpg";
import drAhmedNabil from "../../assets/imgs/fotos-ZQFw3C77DDc-unsplash.jpg";
import drSara from "../../assets/imgs/pexels-shkrabaanthony-6749773.jpg";

function DoctorsSection() {
  const doctors = [
    { name: "د. سامي حسين", specialty: "جراحة عامة", img: drSami },
    { name: "د. ليلى علي", specialty: "طب أسنان", img: drLeila },
    { name: "د. كريم فاروق", specialty: "أمراض قلب", img: drKarim },
    { name: "د. هالة محمود", specialty: "أطفال", img: drHala },

    { name: "د. يوسف عادل", specialty: "الأعصاب", img: drYoussef },
    { name: "د. سلمى خالد", specialty: "النساء والتوليد", img: drSalma },
    { name: "د. خالد مصطفى", specialty: "العظام", img: drKhaled },
    { name: "د. منى حسن", specialty: "الباطنة", img: drMona },
    { name: "د. عادل شريف", specialty: "العيون", img: drAdel },
    { name: "د. نجلاء فؤاد", specialty: "الجلدية", img: drNaglaa },
    { name: "د. عمرو سامي", specialty: "الأنف والأذن والحنجرة", img: drAmr },
    { name: "د. نهى عادل", specialty: "الطب النفسي", img: drNoha },
    { name: "د. هاني مصطفى", specialty: "الأشعة", img: drHany },
    { name: "د. ريم علي", specialty: "العلاج الطبيعي", img: drReem },
    { name: "د. أحمد نبيل", specialty: "الأورام", img: drAhmedNabil },
    { name: "د. سارة حسين", specialty: "التغذية العلاجية", img: drSara },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">أطباؤنا</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {doc.name}
              </h3>
              <p className="text-gray-600">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;

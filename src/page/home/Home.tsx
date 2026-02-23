import FeaturesSection from "./FeaturesSection";
import HeroSection from "../home/HeroSection";
import DepartmentsSection from "./DepartmentsSection";
import DoctorsSection from "./DoctorsSection";
import TestimonialsSection from "./TestimonialsSection";
import ServicesSection from "./ServicesSection";

import CallCenterSection from "./CallCenterSection";
import CallFlowSection from "./CallFlowSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DepartmentsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <ServicesSection />
      <CallCenterSection />
      <CallFlowSection />
      {/* <AppointmentCTASection /> */}
    </div>
  );
}

export default Home;

import FeaturesDetails from "../../page/login/featuresDetails";

import Dashboard from "../../page/login/Dashboard";
import DoctorDash from "./DoctorDash";
import DoctorDashboard from "./DoctorDashboard";
import DoctorSignUp from "./DoctorSignUp";
import DoctorsData from "./DoctorsData";
import ChatBot from "./ChatBot";
import Doctors from "./Doctors";
import CallButton from "./CallButton";
import Hospitals from "./Hospitals";
// import CallButton from "./CallButton";
function login() {
  return (
    <div>
      <FeaturesDetails />
      <Hospitals />
      <CallButton />

      <Doctors />

      <ChatBot />
      <Dashboard />
      <DoctorsData />
      <DoctorDash />
      <DoctorDashboard />
      <DoctorSignUp />
    </div>
  );
}

export default login;

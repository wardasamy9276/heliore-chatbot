import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Jobs from "./page/jobs/Jobs";
import CallPage from "./page/jobs/components/EmailPage";
import CrmPage from "./page/jobs/components/CrmPage";
import EmailPage from "./page/jobs/components/EmailPage";
import CalendarSection from "./page/jobs/components/Calendar";
import SocialMediaSection from "./page/jobs/components/social";
import SystemSection from "./page/jobs/components/System";
import UIPage from "./page/jobs/components/UIPage";
import Tasks from "./page/jobs/components/Tasks";
import Integration from "./page/jobs/Integration";
import Recording from "./page/jobs/Recording";
import Login from "./page/login/Login";
import Subscribe from "./footer/Subscribe";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import Blog from "./page/blog/Blog";
// import Clinics from "./page/";
import Department from "./page/department/Department";
import Doctors from "./page/doctors/Doctors";
// import Appointment from "./page/";
import Emergency from "./page/emergency/Emergency";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/clinics" element={<Clinics />} /> */}
        <Route path="/departments" element={<Department />} />
        <Route path="/doctors" element={<Doctors />} />
        {/* <Route path="/appointment" element={<Appointment />} /> */}
        <Route path="/emergency" element={<Emergency />} />

        <Route path="/calls" element={<CallPage />} />
        <Route path="/crmPage" element={<CrmPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/calendar" element={<CalendarSection />} />
        <Route path="/social" element={<SocialMediaSection />} />
        <Route path="/system" element={<SystemSection />} />
        <Route path="/ui" element={<UIPage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/recording" element={<Recording />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import React from "react"; // لازم عشان JSX
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // إضافة الـ BrowserRouter

import App from "./App";
import Navbar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/pioneerse_schoo">
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);

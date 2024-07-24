// import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { Navbar, Footer } from "./components";
import {
  Headline,
  Features,
  Portfolio,
  Resume,
  Testimonial,
  Clients,
  Pricing,
  Contact,
} from "./layouts";

export default function App() {
  return (
    <>
      <div className="font-marko-one">
        <Navbar />
        <div className="">
          <Headline />
          <Features />
          <Portfolio />
          <Resume />
          <Testimonial />
          <Clients />
          <Pricing />
          <Contact />
        </div>
        {/* <Routes>
        <Route path="#" element={<Headline />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes> */}
        <Footer />
      </div>
    </>
  );
}

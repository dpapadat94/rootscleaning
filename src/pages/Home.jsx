import { Link } from "react-router-dom";
import rootslogo from "../assets/rootslogo.png";
import ServicesPreview from "../components/ServicesPreview.jsx";
import OurMission from "../components/Ourmission.jsx";
import ServiceArea from "../components/ServiceArea.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <>
      {/* HERO SECTION (green) */}
      <section className="relative bg-[#a3c585] min-h-[100vh] md:min-h-[60vh]">
        {/* Centered logo + text */}
        <div className="flex flex-col items-center justify-center text-center px-4 pt-8 min-h-[100vh] md:min-h-[60vh]">
          <img
            src={rootslogo}
            alt="Roots Cleaning Logo"
            className="h-40 w-auto mb-6"
          />
          <h1 className="text-xl sm:text-2xl text-gray-900">
            All natural cleaning, better for all.
          </h1>
        </div>

        {/* CTA bar inside the green section */}
        <div className="absolute bottom-2 pb-4 left-0 right-0">
          <div className="mx-auto w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Link
              to="/services"
              className="inline-block px-16 py-2 rounded-xl bg-[#FFD8F0] text-black text-xl hover:bg-pink-300 transition-colors"
            >
              Book Your Cleaning
            </Link>
          </div>
        </div>
      </section>

      <ServicesPreview />
      <OurMission />
      <Testimonials />
      <ServiceArea />
    </>
  );
}

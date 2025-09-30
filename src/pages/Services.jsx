import React, { useState } from "react";
import { PiCheckLight, PiMapPinLight, PiClockLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import bannerServices from "../assets/bannerservices.png";
import rootslogo from "../assets/rootslogo.png";

const SERVICE_LISTS = {
  residential: [
    "residential service 1",
    "residential service 2",
    "residential service 3",
    "residential service 4",
    "residential service 5",
  ],
  commercial: [
    "commercial service 1",
    "commercial service 2",
    "commercial service 3",
    "commercial service 4",
    "commercial service 5",
  ],
  construction: [
    "Construction service 1",
    "Construction service 2",
    "Construction service 3",
    "Construction service 4",
    "Construction service 5",
  ],
};

const PACKAGES = {
  residential: [
    {
      name: "Residental Package 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere augue id rhoncus pulvinar. Aliquam ut neque vitae dolor sollicitudin pulvinar. Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      name: "Residential Package 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis velit vel eleifend cursus. Vivamus aliquam lacus sed fringilla eleifend, neque arcu interdum dolor, non tincidunt neque lorem id orci.",
    },
  ],
  commercial: [
    {
      name: "Commercial Package 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue erat sit amet convallis porta, metus erat bibendum arcu, quis efficitur lorem neque vitae leo.",
    },
    {
      name: "Commercial Package 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat id nisl faucibus rutrum. Nunc cursus lorem vel accumsan iaculis, purus arcu vulputate ex, a blandit velit mauris non mi.",
    },
  ],
  construction: [
    {
      name: "Construction Package 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus congue libero id placerat finibus, justo justo dictum justo, non sodales nibh nisl non dui.",
    },
    {
      name: "Construction Package 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet magna in ipsum euismod feugiat. Vivamus aliquam lacus sed fringilla eleifend, neque arcu interdum dolor, non tincidunt neque lorem id orci.",
    },
  ],
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("residential");

  return (
    <section className="bg-gray-50">
      {/* HERO (image with overlay + title) */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerServices})` }}
      >
        <div className="bg-black/40">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 md:py-14">
            <h1 className="text-3xl md:text-5xl font-semibold text-white">
              Individual Services
            </h1>
          </div>
        </div>
      </div>

      {/* INDIVIDUAL SERVICES – two-column like organizing page */}
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* LEFT: services lists */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 uppercase mb-4">
              Explore our individual services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900">
              {Object.entries(SERVICE_LISTS).map(([key, services]) => (
                <div key={key}>
                  <h3 className="text-xl font-semibold mb-4 capitalize">
                    {key.replace("-", " ")}
                  </h3>
                  <ul className="space-y-2">
                    {services.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <PiCheckLight className="mt-1 text-xl text-[#a3c585]" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA under the lists (optional, mirrors your previous design) */}
            <div className="mt-6"></div>
          </div>

          {/* RIGHT: info card with Book Now button (instead of phone box) */}
          <aside className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <img
                src={rootslogo}
                alt="Roots Cleaning Logo"
                className="h-20 w-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900">
                Roots Cleaning
              </h3>

              <div className="mt-6 w-full space-y-3 text-gray-700">
                <div className="flex items-center justify-center gap-3">
                  <PiMapPinLight className="text-2xl text-[#a3c585]" />
                  <span>Charlotte, NC 28226</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <PiClockLight className="text-2xl text-[#a3c585]" />
                  <span>Mon–Fri 08:00 AM — 05:00 PM</span>
                </div>
              </div>

              <div className="mt-6 w-full">
                <Link
                  to="/booking"
                  className="block rounded-2xl border-2 border-[#a3c585] px-6 py-4 text-center font-semibold text-gray-900 shadow-sm hover:bg-[#f6fbf2] transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* PACKAGES (unchanged) */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-center text-gray-900 mb-6 sm:mb-8">
            Packages
          </h2>

          {/* Category Switcher */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {Object.keys(PACKAGES).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                  activeCategory === cat
                    ? "bg-[#a3c585] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Packages Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {PACKAGES[activeCategory].map((pkg) => (
              <div
                key={pkg.name}
                className="p-4 sm:p-6 rounded-xl border border-gray-200 bg-white"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-700 whitespace-normal break-words">
                  {pkg.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Global CTA Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Link
              to="/booking"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 rounded-lg bg-[#a3c585] text-black font-medium hover:bg-pink-300 transition-colors"
            >
              Book Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

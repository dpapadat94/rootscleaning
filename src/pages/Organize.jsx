import React from "react";
import { Link } from "react-router-dom";
import { PiMapPinLight, PiClockLight, PiPhoneLight } from "react-icons/pi";
import rootslogo from "../assets/rootslogo.png";
import bannerServices from "../assets/bannerservices.png";

export default function OrganizingServices() {
  return (
    <>
      {/* HERO – full width image with subtle overlay */}
      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerServices})` }}
      >
        <div className="bg-black/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
            <h1 className="text-3xl md:text-5xl font-semibold text-white">
              Organizing & Decluttering Services
            </h1>
          </div>
        </div>
      </section>

      {/* MAIN – two column layout */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left: copy + CTA */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 uppercase mb-4">
              Contact us today to schedule an organizing service or learn more.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere, augue id rhoncus pulvinar, nisl sapien pulvinar enim, in
              pulvinar nunc tortor id nisi. Aliquam ut neque vitae dolor
              sollicitudin pulvinar. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Aenean
              consequat, libero a commodo pulvinar, nibh mi bibendum leo, ac
              fringilla metus nisl eu lorem.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Quisque efficitur, justo in feugiat volutpat, leo elit faucibus
              neque, vitae posuere massa ligula eu neque. Donec vitae massa
              condimentum, dictum massa eu, dictum velit. Tellus sit amet
              aliquet orci, non pharetra nibh. Curabitur feugiat, arcu at
              convallis euismod, lacus lacus viverra mi, a tincidunt urna mauris
              a arcu.
            </p>

            <Link
              to="/booking"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-[#a3c585] text-black font-medium hover:bg-[#94b879] transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Right: info card with logo + details */}
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
                <a
                  href="tel:5551234567"
                  className="block rounded-2xl border-2 border-[#a3c585] px-6 py-4 text-center font-semibold text-gray-900 shadow-sm hover:bg-[#f6fbf2] transition"
                >
                  <span className="inline-flex items-center gap-2">
                    <PiPhoneLight className="text-xl text-[#a3c585]" />
                    (555) 123-4567
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

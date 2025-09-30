import React from "react";

export default function OurMission() {
  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="w-full bg-[#a3c585] py-12">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-white">
          We Are 100% Organic
        </h2>
      </div>

      {/* Mission + Vision */}
      <div className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { PiCheckLight } from "react-icons/pi";
import mapImg from "../assets/map.png";

const NC_CITIES = [
  "Mint Hill",
  "Matthews",
  "Huntersville",
  "Mount Holly",
  "Indian Trail",
  "Pineville",
  "Concord",
  "Harrisburg",
  "Belmont",
  "Cornelius",
  "Kannapolis",
  "Gastonia",
  "Mooresville",
];

export default function ServiceArea() {
  // Split cities into two roughly equal halves
  const mid = Math.ceil(NC_CITIES.length / 2);
  const firstHalf = NC_CITIES.slice(0, mid);
  const secondHalf = NC_CITIES.slice(mid);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-10">
          Our Service Area
        </h2>

        {/* Card: left list / right map */}
        <div className="rounded-2xl bg-white p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: Cities list split into two columns */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                North Carolina
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Column 1 */}
                <ul className="space-y-3">
                  {firstHalf.map((city) => (
                    <li key={city} className="flex items-start gap-3">
                      <PiCheckLight className="mt-1 text-xl text-sky-300" />
                      <span className="text-gray-800">{city}</span>
                    </li>
                  ))}
                </ul>

                {/* Column 2 */}
                <ul className="space-y-3">
                  {secondHalf.map((city) => (
                    <li key={city} className="flex items-start gap-3">
                      <PiCheckLight className="mt-1 text-xl text-sky-300" />
                      <span className="text-gray-800">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Map image */}
            <div className="w-full">
              <img
                src={mapImg}
                alt="Service area map"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

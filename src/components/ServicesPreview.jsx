import { useState } from "react";
import { Link } from "react-router-dom";
import { PiSprayBottleLight } from "react-icons/pi"; // 👈 import the icon
import homeclean from "../assets/homeclean.png";

const services = [
  {
    key: "residential",
    title: "Residential Cleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    key: "commercial",
    title: "Commercial Cleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    key: "post-construction",
    title: "Post-Construction Clean",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    key: "organization",
    title: "Organization & Decluttering",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
];

export default function ServicesPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-2xl bg-white transition">
          {/* Responsive top list: stacked on small, horizontal on md+ */}
          <div
            role="tablist"
            aria-label="Services"
            className="
              flex flex-col md:flex-row
              divide-y md:divide-y-0 md:divide-x divide-gray-200
            "
          >
            {services.map(({ title }, i) => {
              const selected = i === active;
              return (
                <button
                  key={title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={`w-full md:flex-1 px-5 py-4 text-left md:text-center text-md transition
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#a3c585]
                    ${
                      selected
                        ? "bg-[#fbfcfb] text-lg flex items-center justify-between md:justify-center gap-2"
                        : "hover:bg-gray-50 text-gray-700"
                    }
                  `}
                >
                  {selected && (
                    <PiSprayBottleLight className="text-xl text-[#a3c585]" />
                  )}
                  {title}
                </button>
              );
            })}
          </div>

          {/* Bottom: detail content with image left + text right (already responsive) */}
          <div className="p-6 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image on left / top on mobile */}
              <div className="flex justify-center">
                <img
                  src={homeclean}
                  alt={`${services[active].title} illustration`}
                  className="max-h-64 object-cover"
                />
              </div>

              {/* Text content */}
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <h3 className="text-3xl font-semibold text-gray-900">
                  {services[active].title}
                </h3>
                <p className="mt-3 text-gray-600 max-w-xl">
                  {services[active].desc}
                </p>
                <Link
                  to={`/services#${services[active].key}`}
                  className="mt-7 inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-[#a3c585] font-medium hover:text-black transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

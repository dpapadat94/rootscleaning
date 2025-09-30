import React from "react";
import rootslogo from "../assets/rootslogo.png";

export default function About() {
  return (
    <>
      {/* HERO (shorter, just logo) */}
      <section className="relative bg-[#a3c585] min-h-[25vh] sm:min-h-[30vh]">
        <div className="flex flex-col items-center justify-center text-center px-4 min-h-[25vh] sm:min-h-[30vh]">
          <img
            src={rootslogo}
            alt="Roots Cleaning Logo"
            className="h-24 sm:h-28 w-auto"
          />
        </div>
      </section>

      {/* MAIN COPY BLOCK */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto w-full max-w-6xl px-6">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-12">
            About Roots Cleaning
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left column */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                beatae
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                beatae, pariatur illum, accusantium voluptatum odio asperiores
                numquam repellat, impedit iusto odit. Iusto quia, quasi ipsa
                perspiciatis repellat, cum voluptatum laborum. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Laborum, itaque.
              </p>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                dictum, augue a semper tristique, elit arcu dictum massa, vitae
                congue augue odio nec lectus. Integer vitae mauris non nibh
                sagittis aliquam. Nullam sed eros a eros faucibus mattis. Duis
                volutpat, odio at posuere tempus, lacus arcu mollis lorem, sit
                amet vestibulum enim odio vel justo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Curabitur eget risus id libero interdum consectetur. Vivamus
                pharetra, justo vitae tristique interdum, leo metus malesuada
                lacus, eu euismod lorem mi at nibh. Integer nec mollis ipsum.
                Donec pulvinar, purus a congue fermentum, lacus augue eleifend
                tellus, at condimentum arcu nunc id libero. Cras sit amet
                aliquet orci, non pharetra nibh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

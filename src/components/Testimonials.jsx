import React, { useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Alex R.",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat sapien non arcu feugiat, ac imperdiet lacus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
  },
  {
    name: "Morgan S.",
    blurb:
      "Nunc pulvinar, sapien non gravida posuere, ligula neque pretium sem, non pharetra erat turpis vel magna. Sed facilisis lorem vitae velit suscipit, in luctus lorem euismod.",
  },
  {
    name: "Taylor P.",
    blurb:
      "Mauris luctus, augue at dictum cursus, urna arcu elementum mi, sit amet tempus leo lacus in risus. Curabitur tincidunt, velit in varius blandit, justo mi volutpat quam, sed dictum nibh eros et nibh.",
  },
  {
    name: "Jordan K.",
    blurb:
      "Proin porta, mi eget lacinia consequat, nisl justo euismod lorem, id gravida odio sem sit amet felis. Integer a mi dui. Aenean dapibus leo et dolor interdum, et efficitur arcu viverra.",
  },
  {
    name: "Sam D.",
    blurb:
      "Vivamus quis urna nec velit feugiat dapibus. Pellentesque fermentum, odio id tincidunt iaculis, risus magna condimentum nisi, et commodo justo lectus eget quam.",
  },
  {
    name: "Riley H.",
    blurb:
      "Etiam a mauris at sapien bibendum euismod. Cras sit amet libero vitae tortor aliquet porttitor. Donec at arcu sodales, venenatis erat non, cursus ipsum.",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollByAmount = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.round(el.clientWidth * 0.9),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#a3c585] py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">
            What our customers say
          </h2>

          {/* Arrow buttons (desktop/tablet) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll testimonials left"
              onClick={() => scrollByAmount(-1)}
              className="rounded-lg bg-white/80 hover:bg-white px-3 py-2 text-gray-800 shadow-sm"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Scroll testimonials right"
              onClick={() => scrollByAmount(1)}
              className="rounded-lg bg-white/80 hover:bg-white px-3 py-2 text-gray-800 shadow-sm"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          role="region"
          aria-label="Testimonials carousel"
          style={{ scrollPaddingInline: "1.25rem" }} // match px-5 below
          className="
            flex gap-5 overflow-x-auto overflow-y-visible scroll-smooth
            snap-x snap-mandatory px-5 pb-2
          "
        >
          {/* optional leading spacer so first card isn't flush-left */}
          <div className="shrink-0 w-0 sm:w-0" />

          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="
                snap-start shrink-0
                min-w-[90%] sm:min-w-[70%] md:min-w-[52%] lg:min-w-[40%]
                max-w-[90vw]
                bg-white rounded-2xl p-6 shadow-md
              "
            >
              <div className="text-4xl leading-none">“</div>
              <p className="mt-2 text-gray-700 whitespace-normal break-words leading-relaxed">
                {t.blurb}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#a3c585] text-black grid place-items-center font-semibold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">Happy Customer</p>
                </div>
              </div>
            </article>
          ))}

          {/* trailing spacer so last card can fully scroll into view */}
          <div className="shrink-0 w-5 sm:w-6 md:w-8" />
        </div>

        {/* Mobile arrows */}
        <div className="mt-6 flex md:hidden justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            className="rounded-lg bg-white/80 hover:bg-white px-4 py-2 text-gray-800 shadow-sm"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            className="rounded-lg bg-white/80 hover:bg-white px-4 py-2 text-gray-800 shadow-sm"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

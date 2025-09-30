import React, { useState } from "react";
import rootslogo from "../assets/rootslogo.png";

export default function Contact() {
  const [status, setStatus] = useState({ ok: false, error: "" });

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    // Honeypot
    if (form.company.value) {
      setStatus({ ok: false, error: "Spam detected." });
      return;
    }

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      subject: form.subject.value.trim(),
      serviceType: form.serviceType.value,
      message: form.message.value.trim(),
      date: form.date.value,
      time: form.time.value,
    };

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      setStatus({ ok: false, error: "Please fill name, email, and message." });
      return;
    }

    // TODO: replace with API call (fetch/axios)
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })

    // Simulate success
    setStatus({ ok: true, error: "" });
    form.reset();
  }

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#a3c585] min-h-[25vh] sm:min-h-[30vh]">
        <div className="flex flex-col items-center justify-center text-center px-4 min-h-[25vh] sm:min-h-[30vh]">
          <img
            src={rootslogo}
            alt="Roots Cleaning Logo"
            className="h-24 w-auto"
          />
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto w-full max-w-4xl px-6">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 mb-10">
            Contact Us
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm"
            noValidate
          >
            {/* Status messages */}
            <div aria-live="polite" className="mb-4">
              {status.error && (
                <p className="text-sm text-red-600">{status.error}</p>
              )}
              {status.ok && (
                <p className="text-sm text-green-700">
                  Thanks! Your message has been sent. We’ll get back to you
                  soon.
                </p>
              )}
            </div>

            {/* Honeypot (hidden) */}
            <label className="sr-only" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#a3c585] focus:ring-[#a3c585]"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#a3c585] focus:ring-[#a3c585]"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#a3c585] focus:ring-[#a3c585]"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#a3c585] focus:ring-[#a3c585]"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#a3c585] focus:ring-[#a3c585]"
                  defaultValue="residential"
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="construction">Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#a3c585] focus:ring-[#a3c585]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Preferred Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#a3c585] focus:ring-[#a3c585]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-[#a3c585] focus:ring-[#a3c585]"
                  placeholder="Tell us about your space, timing, and any priorities."
                  required
                />
              </div>

              <div className="sm:col-span-2 flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#a3c585] focus:ring-[#a3c585]"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  You may contact me about scheduling and service details.
                </label>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Prefer to talk? Call us at{" "}
                <a href="tel:5551234567" className="underline">
                  {" "}
                  (555) 123-4567
                </a>
              </p>
              <button
                type="submit"
                className="inline-block px-8 py-3 rounded-lg bg-[#FFD8F0] text-black font-medium hover:bg-pink-300 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

import { FaInstagram } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-[#FFD8F0] text-sm">
      <div className="mx-auto w-full max-w-6xl px-4 h-9 flex items-center justify-between">
        <p className="text-gray-700">Call Us: 555-555-5555</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-700 hover:text-green-700"
        >
          <FaInstagram className="text-lg" />
          Instagram
        </a>
      </div>
    </div>
  );
}

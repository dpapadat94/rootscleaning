import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-8 flex flex-col gap-6">
        {/* Top section: Contact + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <div className="text-sm text-gray-600 space-y-2 text-center sm:text-left">
            <p>📞 (555) 123-4567</p>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaInstagram className="text-pink-400" />
              <Link to="/" className="hover:text-gray-700">
                Instagram
              </Link>
            </div>
          </div>

          {/* CTA text + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-gray-800 font-medium text-center sm:text-left">
              Get started with Roots Cleaning today
            </p>
            <Link
              to="/services"
              className="inline-block px-6 py-2 rounded-lg bg-[#FFD8F0] text-black font-medium hover:bg-pink-300 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Bottom section: Nav links + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-500">
            <Link to="/about" className="hover:text-gray-700">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-700">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-gray-700">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gray-700">
              Terms
            </Link>
          </div>

          <p className="text-sm text-gray-500 text-center sm:text-right">
            © {new Date().getFullYear()} Roots Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

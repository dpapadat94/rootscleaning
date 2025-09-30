import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className=" text-center">
      <h2 className="text-3xl font-bold text-green-700">Page not found</h2>
      <p className="mt-2 text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-3 rounded-xl border border-green-600 text-green-700 hover:bg-green-50"
      >
        Back to Home
      </Link>
    </section>
  );
}

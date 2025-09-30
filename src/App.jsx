// src/App.jsx
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <Header />
      {/* Top padding = topbar (36px) + header (64px) ≈ 100px */}
      <main className="pt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <img className="w-15" src="./logo.png" alt="logo" />
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-stone-600">
              Inicio
            </a>
          </li>
          <li>
            <a href="/productos" className="text-stone-600">
              Productos
            </a>
          </li>
          <li>
            <a href="/registrarse" className="text-stone-600">
              Registrarse
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

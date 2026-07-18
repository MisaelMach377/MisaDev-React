// components/Header.jsx
import { useState, useEffect } from "react";
import { LayoutGrid, Cpu, Mail, Menu, X } from "lucide-react";
import { LinkedinIcon } from "./icons/BrandIcons";
import logo from "../assets/LogoMisael-MachDev-Sinfondo.png";

const navLinks = [
  { href: "#projects", label: "Proyectos", icon: LayoutGrid },
  { href: "#skills", label: "Stack", icon: Cpu },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["projects", "skills", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <a
          href="#"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <img src={logo} alt="MachDev Logo" width={140} />
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className={`relative flex items-center gap-2 pb-1 text-base font-medium transition-colors ${
                  activeSection === href
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                <Icon size={18} /> {label}
                {activeSection === href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-base font-medium transition-colors ${
                activeSection === "#contact"
                  ? "border-cyan-400 text-cyan-400 bg-cyan-400/10"
                  : "border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              <Mail size={16} /> Contacto
            </a>
          </li>

          <li className="w-px h-6 bg-slate-700" />

          <li className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/misael-machiavello-561a33371/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-4 px-4 pb-6 bg-slate-950/95 text-lg">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="flex items-center gap-2 text-slate-300"
              >
                <Icon size={20} /> {label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center gap-2 text-slate-300"
            >
              <Mail size={20} /> Contacto
            </a>
          </li>

          <li className="flex items-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/misael-machiavello-561a33371/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400"
            >
              <LinkedinIcon size={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

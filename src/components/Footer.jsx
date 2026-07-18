// components/Footer.jsx
import { Send, MessageCircle } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "./icons/BrandIcons";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative max-w-6xl mx-auto px-4 py-20 overflow-hidden"
    >
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="grid lg:grid-cols-12 gap-6 items-center p-8 md:p-12">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-3">
              <MessageCircle size={16} /> Hablemos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tienes un proyecto{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                en mente?
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Estoy disponible para colaborar en proyectos web, sistemas
              empresariales y soluciones digitales.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <a
              href="mailto:misael.machiavello.dev@hotmail.com"
              className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all"
            >
              <Send size={18} /> Enviar correo
            </a>
          </div>
        </div>

        <hr className="border-slate-800" />

        <div className="grid md:grid-cols-2 gap-4 items-center p-8 md:p-12 pt-6">
          <div className="flex justify-center md:justify-start gap-3">
            <a
              href="https://linkedin.com/in/misael-machiavello-561a33371/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all"
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href="https://www.instagram.com/machiavellodev/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all"
            >
              <InstagramIcon size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              Full-Stack Developer · Perú
            </p>
            <p className="text-slate-500 text-sm">© 2026 MisaDev</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

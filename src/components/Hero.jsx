import { useState, useEffect } from "react";
import {
  Zap,
  LayoutGrid,
  MessageCircle,
  Code2,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  const fullText = "código real.";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-full px-4 py-1 text-sm mb-6">
            <Zap size={14} /> Misael Machiavello - Full-Stack Developer - Perú
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Transformando ideas en <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Desarrollo aplicaciones web modernas, sistemas empresariales y
            plataformas digitales escalables utilizando tecnologías modernas y
            buenas prácticas de arquitectura de software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all"
            >
              <LayoutGrid size={18} /> Ver Proyectos
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-slate-500 hover:border-white hover:scale-105 text-white font-bold px-8 py-3 rounded-lg transition-all"
            >
              <MessageCircle size={18} /> Hablemos
            </a>
          </div>
        </div>

        <div className="relative hidden lg:flex flex-1 justify-center">
          <div className="absolute w-56 h-56 bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 rounded-full blur-2xl" />
          <div className="relative w-48 h-48 rounded-2xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center text-cyan-400 animate-float">
            <Code2 size={72} />
          </div>
        </div>
      </div>

      <a
        href="#skills"
        className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}

import { useState } from "react";
import { Images, Globe } from "lucide-react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-1">
        Proyectos Destacados
      </h2>
      <p className="text-slate-400 mb-10">
        Soluciones que he construido recientemente.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.key}
            className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden flex flex-col"
          >
            <div
              className={`h-56 ${p.thumbnailBg || "bg-white"} flex items-center justify-center overflow-hidden`}
            >
              <img
                src={p.thumbnail}
                alt={p.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wide">
                  {p.category}
                </span>
                {p.badge && (
                  <span className="text-slate-400 text-xs">{p.badge}</span>
                )}
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-cyan-400/40 text-cyan-300 rounded-md px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {p.gallery?.length > 0 && (
                  <button
                    onClick={() => setActiveProject(p)}
                    className="flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-400 text-white text-sm font-semibold rounded-lg py-2 transition-colors"
                  >
                    <Images size={16} /> Ver Galería
                  </button>
                )}

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 text-sm font-bold rounded-lg py-2 transition-colors"
                  >
                    <Globe size={16} /> Ver sitio web
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

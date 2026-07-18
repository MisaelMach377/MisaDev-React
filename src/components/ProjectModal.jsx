import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const next = () =>
    setIndex((i) => (project ? (i + 1) % project.gallery.length : 0));
  const prev = () =>
    setIndex((i) =>
      project ? (i - 1 + project.gallery.length) % project.gallery.length : 0,
    );

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
          <div>
            <h4 className="text-white font-bold text-lg">{project.title}</h4>
            {project.category && (
              <p className="text-slate-400 text-sm">{project.category}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.gallery.length > 1 && (
              <span className="text-slate-400 text-sm font-mono">
                {index + 1} / {project.gallery.length}
              </span>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="relative bg-black">
          <img
            key={index}
            src={project.gallery[index]}
            alt={`${project.title} ${index + 1}`}
            className="w-full max-h-[65vh] object-contain animate-fadeIn"
          />

          {project.gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {project.gallery.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto bg-slate-900">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                  i === index
                    ? "border-cyan-400"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

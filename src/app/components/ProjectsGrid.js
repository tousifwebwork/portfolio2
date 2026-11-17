"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuGlobe, LuCloud, LuPalette, LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { glass, chip } from "@/app/components/ui";

const ICONS = { Web: LuGlobe, Cloud: LuCloud, Design: LuPalette };

export default function ProjectsGrid({ projects }) {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              active === c
                ? "border-[#6d4aff] bg-[#6d4aff] text-white"
                : "border-violet-500/30 bg-white/4 text-[#b9b6e6] hover:border-[#6d4aff] hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => {
            const Icon = ICONS[p.category] || LuGlobe;
            return (
              <motion.li
                key={p.slug}
                id={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`${glass} group flex scroll-mt-28 flex-col overflow-hidden transition-colors duration-300 hover:border-[#6d4aff]`}
              >
                <div className="relative grid aspect-video place-items-center bg-linear-to-brrom-[#6d4aff]/35 to-[#0d0d3a]">
                  {/* Swap for a real screenshot: <Image src={p.image} fill alt="" className="object-cover" /> */}
                  <Icon size={44} className="text-white/70 transition duration-300 group-hover:scale-110" aria-hidden />
                  {p.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#6d4aff] px-3 py-1 text-xs font-medium text-white">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-[#a99bff]">{p.category}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-[#b9b6e6]">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className={chip}>{t}</li>
                    ))}
                  </ul>
                  {(p.github || p.live) && (
                    <div className="mt-6 flex gap-5 border-t border-violet-500/20 pt-4 text-sm">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#b9b6e6] transition hover:text-white">
                          <FaGithub aria-hidden /> Code
                          <span className="sr-only"> for {p.title}</span>
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#b9b6e6] transition hover:text-white">
                          <LuExternalLink aria-hidden /> Live demo
                          <span className="sr-only"> of {p.title}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
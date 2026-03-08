import React from "react";
import { motion } from "framer-motion";
import BackgroundGradient from "../components/ui/background-gradient";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";

export function StunningProjectCard({ pr }) {
  return (
    <div className="w-full sm:w-[32rem]">
      <BackgroundGradient className="rounded-[22px] p-1 bg-[var(--bg-primary)] dark:bg-zinc-900 overflow-hidden">
        <div className="relative group p-6 rounded-[20px] bg-[var(--bg-primary)] dark:bg-zinc-900">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-xl border border-[var(--glass-border)] mb-6 aspect-video">
            <img
              src={pr.img}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={pr.title}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href={pr.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110"
              >
                <IconExternalLink size={24} />
              </a>
              <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110">
                <IconBrandGithub size={24} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-cyan-500 transition-colors">
                {pr.title}
              </h3>
            </div>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {pr.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {pr.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)]">
              <a
                href={pr.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-cyan-500 flex items-center gap-2 group/link"
              >
                Explore Case Study
                <motion.span className="group-hover/link:translate-x-1 transition-transform">
                  →
                </motion.span>
              </a>
              <div className="flex items-center -space-x-3">
                {/* Decorative placeholders for tech stack icons or team members */}
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[var(--bg-primary)] bg-gradient-to-br from-cyan-500 to-violet-600 opacity-20"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}

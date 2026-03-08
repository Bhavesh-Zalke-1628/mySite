import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function ThreeDCardDemo({ pr }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="glass-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] w-full sm:w-[30rem] h-auto rounded-2xl p-6 transition-all duration-300">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-[var(--text-primary)] tracking-tight"
        >
          {pr.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[var(--text-secondary)] text-sm max-w-sm mt-3 leading-relaxed"
        >
          {pr.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-6">
          <a
            href={pr.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl border border-[var(--glass-border)]">
              <img
                src={pr.img}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                alt={pr.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/60 to-transparent"></div>
            </div>
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href={pr.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-bold hover:opacity-90 transition-all shadow-lg"
          >
            Live Demo
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 group/btn"
          >
            Source Code{" "}
            <span className="group-hover/btn:translate-x-1 transition-transform">
              →
            </span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

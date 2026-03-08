import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../utils/cn"; // Adjust this path to match your project structure

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] max-w-full relative rounded-2xl border flex-shrink-0 glass-card px-8 py-6 md:w-[400px] hover:border-cyan-500/30 transition-all duration-300"
            key={idx}
          >
            <blockquote className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[var(--text-primary)]/5 border border-[var(--glass-border)] text-cyan-500">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[var(--text-primary)] leading-tight">
                    {item.name}
                  </span>
                  <span className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-widest leading-none mt-1">
                    {item.category}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] italic">
                "{item.description}"
              </p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

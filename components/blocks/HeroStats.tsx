"use client";

import { useEffect, useState } from "react";
import { heroStats } from "@/lib/content";
import LinkedInIcon from "@/components/icons/LinkedInIcon"; // you already have this
import clsx from "clsx";

export default function HeroStats() {
  const [rollIndex, setRollIndex] = useState(0);

  // toggle Projects 17 <-> 9 like your "I'm a" chip
  useEffect(() => {
    const id = setInterval(() => {
      setRollIndex((i) => (i === 0 ? 1 : 0));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {heroStats.map((s) => {
        const isProjects = s.id === "projects";
        const value = isProjects && Array.isArray(s.rolling) ? s.rolling[rollIndex] : s.value;

        // golden glow only when Projects shows "9"
        const projectsGlow =
          isProjects && value === "9"
            ? "text-yellow-400 drop-shadow-[0_0_14px_rgba(250,204,21,0.45)]"
            : "";

        return (
          <div key={s.id} className="flex flex-col items-center">
            {/* Label row above the box (with LinkedIn icon for that tile) */}
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              {s.id === "linkedin" ? (
                <>
                  <LinkedInIcon className="h-4 w-4" />
                  <span>{s.label}</span>
                </>
              ) : (
                <span>{s.label}</span>
              )}
            </div>

            {/* Glassy number box */}
            <div
              className={clsx(
                "w-full rounded-2xl border bg-card/50 backdrop-blur-xl",
                "border-white/10 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_20px_rgba(0,0,0,0.25)]",
                "px-6 py-5 text-center"
              )}
            >
              <div
                className={clsx(
                  "text-2xl sm:text-3xl font-semibold tracking-tight transition-all duration-500",
                  projectsGlow
                )}
              >
                {value}
              </div>

              {/* Optional tiny hint under projects to make the toggle obvious */}
              {isProjects ? (
                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {rollIndex === 0 ? "Total" : "Featured"}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

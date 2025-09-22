"use client";

import { useEffect, useState } from "react";
import { heroStats } from "@/lib/content";

function LinkedInMark(props: React.SVGProps<SVGSVGElement>) {
  // Simple inline LinkedIn logo (no external icon lib required)
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9v15H.5v-15zM8.5 8.5h4.7v2.1h.1c.7-1.3 2.5-2.7 5.1-2.7 5.5 0 6.5 3.6 6.5 8.3v7.3h-4.9v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.4v6.5H8.5v-15z"/>
    </svg>
  );
}

export default function HeroStats() {
  const [rollIndex, setRollIndex] = useState(0);

  // Toggle Projects 17 <-> 9 like your "I'm a" chip
  useEffect(() => {
    const id = setInterval(() => setRollIndex((i) => (i ? 0 : 1)), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {heroStats.map((s) => {
        const isProjects = s.id === "projects";
        const value = isProjects && Array.isArray(s.rolling) ? s.rolling[rollIndex] : s.value;

        const glow =
          isProjects && value === "9"
            ? "text-yellow-400 drop-shadow-[0_0_14px_rgba(250,204,21,0.45)]"
            : "";

        return (
          <div key={s.id} className="flex flex-col items-center">
            {/* Title ABOVE the box */}
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              {s.id === "linkedin" && <LinkedInMark className="h-4 w-4" />}
              <span>{s.label}</span>
            </div>

            {/* Glassy number box */}
            <div
              className={[
                "w-full rounded-2xl border bg-card/50 backdrop-blur-xl",
                "border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_20px_rgba(0,0,0,0.25)]",
                "px-6 py-5 text-center",
              ].join(" ")}
            >
              <div
                className={[
                  "text-2xl sm:text-3xl font-semibold tracking-tight transition-all duration-500",
                  glow,
                ].join(" ")}
              >
                {value}
              </div>

              {/* tiny hint under projects so the toggle makes sense */}
              {isProjects && (
                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {rollIndex === 0 ? "Total" : "Featured"}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

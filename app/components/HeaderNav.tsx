"use client";

import React from "react";
import { ShieldCheck, PhoneCall, Zap, BookOpen, Sparkles } from "lucide-react";

interface HeaderNavProps {
  onJumpToScript: () => void;
  onJumpToObjections: () => void;
  onJumpToTips: () => void;
  activeCount: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onJumpToScript,
  onJumpToObjections,
  onJumpToTips,
  activeCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Campaign */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 to-lime-600 text-slate-950 shadow-lg shadow-lime-500/20">
            <ShieldCheck className="h-6 w-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400">
                Outbound Campaign Cockpit
              </span>
              <span className="inline-flex items-center rounded-full bg-lime-400/10 px-2 py-0.5 text-[10px] font-semibold text-lime-300 ring-1 ring-inset ring-lime-400/30">
                Live Dialing
              </span>
            </div>
            <h1 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              Vehicle Services Group{" "}
              <span className="text-slate-400 font-medium text-sm sm:inline hidden">
                — Extended Warranty Guide
              </span>
            </h1>
          </div>
        </div>

        {/* Quick Jump Buttons */}
        <nav className="flex items-center gap-2 sm:gap-3" aria-label="Main Navigation">
          <button
            onClick={onJumpToScript}
            className="group flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-all hover:border-lime-500/50 hover:bg-slate-800 hover:text-white"
            title="Jump to Opening Script"
          >
            <PhoneCall className="h-3.5 w-3.5 text-lime-400 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Opening Script</span>
            <span className="sm:hidden">Script</span>
          </button>

          <button
            onClick={onJumpToObjections}
            className="group flex items-center gap-1.5 rounded-lg border border-lime-500/30 bg-lime-500/10 px-3 py-1.5 text-xs font-semibold text-lime-300 transition-all hover:border-lime-400 hover:bg-lime-500/20"
            title="Jump to Objections & Rebuttals Matrix"
          >
            <Zap className="h-3.5 w-3.5 text-lime-400 transition-transform group-hover:scale-110" />
            <span>Rebuttals Matrix</span>
            <span className="ml-1 rounded-full bg-lime-400 px-1.5 py-0.2 text-[10px] font-bold text-slate-950">
              {activeCount}
            </span>
          </button>

          <button
            onClick={onJumpToTips}
            className="group hidden md:flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white"
            title="Call Center Best Practices"
          >
            <BookOpen className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:scale-110" />
            <span>Agent Tips</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

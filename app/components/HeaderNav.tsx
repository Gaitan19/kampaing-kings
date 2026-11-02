"use client";

import React from "react";
import { ShieldCheck, PhoneCall, Zap, BookOpen } from "lucide-react";

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
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Campaign */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-lime-500 to-lime-600 text-slate-950 shadow-md shadow-lime-500/20">
            <ShieldCheck className="h-6 w-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-lime-700">
                Outbound Campaign Cockpit
              </span>
              <span className="inline-flex items-center rounded-full bg-lime-100 px-2 py-0.5 text-[10px] font-bold text-lime-800 border border-lime-300">
                Live Dialing
              </span>
            </div>
            <h1 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
              Vehicle Services Group{" "}
              <span className="text-slate-500 font-semibold text-sm sm:inline hidden">
                — Extended Warranty Guide
              </span>
            </h1>
          </div>
        </div>

        {/* Quick Jump Navigation Buttons */}
        <nav className="flex items-center gap-2 sm:gap-3" aria-label="Main Navigation">
          <button
            onClick={onJumpToScript}
            className="group flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition-all hover:border-red-400 hover:bg-red-50 hover:text-red-700 shadow-2xs"
            title="Jump to Opening Script"
          >
            <PhoneCall className="h-3.5 w-3.5 text-red-600 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Opening Script</span>
            <span className="sm:hidden">Script</span>
          </button>

          <button
            onClick={onJumpToObjections}
            className="group flex items-center gap-1.5 rounded-lg border border-lime-500/40 bg-lime-50 px-3 py-1.5 text-xs font-bold text-lime-800 transition-all hover:border-lime-500 hover:bg-lime-100 shadow-2xs"
            title="Jump to Objections & Rebuttals Matrix"
          >
            <Zap className="h-3.5 w-3.5 text-lime-600 transition-transform group-hover:scale-110" />
            <span>Rebuttals Matrix</span>
            <span className="ml-1 rounded-full bg-lime-500 px-1.5 py-0.2 text-[10px] font-black text-slate-950">
              {activeCount}
            </span>
          </button>

          <button
            onClick={onJumpToTips}
            className="group hidden md:flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-100 shadow-2xs"
            title="Call Center Best Practices"
          >
            <BookOpen className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:scale-110" />
            <span>Agent Tips</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

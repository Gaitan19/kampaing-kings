"use client";

import React from "react";
import { ShieldCheck, Zap, Menu, X } from "lucide-react";

interface HeaderNavProps {
  onToggleMobileSidebar?: () => void;
  isMobileSidebarOpen?: boolean;
  totalRebuttals: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onToggleMobileSidebar,
  isMobileSidebarOpen,
  totalRebuttals,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-2xs">
      <div className="w-full flex items-center justify-between px-2.5 sm:px-4 py-1.5 sm:py-2">
        {/* Brand & Campaign */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Mobile hamburger button to toggle sidebar */}
          <button
            onClick={onToggleMobileSidebar}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 lg:hidden"
            title="Toggle Rebuttals Menu"
            aria-label="Toggle Rebuttals Menu"
          >
            {isMobileSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gradient-to-br from-lime-500 to-lime-600 text-slate-950 shadow-xs">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
          </div>

          <div>
            <h1 className="text-xs sm:text-sm font-black tracking-tight text-slate-900 leading-none">
              Vehicle Services Group{" "}
              <span className="text-slate-500 font-semibold text-xs sm:inline hidden">
                — Extended Warranty Script &amp; Rebuttals
              </span>
            </h1>
          </div>
        </div>

        {/* Right side status badge */}
        <div className="flex items-center gap-2">
          {/* Mobile button to open Rebuttals */}
          <button
            onClick={onToggleMobileSidebar}
            className="flex items-center gap-1 rounded-lg border border-lime-500 bg-lime-50 px-2 py-1 text-xs font-black text-lime-900 hover:bg-lime-100 lg:hidden shadow-2xs"
          >
            <Zap className="h-3 w-3 text-lime-600" />
            <span>Rebuttals ({totalRebuttals})</span>
          </button>

          <div className="hidden lg:flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 border border-slate-200 text-xs font-bold text-slate-700">
            <Zap className="h-3.5 w-3.5 text-lime-600" />
            <span>{totalRebuttals} Battlecard Rebuttals</span>
          </div>
        </div>
      </div>
    </header>
  );
};

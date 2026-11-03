"use client";

import React from "react";
import { Zap } from "lucide-react";

interface RebuttalsNavbarProps {
  activeCategory: string;
  onSelectCategory: (categoryKey: string) => void;
  totalCount: number;
  filteredCount: number;
}

export const RebuttalsNavbar: React.FC<RebuttalsNavbarProps> = ({
  activeCategory,
  onSelectCategory,
  totalCount,
  filteredCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950 border-b border-slate-800 shadow-md select-none shrink-0">
      <div className="w-full px-3 sm:px-4 py-2 lg:py-2.5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
        {/* Left: Rebuttals Quick Menu Brand */}
        <div className="flex items-center justify-between md:justify-start gap-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-lime-400 text-slate-950 shadow-xs">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 fill-slate-950 stroke-[2.5]" />
            </div>
            <h1 className="font-black text-xs sm:text-sm tracking-wide text-white uppercase whitespace-nowrap">
              Rebuttals Quick Menu
            </h1>
          </div>

          {/* Mobile-only counter badge */}
          <span className="md:hidden rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-black text-lime-400 border border-slate-800">
            {filteredCount} Total
          </span>
        </div>

        {/* Center: Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px] font-bold">
          <button
            type="button"
            onClick={() => onSelectCategory("all")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border cursor-pointer ${
              activeCategory === "all"
                ? "bg-lime-500 text-slate-950 border-lime-400 shadow-2xs font-black"
                : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white"
            }`}
          >
            All ({totalCount})
          </button>

          <button
            type="button"
            onClick={() => onSelectCategory("top6")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border cursor-pointer ${
              activeCategory === "top6"
                ? "bg-amber-500 text-slate-950 border-amber-400 shadow-2xs font-black"
                : "bg-slate-900 text-amber-300 border-slate-800 hover:bg-slate-800"
            }`}
          >
            Most Frequent 🔥
          </button>

          <button
            type="button"
            onClick={() => onSelectCategory("vehicle")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border cursor-pointer ${
              activeCategory === "vehicle"
                ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-2xs font-black"
                : "bg-slate-900 text-emerald-300 border-slate-800 hover:bg-slate-800"
            }`}
          >
            Vehicle
          </button>

          <button
            type="button"
            onClick={() => onSelectCategory("trust")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border cursor-pointer ${
              activeCategory === "trust"
                ? "bg-sky-500 text-slate-950 border-sky-400 shadow-2xs font-black"
                : "bg-slate-900 text-sky-300 border-slate-800 hover:bg-slate-800"
            }`}
          >
            Trust
          </button>

          <button
            type="button"
            onClick={() => onSelectCategory("pricing")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border cursor-pointer ${
              activeCategory === "pricing"
                ? "bg-purple-500 text-slate-950 border-purple-400 shadow-2xs font-black"
                : "bg-slate-900 text-purple-300 border-slate-800 hover:bg-slate-800"
            }`}
          >
            Cost
          </button>

          <button
            type="button"
            onClick={() => onSelectCategory("compliance")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border cursor-pointer ${
              activeCategory === "compliance"
                ? "bg-rose-500 text-slate-950 border-rose-400 shadow-2xs font-black"
                : "bg-slate-900 text-rose-300 border-slate-800 hover:bg-slate-800"
            }`}
          >
            Protocol
          </button>
        </div>

        {/* Right: Desktop Shortcut Hint & Total Badge */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <span className="hidden xl:inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-slate-400 border border-slate-800">
            Keys <span className="text-lime-400">[1 - 8]</span> Quick Access
          </span>
          <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-black text-lime-400 border border-slate-800">
            {filteredCount} Total
          </span>
        </div>
      </div>
    </header>
  );
};

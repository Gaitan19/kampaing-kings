"use client";

import React from "react";
import {
  Target,
  ArrowUpRight,
  Sparkles,
  Zap,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { ObjectionItem } from "../data/scriptData";

interface ObjectionCardProps {
  objection: ObjectionItem;
  onOpenDetails: () => void;
  index: number;
}

export const ObjectionCard: React.FC<ObjectionCardProps> = ({
  objection,
  onOpenDetails,
  index,
}) => {
  return (
    <article
      onClick={onOpenDetails}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetails();
        }
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-lime-500/60 hover:shadow-2xl hover:shadow-lime-500/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-400"
    >
      {/* Corner halftone background accent */}
      <div className="halftone-bg pointer-events-none absolute -right-6 -bottom-6 h-36 w-36 opacity-15 transition-opacity group-hover:opacity-30" />

      {/* Top Header Row with Badge & Title */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          {/* Badge Number */}
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-lime-500 text-xl font-black text-slate-950 shadow-md shadow-lime-500/20 transform transition-transform group-hover:scale-105">
              {objection.number}
            </span>
            {objection.isCore && (
              <span className="inline-flex items-center gap-1 rounded-full bg-lime-400/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-lime-400 border border-lime-400/30">
                <Sparkles className="h-3 w-3" /> Core Card
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <span>Press</span>
            <kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-[11px] font-bold text-slate-300 border border-slate-700">
              {index + 1}
            </kbd>
          </div>
        </div>

        {/* Objection Title */}
        <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-lime-300">
          {objection.title}
        </h3>

        {/* Goal Section */}
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 transition-colors group-hover:border-slate-700">
          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-lime-400 mb-1">
            <Target className="h-3.5 w-3.5" />
            GOAL:
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-200 line-clamp-2">
            {objection.goal}
          </p>
        </div>

        {/* Tactic summary pill if available */}
        {objection.openingTactics && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <HelpCircle className="h-3.5 w-3.5 text-lime-400 shrink-0" />
            <span className="truncate">Tactic: {objection.openingTactics[0]}</span>
          </div>
        )}
      </div>

      {/* Card Footer: Responses preview & Open Details button */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <MessageSquare className="h-3.5 w-3.5 text-slate-500" />
          <span>{objection.responses.length} Rebuttals Ready</span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails();
          }}
          className="flex items-center gap-1 rounded-xl bg-slate-800/90 px-3.5 py-1.5 text-xs font-bold text-white transition-all group-hover:bg-lime-500 group-hover:text-slate-950 shadow-sm"
        >
          <span>Open Details</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
};

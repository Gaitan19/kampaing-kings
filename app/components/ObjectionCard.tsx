"use client";

import React from "react";
import {
  Target,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { ObjectionItem } from "../data/objectionsData";

interface ObjectionCardProps {
  objection: ObjectionItem;
  onOpenDetails: () => void;
  index: number;
}

export const ObjectionCard: React.FC<ObjectionCardProps> = ({
  objection,
  onOpenDetails,
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
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-lime-500 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500"
    >
      <div className="halftone-bg pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 opacity-20 transition-opacity group-hover:opacity-40" />

      <div className="flex items-stretch bg-zinc-950 border-b-2 border-lime-500">
        <div
          className={`flex w-14 sm:w-16 items-center justify-center font-black text-2xl sm:text-3xl shrink-0 ${objection.colorScheme.badgeBg} ${objection.colorScheme.badgeText}`}
        >
          {objection.number}
        </div>

        <div className="flex flex-1 items-center px-4 py-3">
          <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-white line-clamp-2">
            {objection.title}
          </h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {objection.goal && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-lime-700 mb-1">
                <Target className="h-4 w-4 text-lime-600 stroke-[2.5]" />
                GOAL:
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 leading-snug">
                {objection.goal}
              </p>
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
            <MessageSquare className="h-3.5 w-3.5 text-lime-600" />
            <span>{objection.responses.length} Responses</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails();
            }}
            className="flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white transition-all group-hover:bg-lime-500 group-hover:text-slate-950 shadow-2xs"
          >
            <span>Open Rebuttal</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

"use client";

import React from "react";
import {
  Flame,
  HelpCircle,
  ShieldCheck,
  Clock,
  DollarSign,
  Car,
  Target,
  UserCheck,
  CarFront,
  FileWarning,
  FileQuestion,
  RefreshCw,
  Layers,
  ShieldAlert,
  MapPin,
  ShieldQuestion,
  BadgeDollarSign,
  PhoneForwarded,
  PhoneOff,
  Zap,
  ChevronRight,
} from "lucide-react";
import { ObjectionItem } from "../data/objectionsData";

interface RebuttalsGridProps {
  items: { item: ObjectionItem; originalIndex: number }[];
  onSelectObjection: (index: number) => void;
  selectedIndex: number | null;
  activeCategory: string;
}

const renderIcon = (iconName: string, className = "h-4 w-4") => {
  switch (iconName) {
    case "Flame":
      return <Flame className={className} />;
    case "HelpCircle":
      return <HelpCircle className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Clock":
      return <Clock className={className} />;
    case "DollarSign":
      return <DollarSign className={className} />;
    case "Car":
      return <Car className={className} />;
    case "Target":
      return <Target className={className} />;
    case "UserCheck":
      return <UserCheck className={className} />;
    case "CarFront":
      return <CarFront className={className} />;
    case "FileWarning":
      return <FileWarning className={className} />;
    case "FileQuestion":
      return <FileQuestion className={className} />;
    case "RefreshCw":
      return <RefreshCw className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    case "MapPin":
      return <MapPin className={className} />;
    case "ShieldQuestion":
      return <ShieldQuestion className={className} />;
    case "BadgeDollarSign":
      return <BadgeDollarSign className={className} />;
    case "PhoneForwarded":
      return <PhoneForwarded className={className} />;
    case "PhoneOff":
      return <PhoneOff className={className} />;
    default:
      return <Zap className={className} />;
  }
};

export const RebuttalsGrid: React.FC<RebuttalsGridProps> = ({
  items,
  onSelectObjection,
  selectedIndex,
  activeCategory,
}) => {
  const isAll = activeCategory === "all";

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      {/* On desktop/laptop: when "All" is active, use 4 cols x 5 rows filling 100% height without scrolling */}
      {/* On mobile: vertical list (grid-cols-1) with normal touch scrolling */}
      <div
        className={`w-full min-h-0 ${
          isAll
            ? "flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-5 gap-1.5 sm:gap-2 lg:gap-2.5 lg:h-full"
            : items.length <= 8
            ? "flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr gap-2 lg:gap-2.5 lg:max-h-full"
            : "flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-2.5"
        }`}
      >
        {items.map(({ item, originalIndex }) => {
          const isSelected = selectedIndex === originalIndex;
          const numVal = parseInt(item.number, 10);
          const hasKeyShortcut = numVal >= 1 && numVal <= 8;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectObjection(originalIndex)}
              className={`group relative flex items-center justify-between w-full h-full min-h-[50px] sm:min-h-[54px] lg:min-h-0 rounded-xl border-2 transition-all duration-150 px-2 sm:px-2.5 lg:px-3 py-1.5 sm:py-2 text-left focus:outline-none focus:ring-2 focus:ring-lime-500 cursor-pointer shadow-2xs hover:shadow-md ${
                isSelected
                  ? "bg-lime-50 border-lime-500 ring-2 ring-lime-400"
                  : `${item.colorScheme.bg} ${item.colorScheme.border} hover:scale-[1.01] hover:border-slate-400`
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                {/* Number Badge */}
                <span
                  className={`flex h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 items-center justify-center rounded-lg font-black text-xs sm:text-sm lg:text-sm shrink-0 shadow-2xs transition-transform group-hover:scale-105 ${
                    isSelected
                      ? "bg-lime-400 text-slate-950 font-black"
                      : item.category === "top6"
                      ? "bg-amber-500 text-slate-950 font-black"
                      : item.category === "vehicle"
                      ? "bg-emerald-500 text-slate-950 font-black"
                      : item.category === "trust"
                      ? "bg-sky-500 text-slate-950 font-black"
                      : item.category === "pricing"
                      ? "bg-purple-500 text-slate-950 font-black"
                      : "bg-rose-500 text-slate-950 font-black"
                  }`}
                >
                  {item.number}
                </span>

                {/* Lucide Category Icon */}
                <span
                  className={`shrink-0 transition-transform group-hover:scale-110 ${
                    isSelected ? "text-lime-700" : item.colorScheme.text
                  }`}
                >
                  {renderIcon(item.icon, "h-4 w-4 sm:h-4.5 sm:w-4.5 stroke-[2.2]")}
                </span>

                {/* Title & Metadata */}
                <div className="min-w-0 flex-1 pr-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className={`text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded ${
                        item.category === "top6"
                          ? "bg-amber-200/80 text-amber-950"
                          : item.category === "vehicle"
                          ? "bg-emerald-200/80 text-emerald-950"
                          : item.category === "trust"
                          ? "bg-sky-200/80 text-sky-950"
                          : item.category === "pricing"
                          ? "bg-purple-200/80 text-purple-950"
                          : "bg-rose-200/80 text-rose-950"
                      }`}
                    >
                      {item.categoryLabel}
                    </span>

                    {/* Quick Keyboard shortcut key [1-8] */}
                    {hasKeyShortcut && (
                      <span className="hidden xl:inline text-[8px] font-black text-slate-600 bg-white/90 border border-slate-300 px-1 py-0.2 rounded shadow-2xs">
                        Key [{numVal}]
                      </span>
                    )}
                  </div>

                  <h2 className="font-black text-[11px] sm:text-xs xl:text-[13px] text-slate-900 uppercase tracking-tight leading-snug line-clamp-2 group-hover:text-black">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="shrink-0 pl-1 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

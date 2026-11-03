"use client";

import React, { useState, useRef } from "react";
import {
  Flame,
  HelpCircle,
  ShieldCheck,
  Clock,
  DollarSign,
  Car,
  FileWarning,
  FileQuestion,
  RefreshCw,
  Layers,
  ShieldAlert,
  UserCheck,
  MapPin,
  Target,
  BadgeDollarSign,
  PhoneForwarded,
  PhoneOff,
  Zap,
  ChevronRight,
} from "lucide-react";
import {
  ALL_OBJECTIONS,
  ObjectionItem,
  ObjectionCategory,
  CATEGORIES_META,
} from "../data/objectionsData";

interface RebuttalsSidebarProps {
  onSelectObjection: (index: number) => void;
  selectedIndex: number | null;
}

// Icon mapping helper
const renderObjectionIcon = (iconName: string, className = "h-3.5 w-3.5 shrink-0") => {
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
    case "CarFront":
      return <Car className={className} />;
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
    case "UserCheck":
      return <UserCheck className={className} />;
    case "MapPin":
      return <MapPin className={className} />;
    case "Target":
      return <Target className={className} />;
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

export const RebuttalsSidebar: React.FC<RebuttalsSidebarProps> = ({
  onSelectObjection,
  selectedIndex,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Groups definition
  const groups: {
    category: ObjectionCategory;
    label: string;
    meta: (typeof CATEGORIES_META)[ObjectionCategory];
    items: { item: ObjectionItem; originalIndex: number }[];
  }[] = [
    {
      category: "top6",
      label: "🔥 TOP 6 - MOST FREQUENT",
      meta: CATEGORIES_META.top6,
      items: [],
    },
    {
      category: "vehicle",
      label: "🚗 VEHICLE & RECORDS",
      meta: CATEGORIES_META.vehicle,
      items: [],
    },
    {
      category: "trust",
      label: "🛡️ TRUST & IDENTITY",
      meta: CATEGORIES_META.trust,
      items: [],
    },
    {
      category: "pricing",
      label: "💰 COST & INSURANCE",
      meta: CATEGORIES_META.pricing,
      items: [],
    },
    {
      category: "compliance",
      label: "⚠️ RESISTANCE & PROTOCOL",
      meta: CATEGORIES_META.compliance,
      items: [],
    },
  ];

  ALL_OBJECTIONS.forEach((item, originalIndex) => {
    const g = groups.find((grp) => grp.category === item.category);
    if (g) {
      g.items.push({ item, originalIndex });
    }
  });

  // Handle category pill click: scroll smoothly to that section inside sidebar without filtering out other items
  const handleCategoryClick = (categoryKey: string) => {
    setActiveCategory(categoryKey);
    if (!scrollContainerRef.current) return;

    if (categoryKey === "all") {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(`category-section-${categoryKey}`);
    if (targetElement && scrollContainerRef.current) {
      const parentTop = scrollContainerRef.current.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top;
      const currentScroll = scrollContainerRef.current.scrollTop;
      const targetOffset = currentScroll + (targetTop - parentTop) - 4;

      scrollContainerRef.current.scrollTo({
        top: Math.max(0, targetOffset),
        behavior: "smooth",
      });
    }
  };

  return (
    <aside
      aria-label="Rebuttals Navigation Sidebar"
      className="flex flex-col h-full rounded-2xl border-2 border-slate-300 bg-white shadow-md overflow-hidden"
    >
      {/* Compact Sidebar Header (Search removed as requested) */}
      <div className="bg-slate-900 px-3.5 py-2.5 text-white border-b-2 border-lime-500 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-lime-500 text-slate-950 font-black">
              <Zap className="h-3.5 w-3.5 fill-current" />
            </span>
            <h2 className="text-xs font-black uppercase tracking-wider text-white">
              Rebuttals Quick Menu
            </h2>
          </div>
          <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-lime-400 border border-slate-700">
            {ALL_OBJECTIONS.length} Total
          </span>
        </div>

        {/* Category Pills Filter: Scrolls & Focuses instead of hiding items */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-0.5 no-scrollbar text-[10px] font-bold">
          <button
            onClick={() => handleCategoryClick("all")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border ${
              activeCategory === "all"
                ? "bg-lime-500 text-slate-950 border-lime-400 shadow-2xs font-black"
                : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
            }`}
          >
            All (20)
          </button>
          <button
            onClick={() => handleCategoryClick("top6")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border ${
              activeCategory === "top6"
                ? "bg-amber-500 text-slate-950 border-amber-400 shadow-2xs font-black"
                : "bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-700"
            }`}
          >
            Top 6 🔥
          </button>
          <button
            onClick={() => handleCategoryClick("vehicle")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border ${
              activeCategory === "vehicle"
                ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-2xs font-black"
                : "bg-slate-800 text-emerald-300 border-slate-700 hover:bg-slate-700"
            }`}
          >
            Vehicle
          </button>
          <button
            onClick={() => handleCategoryClick("trust")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border ${
              activeCategory === "trust"
                ? "bg-sky-500 text-slate-950 border-sky-400 shadow-2xs font-black"
                : "bg-slate-800 text-sky-300 border-slate-700 hover:bg-slate-700"
            }`}
          >
            Trust
          </button>
          <button
            onClick={() => handleCategoryClick("pricing")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border ${
              activeCategory === "pricing"
                ? "bg-purple-500 text-slate-950 border-purple-400 shadow-2xs font-black"
                : "bg-slate-800 text-purple-300 border-slate-700 hover:bg-slate-700"
            }`}
          >
            Cost
          </button>
          <button
            onClick={() => handleCategoryClick("compliance")}
            className={`rounded-lg px-2.5 py-1 transition-all whitespace-nowrap border ${
              activeCategory === "compliance"
                ? "bg-rose-500 text-slate-950 border-rose-400 shadow-2xs font-black"
                : "bg-slate-800 text-rose-300 border-slate-700 hover:bg-slate-700"
            }`}
          >
            Protocol
          </button>
        </div>
      </div>

      {/* Scrollable Rebuttals List: Ultra compact 1-line buttons, no subtitle fluff */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-2 sm:p-2.5 space-y-3"
      >
        {groups.map((group) => (
          <div
            key={group.category}
            id={`category-section-${group.category}`}
            className="space-y-1"
          >
            {/* Category Section Header */}
            <div className="flex items-center justify-between px-1.5 py-0.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 flex items-center gap-1">
                <span>{group.label}</span>
              </span>
              <span className="text-[9px] font-black text-slate-600 bg-slate-100 rounded px-1.5 py-0.2">
                {group.items.length}
              </span>
            </div>

            {/* Rebuttals in 1 single line each */}
            <div className="space-y-1">
              {group.items.map(({ item, originalIndex }) => {
                const isSelected = selectedIndex === originalIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectObjection(originalIndex)}
                    title={item.title}
                    className={`group w-full flex items-center gap-2 rounded-lg border px-2 py-1.5 text-left transition-all ${
                      item.colorScheme.bg
                    } ${item.colorScheme.border} ${
                      isSelected
                        ? "ring-2 ring-lime-500 shadow-sm font-black scale-[1.005]"
                        : "shadow-2xs hover:shadow-xs"
                    }`}
                  >
                    {/* Number Badge */}
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-black shadow-2xs ${item.colorScheme.badgeBg} ${item.colorScheme.badgeText}`}
                    >
                      {item.number}
                    </span>

                    {/* Icon */}
                    <span
                      className={`shrink-0 ${
                        item.category === "top6"
                          ? "text-amber-600"
                          : item.category === "vehicle"
                          ? "text-emerald-600"
                          : item.category === "trust"
                          ? "text-sky-600"
                          : item.category === "pricing"
                          ? "text-purple-600"
                          : "text-rose-600"
                      }`}
                    >
                      {renderObjectionIcon(item.icon)}
                    </span>

                    {/* Rebuttal Title on ONE SINGLE LINE without wrapping */}
                    <span className="flex-1 text-[11px] sm:text-xs font-black uppercase tracking-tight text-slate-900 truncate whitespace-nowrap leading-none">
                      {item.title}
                    </span>

                    {/* Arrow Indicator */}
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Search,
  Filter,
  Layers,
  Sparkles,
  HelpCircle,
  X,
  Keyboard,
  ShieldCheck,
} from "lucide-react";
import {
  ALL_OBJECTIONS,
  CORE_OBJECTIONS,
  ObjectionItem,
  ScriptVariables,
} from "../data/scriptData";
import { ObjectionCard } from "./ObjectionCard";
import { ObjectionModal } from "./ObjectionModal";

interface ObjectionsSectionProps {
  variables: ScriptVariables;
  isPersonalized: boolean;
}

export const ObjectionsSection: React.FC<ObjectionsSectionProps> = ({
  variables,
  isPersonalized,
}) => {
  const [activeTab, setActiveTab] = useState<string>("core");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedObjectionIndex, setSelectedObjectionIndex] = useState<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter objections based on tab and search
  const filteredObjections = ALL_OBJECTIONS.filter((item) => {
    // Tab filter
    if (activeTab === "core" && !item.isCore) return false;
    if (activeTab === "interest" && item.category !== "interest") return false;
    if (activeTab === "trust" && item.category !== "trust" && item.category !== "compliance")
      return false;
    if (activeTab === "vehicle" && item.category !== "vehicle" && item.category !== "financial")
      return false;

    // Search query filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(q);
      const inGoal = item.goal.toLowerCase().includes(q);
      const inTactics = item.openingTactics?.some((t) => t.toLowerCase().includes(q));
      const inResponses = item.responses.some((r) => r.text.toLowerCase().includes(q));
      return inTitle || inGoal || inTactics || inResponses;
    }

    return true;
  });

  // Global Keyboard Navigation (hotkeys 1-9 to open cards, Esc to close, / to search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        if (e.key === "Escape") {
          (document.activeElement as HTMLElement).blur();
        }
        return;
      }

      if (e.key === "/") {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      if (e.key === "Escape") {
        setSelectedObjectionIndex(null);
        return;
      }

      // Check number keys 1-9
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= filteredObjections.length) {
        e.preventDefault();
        setSelectedObjectionIndex(num - 1);
        return;
      }

      // Arrow navigation inside modal
      if (selectedObjectionIndex !== null) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setSelectedObjectionIndex((selectedObjectionIndex + 1) % filteredObjections.length);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setSelectedObjectionIndex(
            (selectedObjectionIndex - 1 + filteredObjections.length) % filteredObjections.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedObjectionIndex, filteredObjections.length]);

  const selectedObjection =
    selectedObjectionIndex !== null ? filteredObjections[selectedObjectionIndex] : null;

  return (
    <section
      id="objections-matrix-section"
      aria-label="Objections and Rebuttals Navigation"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-lime-500/20 text-lime-400">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-lime-400">
              Interactive Battlecard Matrix
            </span>
          </div>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Objections &amp; <span className="text-lime-400">Rebuttals</span>
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Select any objection below to view the verified call-center opening tactic, goal, and step-by-step responses.
          </p>
        </div>

        {/* Keyboard shortcut helper pill */}
        <div className="hidden lg:flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-1.5 text-xs text-slate-400">
          <Keyboard className="h-4 w-4 text-lime-400" />
          <span>Press</span>
          <kbd className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[11px] font-bold text-slate-300 border border-slate-700">
            1-4
          </kbd>
          <span>for instant card popup,</span>
          <kbd className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[11px] font-bold text-slate-300 border border-slate-700">
            /
          </kbd>
          <span>to search</span>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("core")}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
              activeTab === "core"
                ? "border-lime-400 bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20"
                : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-white"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Core Campaign (01 - 04)</span>
          </button>

          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
              activeTab === "all"
                ? "border-lime-400 bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20"
                : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-white"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>All Objections ({ALL_OBJECTIONS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("interest")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all border ${
              activeTab === "interest"
                ? "border-lime-400 bg-lime-500 text-slate-950"
                : "border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Interest &amp; Time
          </button>

          <button
            onClick={() => setActiveTab("trust")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all border ${
              activeTab === "trust"
                ? "border-lime-400 bg-lime-500 text-slate-950"
                : "border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Trust &amp; Privacy
          </button>

          <button
            onClick={() => setActiveTab("vehicle")}
            className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all border ${
              activeTab === "vehicle"
                ? "border-lime-400 bg-lime-500 text-slate-950"
                : "border-slate-800 bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Vehicle &amp; Rates
          </button>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rebuttal keyword... (/)"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/90 pl-9 pr-8 py-2 text-xs font-medium text-white placeholder-slate-500 transition-colors focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Objection Cards */}
      {filteredObjections.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {filteredObjections.map((item, idx) => (
            <ObjectionCard
              key={item.id}
              objection={item}
              index={idx}
              onOpenDetails={() => setSelectedObjectionIndex(idx)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 p-12 text-center">
          <HelpCircle className="mx-auto h-10 w-10 text-slate-500 mb-3" />
          <h3 className="text-lg font-bold text-white">No matching objections found</h3>
          <p className="mt-1 text-xs text-slate-400">
            Try searching for words like &quot;cost&quot;, &quot;receptionist&quot;, &quot;registration&quot;, or reset your filters.
          </p>
          <button
            onClick={() => {
              setActiveTab("core");
              setSearchQuery("");
            }}
            className="mt-4 rounded-xl bg-lime-500 px-4 py-1.5 text-xs font-bold text-slate-950 hover:bg-lime-400"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Interactive Modal for Selected Objection Details */}
      {selectedObjectionIndex !== null && (
        <ObjectionModal
          objection={selectedObjection}
          onClose={() => setSelectedObjectionIndex(null)}
          onSelectIndex={(newIdx) => setSelectedObjectionIndex(newIdx)}
          currentIndex={selectedObjectionIndex}
          totalCount={filteredObjections.length}
          variables={variables}
          isPersonalized={isPersonalized}
        />
      )}
    </section>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { RebuttalsNavbar } from "./components/RebuttalsNavbar";
import { RebuttalsGrid } from "./components/RebuttalsGrid";
import { ObjectionModal } from "./components/ObjectionModal";
import { SeoStructuredData } from "./components/SeoStructuredData";
import { ALL_OBJECTIONS } from "./data/objectionsData";

export default function Home() {
  const [selectedObjectionIndex, setSelectedObjectionIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        if (e.key === "Escape") {
          (document.activeElement as HTMLElement).blur();
        }
        return;
      }

      // Close modal on Escape
      if (e.key === "Escape") {
        if (selectedObjectionIndex !== null) {
          setSelectedObjectionIndex(null);
        }
        return;
      }

      // Quick numbers 1 to 8 to open Most Frequent rebuttals
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= 8 && selectedObjectionIndex === null) {
        e.preventDefault();
        setSelectedObjectionIndex(num - 1);
        return;
      }

      // Arrow navigation inside modal
      if (selectedObjectionIndex !== null) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setSelectedObjectionIndex((selectedObjectionIndex + 1) % ALL_OBJECTIONS.length);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setSelectedObjectionIndex(
            (selectedObjectionIndex - 1 + ALL_OBJECTIONS.length) % ALL_OBJECTIONS.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedObjectionIndex]);

  const allItemsWithIndex = ALL_OBJECTIONS.map((item, originalIndex) => ({
    item,
    originalIndex,
  }));

  const filteredItems =
    activeCategory === "all"
      ? allItemsWithIndex
      : allItemsWithIndex.filter(({ item }) => item.category === activeCategory);

  const selectedObjection =
    selectedObjectionIndex !== null ? ALL_OBJECTIONS[selectedObjectionIndex] : null;

  return (
    <>
      <SeoStructuredData />

      <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col bg-slate-100 text-slate-900 antialiased selection:bg-lime-400 selection:text-slate-950">
        {/* Rebuttals Quick Menu Top Navbar */}
        <RebuttalsNavbar
          activeCategory={activeCategory}
          onSelectCategory={(catKey) => setActiveCategory(catKey)}
          totalCount={ALL_OBJECTIONS.length}
          filteredCount={filteredItems.length}
        />

        {/* Main Agent Workspace: Grid view on laptop/desktop (no-scroll 4x5), Vertical list on mobile */}
        <main className="flex-1 w-full p-2 sm:p-2.5 lg:p-3 overflow-y-auto lg:overflow-hidden flex flex-col min-h-0">
          <RebuttalsGrid
            items={filteredItems}
            onSelectObjection={(origIdx) => setSelectedObjectionIndex(origIdx)}
            selectedIndex={selectedObjectionIndex}
            activeCategory={activeCategory}
          />
        </main>

        {/* Rebuttal Modal (Opened when clicking any card in the Grid or via keys 1-8) */}
        {selectedObjectionIndex !== null && (
          <ObjectionModal
            objection={selectedObjection}
            onClose={() => setSelectedObjectionIndex(null)}
            onSelectIndex={(newIdx) => setSelectedObjectionIndex(newIdx)}
            currentIndex={selectedObjectionIndex}
            totalCount={ALL_OBJECTIONS.length}
          />
        )}
      </div>
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { HeaderNav } from "./components/HeaderNav";
import { OpeningScript } from "./components/OpeningScript";
import { RebuttalsSidebar } from "./components/RebuttalsSidebar";
import { ObjectionModal } from "./components/ObjectionModal";
import { SeoStructuredData } from "./components/SeoStructuredData";
import { ALL_OBJECTIONS } from "./data/objectionsData";
import { X } from "lucide-react";

export default function Home() {
  const [selectedObjectionIndex, setSelectedObjectionIndex] = useState<number | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

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
        } else if (isMobileSidebarOpen) {
          setIsMobileSidebarOpen(false);
        }
        return;
      }

      // Quick numbers 1 to 6 to open Top 6 rebuttals
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= 6 && selectedObjectionIndex === null) {
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
  }, [selectedObjectionIndex, isMobileSidebarOpen]);

  const handleSelectObjection = (index: number) => {
    setSelectedObjectionIndex(index);
    if (isMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  };

  const selectedObjection =
    selectedObjectionIndex !== null ? ALL_OBJECTIONS[selectedObjectionIndex] : null;

  return (
    <>
      <SeoStructuredData />

      <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col bg-slate-100 text-slate-900 antialiased selection:bg-lime-400 selection:text-slate-950">
        {/* Compact Navigation Bar */}
        <HeaderNav
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          isMobileSidebarOpen={isMobileSidebarOpen}
          totalRebuttals={ALL_OBJECTIONS.length}
        />

        {/* Main Agent Workspace: Split Screen layout maximizing screen utilization */}
        <main className="flex-1 w-full px-2 sm:px-3 lg:px-4 py-2 lg:overflow-hidden flex flex-col">
          <div className="flex-1 flex flex-col lg:flex-row gap-3 lg:gap-3.5 items-stretch lg:overflow-hidden">
            {/* LEFT SIDEBAR: FIXED REBUTTALS LIST (Scrollable only inside its menu) */}
            <div className="hidden lg:flex lg:flex-col lg:w-[480px] xl:w-[520px] 2xl:w-[540px] shrink-0 h-full overflow-hidden">
              <RebuttalsSidebar
                onSelectObjection={handleSelectObjection}
                selectedIndex={selectedObjectionIndex}
              />
            </div>

            {/* Mobile Slide-over Drawer for Rebuttals */}
            {isMobileSidebarOpen && (
              <div
                className="fixed inset-0 z-50 flex bg-slate-950/70 backdrop-blur-xs lg:hidden"
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <div
                  className="relative w-full max-w-md h-full bg-white shadow-2xl p-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <RebuttalsSidebar
                    onSelectObjection={handleSelectObjection}
                    selectedIndex={selectedObjectionIndex}
                  />
                </div>
              </div>
            )}

            {/* RIGHT SIDE: OPENING SCRIPT (Fits 100% on screen without scrolling) */}
            <div className="flex-1 w-full min-w-0 lg:h-full lg:overflow-hidden flex flex-col">
              <OpeningScript />
            </div>
          </div>
        </main>

        {/* Rebuttal Modal (Opened when clicking any Rebuttal in the Left Sidebar) */}
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

"use client";

import React, { useState } from "react";
import { Zap } from "lucide-react";
import { ALL_OBJECTIONS } from "../data/objectionsData";
import { ObjectionCard } from "./ObjectionCard";
import { ObjectionModal } from "./ObjectionModal";

interface ObjectionsSectionProps {
  onOpenObjection?: (index: number) => void;
}

export const ObjectionsSection: React.FC<ObjectionsSectionProps> = ({ onOpenObjection }) => {
  const [selectedObjectionIndex, setSelectedObjectionIndex] = useState<number | null>(null);

  const filteredObjections = ALL_OBJECTIONS;

  const selectedObjection =
    selectedObjectionIndex !== null ? filteredObjections[selectedObjectionIndex] : null;

  return (
    <section
      id="objections-matrix-section"
      aria-label="Objections and Rebuttals Matrix"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-lime-100 text-lime-700">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-lime-700">
              Battlecard Rebuttals Library
            </span>
          </div>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
            Objections &amp; <span className="text-lime-600">Rebuttals</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredObjections.map((item, idx) => (
          <ObjectionCard
            key={item.id}
            objection={item}
            index={idx}
            onOpenDetails={() => {
              if (onOpenObjection) {
                const origIndex = ALL_OBJECTIONS.findIndex((o) => o.id === item.id);
                onOpenObjection(origIndex);
              } else {
                setSelectedObjectionIndex(idx);
              }
            }}
          />
        ))}
      </div>

      {selectedObjectionIndex !== null && (
        <ObjectionModal
          objection={selectedObjection}
          onClose={() => setSelectedObjectionIndex(null)}
          onSelectIndex={(newIdx) => setSelectedObjectionIndex(newIdx)}
          currentIndex={selectedObjectionIndex}
          totalCount={filteredObjections.length}
        />
      )}
    </section>
  );
};

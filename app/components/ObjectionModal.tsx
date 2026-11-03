"use client";

import React, { useState } from "react";
import {
  X,
  MessageSquare,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  PhoneCall,
} from "lucide-react";
import { ObjectionItem, UNIVERSAL_HOLDING_TIPS } from "../data/objectionsData";

interface ObjectionModalProps {
  objection: ObjectionItem | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  currentIndex: number;
  totalCount: number;
  onReturnToScript?: () => void;
}

export const ObjectionModal: React.FC<ObjectionModalProps> = ({
  objection,
  onClose,
  onSelectIndex,
  currentIndex,
  totalCount,
  onReturnToScript,
}) => {
  const [copiedId, setCopiedId] = useState<string | number | null>(null);

  if (!objection) return null;

  const handleCopyText = (text: string, id: string | number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleBackToScript = () => {
    onClose();
    if (onReturnToScript) {
      onReturnToScript();
    } else {
      const el = document.getElementById("opening-script-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="objection-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl border-2 border-slate-300 bg-white shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Halftone green dot texture accent */}
        <div className="halftone-bg pointer-events-none absolute right-0 bottom-0 h-48 w-48 opacity-30" />

        {/* Modal Header */}
        <div className="relative bg-zinc-950 border-b-4 border-lime-500 px-5 py-4 sm:px-8 sm:py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Number Badge */}
            <div
              className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl font-black text-xl sm:text-2xl shadow-md shrink-0 ${objection.colorScheme.badgeBg} ${objection.colorScheme.badgeText}`}
            >
              {objection.number}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-lime-400">
                  {objection.isTop6 ? "🔥 Most Frequent Rebuttal" : objection.categoryLabel}
                </span>
                <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
                  {currentIndex + 1} of {totalCount}
                </span>
              </div>
              <h2
                id="objection-modal-title"
                className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white"
              >
                {objection.title}
              </h2>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleBackToScript}
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-red-500/40 bg-red-500/20 px-3 py-1.5 text-xs font-bold text-red-200 hover:bg-red-500 hover:text-white transition-all mr-1"
              title="Return to Opening Script"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Opening Script</span>
            </button>

            <button
              onClick={() => onSelectIndex((currentIndex - 1 + totalCount) % totalCount)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-200 hover:border-lime-400 hover:bg-zinc-700 hover:text-white transition-all"
              title="Previous Rebuttal (Left Arrow)"
              aria-label="Previous Rebuttal"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => onSelectIndex((currentIndex + 1) % totalCount)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-200 hover:border-lime-400 hover:bg-zinc-700 hover:text-white transition-all"
              title="Next Rebuttal (Right Arrow)"
              aria-label="Next Rebuttal"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-red-500/20 text-red-400 hover:bg-red-500/40 hover:text-white transition-all ml-1"
              title="Close modal (Esc)"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="relative z-10 p-5 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 bg-white">
          {/* ESSENTIAL HOLDING PHRASES CALLOUT IN EVERY MODAL (Requested by user) */}
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-4 sm:p-5 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-amber-800">
                <Lightbulb className="h-5 w-5 text-amber-600 stroke-[2.5]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                  Universal In-Call Holding Tips (Dead-Air Buffer)
                </span>
              </div>
              <span className="text-[11px] font-bold text-amber-700 hidden sm:inline">
                Always use while holding or bridging to advisor
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 mt-3">
              {UNIVERSAL_HOLDING_TIPS.map((tip) => {
                const isCopied = copiedId === tip.id;
                return (
                  <div
                    key={tip.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-white p-3 shadow-2xs hover:border-amber-400 transition-colors"
                  >
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                      {tip.text}
                    </p>
                    <button
                      onClick={() => handleCopyText(tip.text, tip.id)}
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs transition-all ${
                        isCopied
                          ? "border-lime-500 bg-lime-100 text-lime-800"
                          : "border-slate-300 bg-slate-50 text-slate-600 hover:border-amber-400 hover:text-slate-900"
                      }`}
                      title="Copy tip"
                    >
                      {isCopied ? <Check className="h-3.5 w-3.5 text-lime-600" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verified Responses List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2 text-lime-700">
                <MessageSquare className="h-5 w-5 stroke-[2.5]" />
                <span className="text-sm font-black uppercase tracking-wider text-slate-900">
                  Approved Verbatim Rebuttals ({objection.responses.length})
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Click copy button to paste verbatim into your chat/notes
              </span>
            </div>

            <div className="space-y-3.5">
              {objection.responses.map((resp) => {
                const isCopied = copiedId === resp.id;
                return (
                  <article
                    key={resp.id}
                    className="group relative rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-4 sm:p-5 transition-all hover:border-lime-500 hover:bg-white shadow-xs"
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Response index pill */}
                      <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-lime-500 text-slate-950 font-black text-sm sm:text-base shadow-sm">
                        {resp.id}
                      </span>

                      <div className="flex-1 space-y-1.5">
                        {resp.contextNote && (
                          <div className="text-xs font-bold text-amber-700 italic">
                            [{resp.contextNote}]
                          </div>
                        )}
                        <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-900">
                          {resp.text}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopyText(resp.text, resp.id)}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all ${
                          isCopied
                            ? "border-lime-500 bg-lime-100 text-lime-800"
                            : "border-slate-300 bg-white text-slate-600 hover:border-lime-500 hover:text-slate-900 shadow-2xs"
                        }`}
                        title="Copy this rebuttal line"
                        aria-label="Copy rebuttal"
                      >
                        {isCopied ? (
                          <Check className="h-4 w-4 text-lime-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-800 border border-slate-300 shadow-2xs">
              Esc
            </kbd>
            <span>close</span>
            <span className="mx-1">•</span>
            <kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-800 border border-slate-300 shadow-2xs">
              ← / →
            </kbd>
            <span>prev / next</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={handleBackToScript}
              className="flex items-center gap-1.5 rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-xs font-bold text-red-700 hover:border-red-400 hover:bg-red-100 transition-all shadow-2xs"
            >
              <PhoneCall className="h-3.5 w-3.5 text-red-600" />
              <span>Back to Opening Script</span>
            </button>

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-all shadow-2xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

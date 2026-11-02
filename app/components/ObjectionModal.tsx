"use client";

import React, { useState } from "react";
import {
  X,
  Target,
  HelpCircle,
  MessageSquare,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Zap,
  Info,
  PhoneCall,
} from "lucide-react";
import { ObjectionItem } from "../data/objectionsData";
import { ScriptVariables } from "../data/scriptData";

interface ObjectionModalProps {
  objection: ObjectionItem | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  currentIndex: number;
  totalCount: number;
  variables: ScriptVariables;
  isPersonalized: boolean;
  onJumpToScript?: () => void;
}

export const ObjectionModal: React.FC<ObjectionModalProps> = ({
  objection,
  onClose,
  onSelectIndex,
  currentIndex,
  totalCount,
  variables,
  isPersonalized,
  onJumpToScript,
}) => {
  const [copiedResponseId, setCopiedResponseId] = useState<number | null>(null);

  const handleReturnToScript = () => {
    onClose();
    setTimeout(() => {
      if (onJumpToScript) {
        onJumpToScript();
      } else {
        const el = document.getElementById("opening-script-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  if (!objection) return null;

  const handleCopyText = (text: string, responseId: number) => {
    let formattedText = text;
    if (isPersonalized) {
      formattedText = formattedText
        .replace(/\{monthYear\}/g, variables.monthYear || "(month, year)")
        .replace(/\{paymentAmount\}/g, variables.paymentAmount || "(payment amount)")
        .replace(/\{clientName\}/g, variables.clientName || "(client's name)")
        .replace(/\{agentName\}/g, variables.agentName || "(your name)");
    } else {
      formattedText = formattedText
        .replace(/\{monthYear\}/g, "(month, year)")
        .replace(/\{paymentAmount\}/g, "(payment amount)")
        .replace(/\{clientName\}/g, "(client's name)")
        .replace(/\{agentName\}/g, "(your name)");
    }

    navigator.clipboard.writeText(formattedText);
    setCopiedResponseId(responseId);
    setTimeout(() => setCopiedResponseId(null), 2000);
  };

  const renderPersonalizedText = (text: string) => {
    const parts = text.split(/(\{monthYear\}|\{paymentAmount\}|\{clientName\}|\{agentName\})/g);
    return parts.map((part, idx) => {
      if (part === "{monthYear}") {
        return (
          <span
            key={idx}
            className={`font-bold ${
              isPersonalized
                ? "bg-lime-100 text-lime-900 px-1 rounded border border-lime-300"
                : "text-amber-700 font-semibold underline decoration-amber-400"
            }`}
          >
            {isPersonalized ? variables.monthYear || "(month, year)" : "(month, year)"}
          </span>
        );
      }
      if (part === "{paymentAmount}") {
        return (
          <span
            key={idx}
            className={`font-bold ${
              isPersonalized
                ? "bg-lime-100 text-lime-900 px-1 rounded border border-lime-300"
                : "text-amber-700 font-semibold underline decoration-amber-400"
            }`}
          >
            {isPersonalized ? variables.paymentAmount || "(payment amount)" : "(payment amount)"}
          </span>
        );
      }
      if (part === "{clientName}") {
        return (
          <span
            key={idx}
            className={`font-bold ${
              isPersonalized
                ? "bg-lime-100 text-lime-900 px-1 rounded border border-lime-300"
                : "text-amber-700 font-semibold underline decoration-amber-400"
            }`}
          >
            {isPersonalized ? variables.clientName || "(client's name)" : "(client's name)"}
          </span>
        );
      }
      if (part === "{agentName}") {
        return (
          <span
            key={idx}
            className={`font-bold ${
              isPersonalized
                ? "bg-lime-100 text-lime-900 px-1 rounded border border-lime-300"
                : "text-amber-700 font-semibold underline decoration-amber-400"
            }`}
          >
            {isPersonalized ? variables.agentName || "(your name)" : "(your name)"}
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="objection-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl border-2 border-slate-300 bg-white shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Halftone green dot texture in bottom right corner just like the training card */}
        <div className="halftone-bg pointer-events-none absolute right-0 bottom-0 h-48 w-48 opacity-40" />

        {/* Top Brush Style Header - EXACT MATCH to Image 2, 3, 4, 5 */}
        <div className="relative bg-zinc-950 border-b-4 border-lime-500 px-4 py-4 sm:px-8 sm:py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Big Green Badge */}
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-lime-500 font-black text-slate-950 text-2xl sm:text-3xl shadow-md shrink-0">
              {objection.number}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-lime-400">
                  {objection.isCore ? "⭐ Official Campaign Battlecard" : "Supplemental Objection Guide"}
                </span>
                <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
                  Card {currentIndex + 1} of {totalCount}
                </span>
              </div>
              <h2
                id="objection-modal-title"
                className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white"
              >
                {objection.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Return to Opening Script Header Button */}
            <button
              onClick={handleReturnToScript}
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-red-500/40 bg-red-500/20 px-3 py-1.5 text-xs font-bold text-red-200 hover:bg-red-500 hover:text-white transition-all mr-1"
              title="Return to Opening Script"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Opening Script</span>
            </button>

            {/* Quick Cycle Prev / Next */}
            <button
              onClick={() => onSelectIndex((currentIndex - 1 + totalCount) % totalCount)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-200 hover:border-lime-400 hover:bg-zinc-700 hover:text-white transition-all"
              title="Previous Objection (Left Arrow)"
              aria-label="Previous Objection"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => onSelectIndex((currentIndex + 1) % totalCount)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-200 hover:border-lime-400 hover:bg-zinc-700 hover:text-white transition-all"
              title="Next Objection (Right Arrow)"
              aria-label="Next Objection"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-white transition-all ml-1"
              title="Close modal (Esc)"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content Body: 2 Column Layout replicating image design in clean Light Theme */}
        <div className="relative z-10 grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-12 max-h-[75vh] overflow-y-auto bg-white">
          {/* Left Column: GOAL & OPENING TACTIC (lg:col-span-5) */}
          <div className="space-y-6 lg:col-span-5 lg:border-r lg:border-slate-200 lg:pr-6">
            {/* GOAL Box */}
            <div className="rounded-2xl border-2 border-lime-400 bg-lime-50/50 p-5 shadow-xs">
              <div className="flex items-center gap-2 text-lime-700 mb-2">
                <Target className="h-6 w-6 stroke-[2.5]" />
                <span className="text-base font-black uppercase tracking-wider text-lime-800">
                  GOAL:
                </span>
              </div>
              <p className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                {objection.goal}
              </p>
              {objection.goalSubtext && (
                <p className="mt-2 text-xs sm:text-sm font-bold text-lime-800">
                  {objection.goalSubtext}
                </p>
              )}
            </div>

            {/* OPENING TACTIC (if present) */}
            {objection.openingTactics && objection.openingTactics.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xs">
                <div className="flex items-center gap-2 text-lime-700 mb-3">
                  <HelpCircle className="h-5 w-5 stroke-[2.5]" />
                  <span className="text-sm font-black uppercase tracking-wider text-lime-800">
                    OPENING TACTIC:
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {objection.openingTactics.map((tactic, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-slate-800">
                      <span className="text-lime-600 text-lg leading-none font-bold select-none">•</span>
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>

                {/* The Green Brush Callout Banner matching image */}
                {objection.tacticBanner && (
                  <div className="mt-4 rounded-xl bg-lime-500 p-3.5 text-slate-950 shadow-sm">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-wide leading-tight flex items-center gap-1.5">
                      <Zap className="h-4 w-4 fill-current shrink-0" />
                      <span>{objection.tacticBanner}</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Pro Coaching Tips */}
            {objection.proTip && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-bold text-amber-700 mb-1">
                  <Info className="h-4 w-4 text-amber-600" />
                  <span>Agent Delivery Coaching:</span>
                </div>
                <p className="leading-relaxed">{objection.proTip}</p>
              </div>
            )}
          </div>

          {/* Right Column: RESPONSES (lg:col-span-7) */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2 text-lime-700">
                <MessageSquare className="h-5 w-5 stroke-[2.5]" />
                <span className="text-base font-black uppercase tracking-wider text-lime-800">
                  RESPONSES:
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Click copy button to paste verbatim into your chat/notes
              </span>
            </div>

            <div className="space-y-4">
              {objection.responses.map((resp) => {
                const isCopied = copiedResponseId === resp.id;
                return (
                  <article
                    key={resp.id}
                    className="group relative rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-5 transition-all hover:border-lime-500 hover:bg-white shadow-xs"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number circle badge in lime green just like in the images */}
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-lime-500 text-slate-950 font-black text-base sm:text-lg shadow-sm">
                        {resp.id}
                      </span>

                      <div className="flex-1 space-y-2">
                        {resp.contextNote && (
                          <div className="text-xs font-bold text-lime-800 italic">
                            [{renderPersonalizedText(resp.contextNote)}]
                          </div>
                        )}
                        <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-800">
                          {renderPersonalizedText(resp.text)}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopyText(resp.text, resp.id)}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all ${
                          isCopied
                            ? "border-lime-500 bg-lime-100 text-lime-800"
                            : "border-slate-300 bg-white text-slate-600 hover:border-lime-500 hover:text-slate-900 shadow-2xs"
                        }`}
                        title="Copy this response"
                        aria-label="Copy response"
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

        {/* Modal Footer Controls */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-800 border border-slate-300 shadow-2xs">
              Esc
            </kbd>
            <span>to close</span>
            <span className="mx-1">•</span>
            <kbd className="rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-800 border border-slate-300 shadow-2xs">
              ← / →
            </kbd>
            <span>to navigate</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={handleReturnToScript}
              className="flex items-center gap-1.5 rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-xs font-bold text-red-700 hover:border-red-400 hover:bg-red-100 hover:text-red-800 transition-all shadow-2xs"
              title="Return to Opening Script"
            >
              <PhoneCall className="h-3.5 w-3.5 text-red-600" />
              <span>Back to Opening Script</span>
            </button>

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-all shadow-2xs"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

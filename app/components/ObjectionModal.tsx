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
  Sparkles,
  Zap,
  Info,
} from "lucide-react";
import { ObjectionItem, ScriptVariables } from "../data/scriptData";

interface ObjectionModalProps {
  objection: ObjectionItem | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  currentIndex: number;
  totalCount: number;
  variables: ScriptVariables;
  isPersonalized: boolean;
}

export const ObjectionModal: React.FC<ObjectionModalProps> = ({
  objection,
  onClose,
  onSelectIndex,
  currentIndex,
  totalCount,
  variables,
  isPersonalized,
}) => {
  const [copiedResponseId, setCopiedResponseId] = useState<number | null>(null);

  if (!objection) return null;

  const handleCopyText = (text: string, responseId: number) => {
    // Replace variables in text if personalized
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
                ? "bg-lime-400/20 text-lime-300 px-1 rounded border border-lime-400/40"
                : "text-amber-400 font-semibold"
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
                ? "bg-lime-400/20 text-lime-300 px-1 rounded border border-lime-400/40"
                : "text-amber-400 font-semibold"
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
                ? "bg-lime-400/20 text-lime-300 px-1 rounded border border-lime-400/40"
                : "text-amber-400 font-semibold"
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
                ? "bg-lime-400/20 text-lime-300 px-1 rounded border border-lime-400/40"
                : "text-amber-400 font-semibold"
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl border-2 border-slate-700 bg-slate-900 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Halftone green dot texture in the top right / bottom right background */}
        <div className="halftone-bg pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-25" />
        <div className="halftone-bg pointer-events-none absolute right-0 bottom-0 h-48 w-48 opacity-30" />

        {/* Top Brush Style Header - Faithfully modeled after the original training cards */}
        <div className="relative bg-zinc-950 border-b-4 border-lime-500 px-4 py-4 sm:px-8 sm:py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Big Green Badge */}
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-lime-500 font-black text-slate-950 text-2xl sm:text-3xl shadow-lg shadow-lime-500/25 shrink-0 transform -rotate-1">
              {objection.number}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-lime-400">
                  {objection.isCore ? "⭐ Official Campaign Card" : "Supplemental Objection Guide"}
                </span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
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
            {/* Quick Cycle Prev / Next */}
            <button
              onClick={() => onSelectIndex((currentIndex - 1 + totalCount) % totalCount)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:border-lime-400 hover:bg-slate-700 hover:text-white transition-all"
              title="Previous Objection (Left Arrow)"
              aria-label="Previous Objection"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => onSelectIndex((currentIndex + 1) % totalCount)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:border-lime-400 hover:bg-slate-700 hover:text-white transition-all"
              title="Next Objection (Right Arrow)"
              aria-label="Next Objection"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-white transition-all ml-1"
              title="Close modal (Esc)"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content Body: 2 Column Layout replicating image design */}
        <div className="relative z-10 grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-12 max-h-[75vh] overflow-y-auto">
          {/* Left Column: GOAL & OPENING TACTIC (lg:col-span-5) */}
          <div className="space-y-6 lg:col-span-5 lg:border-r lg:border-slate-800 lg:pr-6">
            {/* GOAL Box */}
            <div className="rounded-2xl border-2 border-lime-500/30 bg-slate-950/70 p-5 shadow-md">
              <div className="flex items-center gap-2 text-lime-400 mb-2">
                <Target className="h-6 w-6 stroke-[2.5]" />
                <span className="text-sm font-black uppercase tracking-wider text-lime-400">
                  GOAL:
                </span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white leading-snug">
                {objection.goal}
              </p>
              {objection.goalSubtext && (
                <p className="mt-2 text-xs sm:text-sm font-semibold text-lime-300">
                  {objection.goalSubtext}
                </p>
              )}
            </div>

            {/* OPENING TACTIC (if present) */}
            {objection.openingTactics && objection.openingTactics.length > 0 && (
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-md">
                <div className="flex items-center gap-2 text-lime-400 mb-3">
                  <HelpCircle className="h-5 w-5 stroke-[2.5]" />
                  <span className="text-xs font-black uppercase tracking-wider text-lime-400">
                    OPENING TACTIC:
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {objection.openingTactics.map((tactic, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-slate-200">
                      <span className="text-lime-400 text-lg leading-none font-bold select-none">•</span>
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>

                {/* The Green Brush Callout Banner */}
                {objection.tacticBanner && (
                  <div className="mt-4 rounded-xl bg-gradient-to-r from-lime-500 to-lime-600 p-3 text-slate-950 shadow-md">
                    <p className="text-xs font-black uppercase tracking-wide leading-tight flex items-center gap-1.5">
                      <Zap className="h-4 w-4 fill-current shrink-0" />
                      <span>{objection.tacticBanner}</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Pro Coaching Tips */}
            {objection.proTip && (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
                  <Info className="h-4 w-4" />
                  <span>Agent Delivery Coaching:</span>
                </div>
                <p className="leading-relaxed">{objection.proTip}</p>
              </div>
            )}
          </div>

          {/* Right Column: RESPONSES (lg:col-span-7) */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2 text-lime-400">
                <MessageSquare className="h-5 w-5 stroke-[2.5]" />
                <span className="text-sm font-black uppercase tracking-wider text-lime-400">
                  RESPONSES:
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Click any copy button to paste verbatim into your chat/notes
              </span>
            </div>

            <div className="space-y-4">
              {objection.responses.map((resp) => {
                const isCopied = copiedResponseId === resp.id;
                return (
                  <article
                    key={resp.id}
                    className="group relative rounded-2xl border-2 border-slate-800 bg-slate-950/80 p-5 transition-all hover:border-lime-500/50 hover:bg-slate-950 shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number circle badge */}
                      <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-lime-500 text-slate-950 font-black text-base sm:text-lg shadow-md shadow-lime-500/20">
                        {resp.id}
                      </span>

                      <div className="flex-1 space-y-2">
                        {resp.contextNote && (
                          <div className="text-xs font-semibold text-lime-400/90 italic">
                            [{renderPersonalizedText(resp.contextNote)}]
                          </div>
                        )}
                        <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-100">
                          {renderPersonalizedText(resp.text)}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopyText(resp.text, resp.id)}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all ${
                          isCopied
                            ? "border-lime-400 bg-lime-500/20 text-lime-300"
                            : "border-slate-700 bg-slate-800 text-slate-300 hover:border-lime-400 hover:text-white"
                        }`}
                        title="Copy this response"
                        aria-label="Copy response"
                      >
                        {isCopied ? (
                          <Check className="h-4 w-4 text-lime-400" />
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
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-950 px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <kbd className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-300 border border-slate-700">
              Esc
            </kbd>
            <span>to close</span>
            <span className="mx-1">•</span>
            <kbd className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-300 border border-slate-700">
              ← / →
            </kbd>
            <span>to navigate</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  CheckCircle2,
  Copy,
  Check,
  Volume2,
  ArrowRight,
  Shield,
  Headphones,
  Car,
  AlertCircle,
} from "lucide-react";
import { ScriptVariables } from "../data/scriptData";

interface OpeningScriptProps {
  variables: ScriptVariables;
  isPersonalized: boolean;
  onJumpToObjections: () => void;
}

export const OpeningScript: React.FC<OpeningScriptProps> = ({
  variables,
  isPersonalized,
  onJumpToObjections,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2000);
  };

  // Helper to render variable or template token
  const renderClientName = () => (
    <span
      className={`font-bold transition-colors ${
        isPersonalized
          ? "bg-lime-400/20 text-lime-300 px-1.5 py-0.5 rounded border border-lime-400/40"
          : "text-amber-400 underline decoration-amber-500/50"
      }`}
    >
      {isPersonalized ? variables.clientName || "(client's name)" : "(client's name)"}
    </span>
  );

  const renderAgentName = () => (
    <span
      className={`font-bold transition-colors ${
        isPersonalized
          ? "bg-lime-400/20 text-lime-300 px-1.5 py-0.5 rounded border border-lime-400/40"
          : "text-amber-400 underline decoration-amber-500/50"
      }`}
    >
      {isPersonalized ? variables.agentName || "(your name)" : "(your name)"}
    </span>
  );

  const renderMonthYear = () => (
    <span
      className={`font-bold transition-colors ${
        isPersonalized
          ? "bg-lime-400/20 text-lime-300 px-1.5 py-0.5 rounded border border-lime-400/40"
          : "text-amber-400 underline decoration-amber-500/50"
      }`}
    >
      {isPersonalized ? variables.monthYear || "(month, year)" : "(month, year)"}
    </span>
  );

  const renderPaymentAmount = () => (
    <span
      className={`font-bold transition-colors ${
        isPersonalized
          ? "bg-lime-400/20 text-lime-300 px-1.5 py-0.5 rounded border border-lime-400/40"
          : "text-amber-400 underline decoration-amber-500/50"
      }`}
    >
      {isPersonalized
        ? variables.paymentAmount || "(payment amount)"
        : "(payment amount)"}
    </span>
  );

  return (
    <section
      id="opening-script-section"
      aria-label="Opening Outbound Script"
      className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl border-2 border-slate-700/80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-10 shadow-2xl">
        {/* Subtle decorative grid/glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-lime-500/10 blur-3xl" />

        {/* Section Header */}
        <div className="relative z-10 mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20 text-red-500 ring-1 ring-red-500/40">
              <PhoneCall className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-red-500">
                Phase 1: Initial Pitch &amp; Transfer Bridge
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-2">
                <span className="text-red-500">Opening</span> Script
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-300 border border-slate-700">
              <Volume2 className="h-3.5 w-3.5 text-lime-400" />
              <span>Pace: Confident &amp; Friendly</span>
            </div>

            <button
              onClick={onJumpToObjections}
              className="flex items-center gap-1.5 rounded-full border border-lime-500/40 bg-lime-500/10 px-3.5 py-1 text-xs font-bold text-lime-300 hover:bg-lime-500/20 transition-all"
            >
              <span>Customer hesitating?</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* The Core Script Dialog Card (Styled like high-impact training cards) */}
        <div className="relative z-10 space-y-6">
          {/* Step 1: Greeting & Lead Recognition */}
          <article className="group relative rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6 transition-all hover:border-slate-700 hover:bg-slate-950/90 shadow-md">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-xs font-black text-red-400">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Greeting &amp; Vehicle Reference
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    `Hi, ${
                      isPersonalized ? variables.clientName : "(client's name)"
                    } this is ${
                      isPersonalized ? variables.agentName : "(your name)"
                    } with the Vehicle Services Group. We're calling about the vehicle you financed on ${
                      isPersonalized ? variables.monthYear : "(month, year)"
                    } with a monthly payment of ${
                      isPersonalized
                        ? variables.paymentAmount
                        : "(payment amount)"
                    }.`,
                    "step-1"
                  )
                }
                className="opacity-80 transition-opacity hover:opacity-100 p-1 text-slate-400 hover:text-white"
                title="Copy line"
              >
                {copiedSection === "step-1" ? (
                  <Check className="h-4 w-4 text-lime-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            <p className="text-lg sm:text-2xl font-medium leading-relaxed text-slate-100">
              &ldquo;Hi, {renderClientName()} this is {renderAgentName()} with the{" "}
              <strong className="text-white font-extrabold underline decoration-lime-400 underline-offset-4">
                Vehicle Services Group
              </strong>
              . We&apos;re calling about the vehicle you financed on{" "}
              {renderMonthYear()} with a monthly payment of{" "}
              {renderPaymentAmount()}.&rdquo;
            </p>

            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400 italic">
              <AlertCircle className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Pro Tip: Do not pause between your name and the company name. Speak in one fluid, authoritative breath.</span>
            </div>
          </article>

          {/* Step 2 & 3: The Notice Hook & Micro-Commitment */}
          <article className="group relative rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6 transition-all hover:border-slate-700 hover:bg-slate-950/90 shadow-md">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-xs font-black text-red-400">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Status Alert &amp; Micro-Commitment Question
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    "Our records indicate you haven't activated your vehicle's extended warranty yet. I just need to verify is your vehicle still in good running condition? Perfect!",
                    "step-2"
                  )
                }
                className="opacity-80 transition-opacity hover:opacity-100 p-1 text-slate-400 hover:text-white"
                title="Copy line"
              >
                {copiedSection === "step-2" ? (
                  <Check className="h-4 w-4 text-lime-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-lg sm:text-2xl font-medium leading-relaxed text-slate-100">
                &ldquo;Our records indicate you haven&apos;t activated your vehicle&apos;s extended warranty yet.&rdquo;
              </p>

              <div className="rounded-xl border border-lime-500/30 bg-lime-500/5 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 mb-1">
                  <Car className="h-4 w-4" />
                  Vehicle Condition Check
                </div>
                <p className="text-lg sm:text-2xl font-semibold text-white">
                  &ldquo;I just need to verify is your vehicle still in good running condition?&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-lime-500 px-3 py-1 text-sm font-black text-slate-950 shadow-md shadow-lime-500/20">
                    <CheckCircle2 className="h-4 w-4" />
                    &ldquo;Perfect!&rdquo;
                  </span>
                  <span className="text-xs text-slate-400 italic">
                    (Immediately acknowledge their affirmative answer and proceed)
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Step 4: The Transfer Bridge */}
          <article className="group relative rounded-2xl border-2 border-amber-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 sm:p-6 transition-all hover:border-amber-400/50 shadow-lg">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-xs font-black text-amber-400">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Transfer Transition (Bridge)
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    "I would just need to get you on with a Service Advisor to explain the details of your qualifications and review what it will cover, give me one second and I will introduce you. Okay?",
                    "step-3"
                  )
                }
                className="opacity-80 transition-opacity hover:opacity-100 p-1 text-slate-400 hover:text-white"
                title="Copy line"
              >
                {copiedSection === "step-3" ? (
                  <Check className="h-4 w-4 text-lime-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            <p className="text-lg sm:text-2xl font-medium leading-relaxed text-slate-100">
              &ldquo;I would just need to get you on with a{" "}
              <strong className="text-amber-400 font-extrabold">Service Advisor</strong>{" "}
              to explain the details of your qualifications and review what it will cover,
              give me one second and I will introduce you.{" "}
              <span className="font-extrabold text-white underline decoration-amber-400 decoration-2">
                Okay?
              </span>
              &rdquo;
            </p>

            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-300 border border-amber-500/30">
              <span>👉 (Wait for customer approval to transfer)</span>
            </div>
          </article>

          {/* Step 5: The Warm Introduction to Service Advisor */}
          <article className="group relative rounded-2xl border-2 border-lime-500/50 bg-gradient-to-br from-lime-950/30 via-slate-950 to-slate-900 p-5 sm:p-6 shadow-xl">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-black text-slate-950">
                  4
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
                  <Headphones className="h-3.5 w-3.5" />
                  Live Warm Transfer Introduction
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    `Hello Service Advisor, I have ${
                      isPersonalized ? variables.clientName : "(client's name)"
                    } on the line, can you please assist?`,
                    "step-4"
                  )
                }
                className="opacity-80 transition-opacity hover:opacity-100 p-1 text-slate-400 hover:text-white"
                title="Copy line"
              >
                {copiedSection === "step-4" ? (
                  <Check className="h-4 w-4 text-lime-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            <p className="text-xl sm:text-2xl font-bold leading-relaxed text-white">
              &ldquo;Hello{" "}
              <span className="text-lime-400 font-black">Service Advisor</span>, I have{" "}
              {renderClientName()} on the line, can you please assist?&rdquo;
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
              <span className="text-xs font-medium text-slate-400">
                Stay on the line until Service Advisor greets customer by name.
              </span>
              <span className="rounded-full bg-lime-400/20 px-2.5 py-0.5 text-[11px] font-bold text-lime-300 border border-lime-400/30">
                Transfer Ready
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

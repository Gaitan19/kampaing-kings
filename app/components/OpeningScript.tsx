"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  CheckCircle2,
  Copy,
  Check,
  Volume2,
  ArrowRight,
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
          ? "bg-lime-100 text-lime-900 px-1.5 py-0.5 rounded border border-lime-300"
          : "text-amber-700 underline decoration-amber-400"
      }`}
    >
      {isPersonalized ? variables.clientName || "(client's name)" : "(client's name)"}
    </span>
  );

  const renderAgentName = () => (
    <span
      className={`font-bold transition-colors ${
        isPersonalized
          ? "bg-lime-100 text-lime-900 px-1.5 py-0.5 rounded border border-lime-300"
          : "text-amber-700 underline decoration-amber-400"
      }`}
    >
      {isPersonalized ? variables.agentName || "(your name)" : "(your name)"}
    </span>
  );

  const renderMonthYear = () => (
    <span
      className={`font-bold transition-colors ${
        isPersonalized
          ? "bg-lime-100 text-lime-900 px-1.5 py-0.5 rounded border border-lime-300"
          : "text-amber-700 underline decoration-amber-400"
      }`}
    >
      {isPersonalized ? variables.monthYear || "(month, year)" : "(month, year)"}
    </span>
  );

  const renderPaymentAmount = () => (
    <span
      className={`font-bold transition-colors ${
        isPersonalized
          ? "bg-lime-100 text-lime-900 px-1.5 py-0.5 rounded border border-lime-300"
          : "text-amber-700 underline decoration-amber-400"
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
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-12 shadow-md">
        {/* Top Bar with Badge & Call Out Controls */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <PhoneCall className="h-4 w-4" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-red-600">
              Phase 1: Initial Hook &amp; Transfer Permission
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-200">
              <Volume2 className="h-3.5 w-3.5 text-lime-600" />
              <span>Pace: Confident &amp; Friendly</span>
            </div>

            <button
              onClick={onJumpToObjections}
              className="flex items-center gap-1.5 rounded-full border border-lime-500/50 bg-lime-50 px-3.5 py-1 text-xs font-bold text-lime-800 hover:bg-lime-100 transition-all shadow-2xs"
            >
              <span>Customer hesitating?</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Central Card Title matching Image 1 exact typography */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-red-600 tracking-tight">
            Opening Script
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-medium text-slate-500">
            Read clearly with relaxed authority. Do not pause between your name and company name.
          </p>
        </div>

        {/* The Verbatim Script Paragraphs matching Image 1 layout */}
        <div className="mx-auto max-w-4xl space-y-8 text-center text-slate-800">
          {/* Paragraph 1: Greeting & Lead Recognition */}
          <div className="group relative rounded-2xl border border-transparent bg-slate-50/70 p-5 sm:p-6 transition-all hover:border-slate-200 hover:bg-slate-50">
            <p className="text-lg sm:text-2xl font-normal leading-relaxed text-slate-800">
              Hi, {renderClientName()} this is {renderAgentName()} with the{" "}
              <strong className="text-slate-950 font-black">
                Vehicle Services Group
              </strong>
              <br className="hidden sm:inline" />
              {" "}We&apos;re calling about the vehicle you financed on{" "}
              {renderMonthYear()} with a monthly payment of{" "}
              {renderPaymentAmount()}.
            </p>

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
                    isPersonalized ? variables.paymentAmount : "(payment amount)"
                  }.`,
                  "step-1"
                )
              }
              className="mt-3 inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 shadow-2xs"
              title="Copy line"
            >
              {copiedSection === "step-1" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-lime-600" />
                  <span className="text-lime-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>Copy greeting</span>
                </>
              )}
            </button>
          </div>

          {/* Paragraph 2: Warranty Notice & Condition Check */}
          <div className="group relative rounded-2xl border border-transparent bg-slate-50/70 p-5 sm:p-6 transition-all hover:border-slate-200 hover:bg-slate-50">
            <p className="text-lg sm:text-2xl font-normal leading-relaxed text-slate-800">
              Our records indicate you haven&apos;t activated your vehicle&apos;s extended warranty yet.
            </p>
            <p className="mt-3 text-lg sm:text-2xl font-normal leading-relaxed text-slate-800">
              I just need to verify is your vehicle still in good running condition?
            </p>
            <p className="mt-3 text-xl sm:text-2xl font-extrabold text-lime-600">
              Perfect!
            </p>

            <button
              onClick={() =>
                copyToClipboard(
                  "Our records indicate you haven't activated your vehicle's extended warranty yet. I just need to verify is your vehicle still in good running condition? Perfect!",
                  "step-2"
                )
              }
              className="mt-3 inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 shadow-2xs"
              title="Copy line"
            >
              {copiedSection === "step-2" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-lime-600" />
                  <span className="text-lime-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>Copy question</span>
                </>
              )}
            </button>
          </div>

          {/* Paragraph 3: Transfer Bridge to Service Advisor */}
          <div className="group relative rounded-2xl border border-amber-200 bg-amber-50/40 p-5 sm:p-6 transition-all hover:bg-amber-50/70">
            <p className="text-lg sm:text-2xl font-normal leading-relaxed text-slate-800">
              I would just need to get you on with a{" "}
              <strong className="text-amber-600 font-extrabold">
                Service Advisor
              </strong>{" "}
              to explain the details of your qualifications and rewiew what it will cover,
              give me one second and I will introduce you.
              <br />
              <span className="font-extrabold text-slate-950">
                Okay?
              </span>{" "}
              <span className="text-slate-500 font-semibold text-base sm:text-lg">
                (Wait for customer approval to transfer)
              </span>
            </p>

            <button
              onClick={() =>
                copyToClipboard(
                  "I would just need to get you on with a Service Advisor to explain the details of your qualifications and review what it will cover, give me one second and I will introduce you. Okay?",
                  "step-3"
                )
              }
              className="mt-3 inline-flex items-center gap-1 rounded-lg border border-amber-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 shadow-2xs"
              title="Copy line"
            >
              {copiedSection === "step-3" ? (
                <>
                  <Check className="h-3.5 w-3.5 text-lime-600" />
                  <span className="text-lime-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>Copy transfer bridge</span>
                </>
              )}
            </button>
          </div>

          {/* Paragraph 4: Introduction to Service Advisor */}
          <div className="group relative rounded-2xl border-2 border-lime-500/60 bg-lime-50/50 p-5 sm:p-6 shadow-sm">
            <p className="text-xl sm:text-3xl font-bold leading-relaxed text-slate-950">
              Hello{" "}
              <span className="text-amber-600 font-black">
                Service Advisor
              </span>
              , I have {renderClientName()} on the line, can you please assist?
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() =>
                  copyToClipboard(
                    `Hello Service Advisor, I have ${
                      isPersonalized ? variables.clientName : "(client's name)"
                    } on the line, can you please assist?`,
                    "step-4"
                  )
                }
                className="inline-flex items-center gap-1 rounded-lg border border-lime-400 bg-lime-500 px-3 py-1.5 text-xs font-black text-slate-950 shadow-xs hover:bg-lime-400"
                title="Copy line"
              >
                {copiedSection === "step-4" ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy warm introduction</span>
                  </>
                )}
              </button>
              <span className="text-xs font-semibold text-slate-500">
                (Hold until advisor acknowledges and greets customer)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

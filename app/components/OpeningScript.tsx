"use client";

import React, { useState } from "react";
import { Copy, Check, MessageSquare } from "lucide-react";
import { FULL_OPENING_SCRIPT_TEXT } from "../data/scriptData";

export const OpeningScript: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="opening-script-section"
      aria-label="Opening Script"
      className="relative overflow-hidden rounded-2xl border-2 border-slate-300 bg-white p-3.5 sm:p-4 lg:p-5 shadow-md flex flex-col"
    >
      {/* Script Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3 shrink-0">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-slate-900" />
          <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase">
            Opening Script
          </h1>
        </div>

        <button
          onClick={() => handleCopy(FULL_OPENING_SCRIPT_TEXT, "full-script")}
          className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700 hover:border-slate-400 hover:bg-slate-100 transition-all shadow-2xs"
          title="Copy entire script to clipboard"
        >
          {copiedId === "full-script" ? (
            <>
              <Check className="h-3.5 w-3.5 text-slate-900" />
              <span className="text-slate-950 font-extrabold text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-[11px]">Copy Script</span>
            </>
          )}
        </button>
      </div>

      {/* Script Flow Blocks: Natural close spacing for effortless continuous reading */}
      <div className="space-y-2.5 sm:space-y-3">
        {/* STEP 1: GREETING & COURTESY CHECK */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 transition-all hover:bg-slate-50 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Step 1 • Initial Hook &amp; Greeting
            </span>
          </div>

          <p className="text-base sm:text-[17px] font-normal leading-snug text-slate-900">
            Hi,{" "}
            <span className="font-bold text-amber-700 underline decoration-amber-400">
              [Client&apos;s Name]
            </span>
            , this is{" "}
            <span className="font-bold text-amber-700 underline decoration-amber-400">
              (your name)
            </span>{" "}
            with the <strong className="font-bold text-slate-900">Vehicle Services Group</strong>.
          </p>

          <p className="mt-1.5 text-base sm:text-[17px] font-normal leading-snug text-slate-900">
            <strong className="font-bold text-slate-900">How are you doing today?</strong>{" "}
            <span className="font-bold text-amber-700 italic text-xs sm:text-sm">
              (Wait for customer response)
            </span>
          </p>

          {/* Sub-card: If customer asks back */}
          <div className="mt-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-900 flex items-center gap-2">
            <MessageSquare className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="text-xs sm:text-[13px] text-slate-900 leading-snug">
              <span className="font-bold text-amber-700">
                [If they ask &quot;How are you?&quot;]:
              </span>{" "}
              <span className="font-semibold text-slate-900">
                &ldquo;- As long as we&apos;re healthy and able to provide for our families, I think we&apos;re doing just fine.&rdquo;
              </span>
            </span>
          </div>
        </div>

        {/* STEP 2: FINANCE & VEHICLE VERIFICATION */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 transition-all hover:bg-slate-50 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Step 2 • Finance Verification
            </span>
          </div>

          <p className="text-base sm:text-[17px] font-normal leading-snug text-slate-900">
            We&apos;re calling about the vehicle you financed on{" "}
            <span className="font-bold text-amber-700 underline decoration-amber-400">
              (month, year)
            </span>
            , looks like you are paying{" "}
            <span className="font-bold text-amber-700 underline decoration-amber-400">
              (Monthlies)
            </span>{" "}
            correct?{" "}
            <span className="font-bold text-amber-700 italic text-xs sm:text-sm">
              (Wait for customer confirmation)
            </span>
          </p>
        </div>

        {/* STEP 3: RUNNING CONDITION CHECK */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 transition-all hover:bg-slate-50 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Step 3 • Condition Check
            </span>
          </div>

          <p className="text-base sm:text-[17px] font-normal leading-snug text-slate-900">
            So, how&apos;s your vehicle so far? Still running good?{" "}
            <strong className="font-bold text-slate-900">Perfect!</strong>
          </p>
        </div>

        {/* STEP 4: EXTENDED WARRANTY NOTICE & TRANSFER PERMISSION */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 transition-all hover:bg-slate-50 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Step 4 • Transfer Bridge &amp; Approval
            </span>
          </div>

          <p className="text-base sm:text-[17px] font-normal leading-snug text-slate-900">
            Our records show you haven&apos;t activated your{" "}
            <strong className="font-bold text-slate-900">Vehicle&apos;s Extended Warranty</strong>.
            So I have your <strong className="font-bold text-slate-900">Service Advisor</strong> on
            the line to provide you with some brief details of your qualifications and what it will
            cover.{" "}
            <strong className="font-bold text-slate-900">Okay?</strong>{" "}
            <span className="font-bold text-amber-700 italic text-xs sm:text-sm">
              (Wait for customer approval to transfer)
            </span>
          </p>
        </div>

        {/* STEP 5: WARM HAND-OFF TO SERVICE ADVISOR */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 transition-all hover:bg-slate-50 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Step 5 • Warm Introduction to Advisor
            </span>
          </div>

          <p className="text-base sm:text-[17px] font-normal leading-snug text-slate-900">
            &ldquo;Hello Service Advisor, I have{" "}
            <span className="font-bold text-amber-700 underline decoration-amber-400">
              (client&apos;s name)
            </span>{" "}
            on the line, can you please assist?&rdquo;
          </p>

          <p className="mt-1 text-xs font-bold text-amber-700 italic">
            (Hold on line until advisor acknowledges and greets customer)
          </p>
        </div>
      </div>
    </section>
  );
};

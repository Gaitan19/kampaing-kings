"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  User,
  Calendar,
  DollarSign,
  UserCheck,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  Settings2,
} from "lucide-react";
import { ScriptVariables } from "../data/scriptData";

interface CallerHudProps {
  variables: ScriptVariables;
  onVariablesChange: (vars: ScriptVariables) => void;
  isPersonalized: boolean;
  onTogglePersonalized: (val: boolean) => void;
  onCopyFullScript: () => void;
  fullScriptCopied: boolean;
}

export const CallerHud: React.FC<CallerHudProps> = ({
  variables,
  onVariablesChange,
  isPersonalized,
  onTogglePersonalized,
  onCopyFullScript,
  fullScriptCopied,
}) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [disposition, setDisposition] = useState<string>("In Call");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!timerRunning && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, seconds]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResetTimer = () => {
    setTimerRunning(false);
    setSeconds(0);
  };

  return (
    <section
      aria-label="Agent Call Controls and Personalization Hub"
      className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm transition-all">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3.5">
          {/* Live Call Timer & Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-300">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  timerRunning
                    ? "bg-lime-500 animate-pulse shadow-xs shadow-lime-500"
                    : "bg-slate-400"
                }`}
              />
              <span className="font-mono text-sm font-bold text-slate-800 tracking-wider">
                {formatTime(seconds)}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs transition-all ${
                  timerRunning
                    ? "border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100"
                    : "border-lime-500 bg-lime-50 text-lime-800 hover:bg-lime-100"
                }`}
                title={timerRunning ? "Pause Call Timer" : "Start Call Timer"}
                aria-label={timerRunning ? "Pause Timer" : "Start Timer"}
              >
                {timerRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
              </button>
              <button
                onClick={handleResetTimer}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                title="Reset Call Timer"
                aria-label="Reset Timer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Quick Disposition selector */}
            <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-200">
              <span className="text-xs text-slate-500 font-semibold">Outcome:</span>
              <select
                value={disposition}
                onChange={(e) => setDisposition(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-800 focus:border-lime-500 focus:outline-none"
              >
                <option value="In Call">🟢 Active Call</option>
                <option value="Transferred">⭐ Warm Transfer to Advisor</option>
                <option value="Callback">⏰ Call Back Scheduled</option>
                <option value="Voicemail">📼 Voicemail / No Answer</option>
                <option value="Unqualified">❌ Vehicle Ineligible / Broken</option>
                <option value="DNC">🛑 Do Not Call Requested</option>
              </select>
            </div>
          </div>

          {/* Right Action Controls: Toggle Personalized vs Template & Copy Script */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onTogglePersonalized(!isPersonalized)}
              className={`flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-bold transition-all border ${
                isPersonalized
                  ? "border-lime-500 bg-lime-500 text-slate-950 shadow-xs"
                  : "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
              title="Toggle between real lead data vs raw script placeholders"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                {isPersonalized ? "Live Lead Mode: Active" : "Script Template Mode"}
              </span>
            </button>

            <button
              onClick={onCopyFullScript}
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 shadow-2xs"
              title="Copy Entire Opening Script to Clipboard"
            >
              {fullScriptCopied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-lime-600" />
                  <span className="text-lime-700 font-extrabold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-600" />
                  <span>Copy Script</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100"
              title={isExpanded ? "Collapse Lead Inputs" : "Expand Lead Inputs"}
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Expandable Lead Fields Inputs */}
        {isExpanded && (
          <div className="mt-3.5 pt-1">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Settings2 className="h-3.5 w-3.5 text-lime-600" />
                Live Lead Dynamic Replacer (Instantly personalizes script &amp; responses)
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                Values auto-inject into highlighted fields
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {/* Client Name */}
              <div className="relative">
                <label className="mb-1 flex items-center gap-1 text-[11px] font-bold text-slate-700">
                  <User className="h-3 w-3 text-lime-600" />
                  (client&apos;s name)
                </label>
                <input
                  type="text"
                  value={variables.clientName}
                  onChange={(e) =>
                    onVariablesChange({ ...variables, clientName: e.target.value })
                  }
                  placeholder="e.g. Robert Smith"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 placeholder-slate-400 transition-colors focus:border-lime-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-lime-500"
                />
              </div>

              {/* Your Name */}
              <div className="relative">
                <label className="mb-1 flex items-center gap-1 text-[11px] font-bold text-slate-700">
                  <UserCheck className="h-3 w-3 text-lime-600" />
                  (your name)
                </label>
                <input
                  type="text"
                  value={variables.agentName}
                  onChange={(e) =>
                    onVariablesChange({ ...variables, agentName: e.target.value })
                  }
                  placeholder="e.g. Alex"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 placeholder-slate-400 transition-colors focus:border-lime-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-lime-500"
                />
              </div>

              {/* Month, Year */}
              <div className="relative">
                <label className="mb-1 flex items-center gap-1 text-[11px] font-bold text-slate-700">
                  <Calendar className="h-3 w-3 text-lime-600" />
                  (month, year)
                </label>
                <input
                  type="text"
                  value={variables.monthYear}
                  onChange={(e) =>
                    onVariablesChange({ ...variables, monthYear: e.target.value })
                  }
                  placeholder="e.g. October 2022"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 placeholder-slate-400 transition-colors focus:border-lime-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-lime-500"
                />
              </div>

              {/* Payment Amount */}
              <div className="relative">
                <label className="mb-1 flex items-center gap-1 text-[11px] font-bold text-slate-700">
                  <DollarSign className="h-3 w-3 text-lime-600" />
                  (payment amount)
                </label>
                <input
                  type="text"
                  value={variables.paymentAmount}
                  onChange={(e) =>
                    onVariablesChange({
                      ...variables,
                      paymentAmount: e.target.value,
                    })
                  }
                  placeholder="e.g. $420"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 placeholder-slate-400 transition-colors focus:border-lime-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-lime-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

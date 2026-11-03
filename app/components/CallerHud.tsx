"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check,
} from "lucide-react";
import { FULL_OPENING_SCRIPT_TEXT } from "../data/scriptData";

export const CallerHud: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [disposition, setDisposition] = useState<string>("In Call");
  const [scriptCopied, setScriptCopied] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleResetTimer = () => {
    setTimerRunning(false);
    setSeconds(0);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(FULL_OPENING_SCRIPT_TEXT);
    setScriptCopied(true);
    setTimeout(() => setScriptCopied(false), 2000);
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Live Call Duration Timer */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-300">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  timerRunning
                    ? "bg-lime-500 animate-pulse shadow-xs shadow-lime-500"
                    : "bg-slate-400"
                }`}
              />
              <span className="font-mono text-sm font-black text-slate-800 tracking-wider">
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

            {/* Disposition selector */}
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

          {/* Quick Script Copy Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyScript}
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 shadow-2xs"
              title="Copy entire verbatim script"
            >
              {scriptCopied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-lime-600" />
                  <span className="text-lime-700 font-extrabold">Script Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-600" />
                  <span>Copy Script</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

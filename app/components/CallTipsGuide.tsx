"use client";

import React, { useState } from "react";
import {
  Lightbulb,
  Award,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Headphones,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const CallTipsGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section
      id="agent-tips-section"
      aria-label="Agent Call Center Playbook & Coaching"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 shadow-xl">
        {/* Toggle Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/40">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                Agent Excellence &amp; Conversion Tactics
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Outbound Campaign <span className="text-lime-400">Playbook Rules</span>
              </h2>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
          >
            <span>{isOpen ? "Hide Training Playbook" : "Read Training Playbook"}</span>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {/* Content Body (visible by default or toggleable) */}
        {isOpen && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 pt-2 animate-fadeIn">
            {/* Rule 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center gap-2 text-lime-400 mb-2">
                <Lightbulb className="h-5 w-5" />
                <h3 className="text-sm font-black uppercase tracking-wider text-lime-400">
                  1. The Micro-Commitment
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When you ask: <em className="text-white">&ldquo;Is your vehicle still in good running condition?&rdquo;</em>, 94% of drivers reflexively say &ldquo;Yes&rdquo;. By following up immediately with <strong className="text-lime-400">&ldquo;Perfect!&rdquo;</strong>, you lock in psychological agreement before proposing the transfer.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center gap-2 text-lime-400 mb-2">
                <Headphones className="h-5 w-5" />
                <h3 className="text-sm font-black uppercase tracking-wider text-lime-400">
                  2. The Receptionist Posture
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Never argue or attempt to diagnose automotive issues yourself. Telling the client <em className="text-white">&ldquo;Think of me as the receptionist—I don&apos;t have mechanical details here&rdquo;</em> disarms confrontation and elevates the Service Advisor as the licensed hero.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center gap-2 text-lime-400 mb-2">
                <Shield className="h-5 w-5" />
                <h3 className="text-sm font-black uppercase tracking-wider text-lime-400">
                  3. TCPA &amp; Trust Compliance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Always state your agency name (<strong className="text-white">Vehicle Services Group</strong>) clearly. If a customer expresses anger or requests removal, immediately honor their preference: never debate a Do-Not-Call request.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { HeaderNav } from "./components/HeaderNav";
import { CallerHud } from "./components/CallerHud";
import { OpeningScript } from "./components/OpeningScript";
import { ObjectionsSection } from "./components/ObjectionsSection";
import { CallTipsGuide } from "./components/CallTipsGuide";
import { SeoStructuredData } from "./components/SeoStructuredData";
import { INITIAL_VARIABLES, ScriptVariables, ALL_OBJECTIONS } from "./data/scriptData";
import { ShieldCheck, HeartHandshake, CheckCircle } from "lucide-react";

export default function Home() {
  const [variables, setVariables] = useState<ScriptVariables>(INITIAL_VARIABLES);
  const [isPersonalized, setIsPersonalized] = useState<boolean>(true);
  const [fullScriptCopied, setFullScriptCopied] = useState<boolean>(false);

  // Jump handlers
  const handleJumpToScript = () => {
    const el = document.getElementById("opening-script-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleJumpToObjections = () => {
    const el = document.getElementById("objections-matrix-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleJumpToTips = () => {
    const el = document.getElementById("agent-tips-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Copy entire opening script
  const handleCopyFullScript = () => {
    const cName = isPersonalized ? variables.clientName : "(client's name)";
    const aName = isPersonalized ? variables.agentName : "(your name)";
    const mYear = isPersonalized ? variables.monthYear : "(month, year)";
    const pAmt = isPersonalized ? variables.paymentAmount : "(payment amount)";

    const fullScript = `Opening Script:
Hi, ${cName} this is ${aName} with the Vehicle Services Group. We're calling about the vehicle you financed on ${mYear} with a monthly payment of ${pAmt}.

Our records indicate you haven't activated your vehicle's extended warranty yet.
I just need to verify is your vehicle still in good running condition?
Perfect!

I would just need to get you on with a Service Advisor to explain the details of your qualifications and review what it will cover, give me one second and I will introduce you. Okay? (Wait for customer approval to transfer)

Hello Service Advisor, I have ${cName} on the line, can you please assist?`;

    navigator.clipboard.writeText(fullScript);
    setFullScriptCopied(true);
    setTimeout(() => setFullScriptCopied(false), 2000);
  };

  return (
    <>
      <SeoStructuredData />

      <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900 antialiased selection:bg-lime-400 selection:text-slate-950">
        {/* Navigation Bar */}
        <HeaderNav
          onJumpToScript={handleJumpToScript}
          onJumpToObjections={handleJumpToObjections}
          onJumpToTips={handleJumpToTips}
          activeCount={ALL_OBJECTIONS.length}
        />

        {/* Main Content Area */}
        <main className="flex-1 pb-16 space-y-4">
          {/* Hero Banner / Agent Cockpit HUD */}
          <CallerHud
            variables={variables}
            onVariablesChange={setVariables}
            isPersonalized={isPersonalized}
            onTogglePersonalized={setIsPersonalized}
            onCopyFullScript={handleCopyFullScript}
            fullScriptCopied={fullScriptCopied}
          />

          {/* Section 1: The Opening Script */}
          <OpeningScript
            variables={variables}
            isPersonalized={isPersonalized}
            onJumpToObjections={handleJumpToObjections}
          />

          {/* Section 2: Objections & Rebuttals Matrix with Interactive Details */}
          <ObjectionsSection
            variables={variables}
            isPersonalized={isPersonalized}
          />

          {/* Section 3: Training Playbook & Psychology Tips */}
          <CallTipsGuide />
        </main>

        {/* Professional Call Center Footer */}
        <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-700 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-lime-600" />
                Vehicle Services Group Outreach Operations
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-lime-600" />
                TCPA &amp; DNC Compliance Verified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="h-4 w-4 text-lime-600" />
                Licensed Service Advisor Transfer Protocol
              </span>
            </div>
            <p>
              Internal Training &amp; Dialing Dashboard for Automotive Extended Warranty Telemarketing Campaigns.
              All phone scripts conform to consumer protection guidelines.
            </p>
            <p className="text-[11px] text-slate-400">
              Vehicle Services Group &copy; 2026. For authorized call center representatives only.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

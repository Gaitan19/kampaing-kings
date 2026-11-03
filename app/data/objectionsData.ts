export interface ObjectionResponse {
  id: number;
  text: string;
  contextNote?: string;
}

export type ObjectionCategory =
  | "top6"
  | "vehicle"
  | "trust"
  | "pricing"
  | "compliance";

export interface ObjectionCategoryMeta {
  key: ObjectionCategory;
  label: string;
  badgeColor: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
  activeBgColor: string;
  icon: string;
}

export interface ObjectionItem {
  id: string;
  number: string;
  title: string;
  shortTitle?: string;
  isTop6: boolean;
  category: ObjectionCategory;
  categoryLabel: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    pillBg: string;
    pillText: string;
    accent: string;
  };
  icon: string;
  goal?: string;
  responses: ObjectionResponse[];
}

export const CATEGORIES_META: Record<ObjectionCategory, ObjectionCategoryMeta> = {
  top6: {
    key: "top6",
    label: "Most Frequent",
    badgeColor: "bg-amber-500 text-slate-950",
    borderColor: "border-amber-400",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50/70",
    activeBgColor: "bg-amber-500 text-slate-950",
    icon: "Flame",
  },
  vehicle: {
    key: "vehicle",
    label: "Vehicle & Records",
    badgeColor: "bg-emerald-500 text-slate-950",
    borderColor: "border-emerald-400",
    textColor: "text-emerald-700",
    bgColor: "bg-emerald-50/70",
    activeBgColor: "bg-emerald-500 text-slate-950",
    icon: "Car",
  },
  trust: {
    key: "trust",
    label: "Trust & Identity",
    badgeColor: "bg-sky-500 text-slate-950",
    borderColor: "border-sky-400",
    textColor: "text-sky-700",
    bgColor: "bg-sky-50/70",
    activeBgColor: "bg-sky-500 text-slate-950",
    icon: "ShieldCheck",
  },
  pricing: {
    key: "pricing",
    label: "Cost & Insurance",
    badgeColor: "bg-purple-500 text-slate-950",
    borderColor: "border-purple-400",
    textColor: "text-purple-700",
    bgColor: "bg-purple-50/70",
    activeBgColor: "bg-purple-500 text-slate-950",
    icon: "DollarSign",
  },
  compliance: {
    key: "compliance",
    label: "Resistance & Protocol",
    badgeColor: "bg-rose-500 text-slate-950",
    borderColor: "border-rose-400",
    textColor: "text-rose-700",
    bgColor: "bg-rose-50/70",
    activeBgColor: "bg-rose-500 text-slate-950",
    icon: "AlertOctagon",
  },
};

// Most Frequent are ordered first (01 to 08), followed by the rest
export const ALL_OBJECTIONS: ObjectionItem[] = [
  // --- MOST FREQUENT ---
  {
    id: "not-interested",
    number: "01",
    title: "NOT INTERESTED / I DON’T HAVE TIME",
    shortTitle: "NOT INTERESTED",
    isTop6: true,
    category: "top6",
    categoryLabel: "Most Frequent",
    icon: "Flame",
    colorScheme: {
      bg: "bg-amber-50/70 hover:bg-amber-100/60",
      border: "border-amber-400 hover:border-amber-500",
      text: "text-amber-950",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      pillBg: "bg-amber-100",
      pillText: "text-amber-800",
      accent: "#f59e0b",
    },
    goal: "Acknowledge immediately, eliminate cost fear, and ask for just two minutes.",
    responses: [
      {
        id: 1,
        text: "“I completely understand. A lot of people felt the same way at first—until they saw how much a single repair could cost without coverage. That’s exactly why we do not charge for the quote with the Service Advisor—just to help you make an informed decision. Fair enough?”",
      },
      {
        id: 2,
        text: "“Don't worry, I won't take too much of your time. The reason for my call today is to review the benefits associated with your vehicle and answer any questions you may have.”",
      },
      {
        id: 3,
        text: "“No problem. Give me just two minutes so we can review the protection options currently available for your vehicle, and then you can decide whether it's something worth considering.”",
      },
    ],
  },
  {
    id: "where-did-you-get-info",
    number: "02",
    title: "WHERE DID YOU GET MY INFO?",
    shortTitle: "WHERE DID YOU GET MY INFO?",
    isTop6: true,
    category: "top6",
    categoryLabel: "Most Frequent",
    icon: "HelpCircle",
    colorScheme: {
      bg: "bg-amber-50/70 hover:bg-amber-100/60",
      border: "border-amber-400 hover:border-amber-500",
      text: "text-amber-950",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      pillBg: "bg-amber-100",
      pillText: "text-amber-800",
      accent: "#f59e0b",
    },
    goal: "State registry and dealership record source calmly, then introduce advisor.",
    responses: [
      {
        id: 1,
        text: "“That’s a great question. Your information comes from your vehicle registration and dealership records, and we’re reaching out because your account may qualify for a benefit on your extended warranty. Let me bring my service advisor on the line for you. Okay”",
      },
      {
        id: 2,
        text: "“We partner with dealerships and vehicle registries nationwide, and your vehicle info is part of our outreach for protection eligibility.”",
      },
    ],
  },
  {
    id: "already-have-coverage",
    number: "03",
    title: "I ALREADY HAVE COVERAGE",
    shortTitle: "I ALREADY HAVE COVERAGE",
    isTop6: true,
    category: "top6",
    categoryLabel: "Most Frequent",
    icon: "ShieldCheck",
    colorScheme: {
      bg: "bg-amber-50/70 hover:bg-amber-100/60",
      border: "border-amber-400 hover:border-amber-500",
      text: "text-amber-950",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      pillBg: "bg-amber-100",
      pillText: "text-amber-800",
      accent: "#f59e0b",
    },
    goal: "Praise their proactive mindset and clarify that you are checking for additional unapplied benefits.",
    responses: [
      {
        id: 1,
        text: "“That’s great—and it’s always smart to have protection in place. This call isn’t about replacing anything you already have, it’s simply to review if there are any additional benefits available on your account.”",
      },
      {
        id: 2,
        text: "“Perfect—that means you already understand the value of having coverage. What we’re doing today is simply reviewing if your account qualifies for any updated options or additional protection.”",
      },
    ],
  },
  {
    id: "im-busy",
    number: "04",
    title: "I'M BUSY",
    shortTitle: "I'M BUSY",
    isTop6: true,
    category: "top6",
    categoryLabel: "Most Frequent",
    icon: "Clock",
    colorScheme: {
      bg: "bg-amber-50/70 hover:bg-amber-100/60",
      border: "border-amber-400 hover:border-amber-500",
      text: "text-amber-950",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      pillBg: "bg-amber-100",
      pillText: "text-amber-800",
      accent: "#f59e0b",
    },
    goal: "Offer a convenient callback time or mention time-sensitive discounts valid today.",
    responses: [
      {
        id: 1,
        text: "“Totally respect that—this will take a few minutes. If it’s a bad time, I can schedule a callback that works better for you. Would later today or tomorrow be easier?”",
      },
      {
        id: 2,
        text: "“Quick heads-up—we’re offering discounts that are only valid today. If you’ve got just a few minutes now, we can secure your quote.”",
      },
    ],
  },
  {
    id: "how-much-cost",
    number: "05",
    title: "HOW MUCH DOES IT COST?",
    shortTitle: "HOW MUCH DOES IT COST?",
    isTop6: true,
    category: "top6",
    categoryLabel: "Most Frequent",
    icon: "DollarSign",
    colorScheme: {
      bg: "bg-amber-50/70 hover:bg-amber-100/60",
      border: "border-amber-400 hover:border-amber-500",
      text: "text-amber-950",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      pillBg: "bg-amber-100",
      pillText: "text-amber-800",
      accent: "#f59e0b",
    },
    goal: "Explain that pricing is personalized and transition directly to the Service Advisor.",
    responses: [
      {
        id: 1,
        text: "“That’s why I’m connecting you—costs vary by car, but our plans are low cost. Let’s find out exactly what you qualify for...”",
      },
      {
        id: 2,
        text: "“I don’t handle pricing myself—I’m here to confirm your car is still in good condition so the Service Advisor can customize the options for you.”",
      },
    ],
  },
  {
    id: "what-kind-of-vehicle",
    number: "06",
    title: "WHAT KIND OF VEHICLE?",
    shortTitle: "WHAT KIND OF VEHICLE?",
    isTop6: true,
    category: "top6",
    categoryLabel: "Most Frequent",
    icon: "Car",
    colorScheme: {
      bg: "bg-amber-50/70 hover:bg-amber-100/60",
      border: "border-amber-400 hover:border-amber-500",
      text: "text-amber-950",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      pillBg: "bg-amber-100",
      pillText: "text-amber-800",
      accent: "#f59e0b",
    },
    goal: "Validate the monthly payment visible in system and explain the advisor has the full car record.",
    responses: [
      {
        id: 1,
        text: "“My system only shows your monthly payment for all your vehicles —I don’t have the specific vehicle details (proceed to validate the finance information).”",
      },
      {
        id: 2,
        text: "“I only see the finance info here—no specific make or model, the total payment I show for all your vehicles is (payment amount). That’s why I need to get you over to the Service Advisor who has the full picture and can go over every detail with you. Let me just verify, is the vehicle in good running conditions?”",
      },
    ],
  },
  {
    id: "purpose-of-call",
    number: "07",
    title: "PURPOSE OF THE CALL",
    shortTitle: "PURPOSE OF THE CALL",
    isTop6: true,
    category: "top6",
    categoryLabel: "Most Frequent",
    icon: "Target",
    colorScheme: {
      bg: "bg-amber-50/70 hover:bg-amber-100/60",
      border: "border-amber-400 hover:border-amber-500",
      text: "text-amber-950",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      pillBg: "bg-amber-100",
      pillText: "text-amber-800",
      accent: "#f59e0b",
    },
    goal: "Deliver a clear overview of the warranty extension and keep them on the line for the advisor.",
    responses: [
      {
        id: 1,
        text: "“This call is simply an opportunity to extend the warranty on your vehicle before any issues come up. Think of it as an extra layer of protection against unexpected breakdowns. If your vehicle is still running well, I’ll go ahead and connect you to the Service Advisor who’ll walk you through everything. Sounds good? Just stay on the line.”",
      },
      {
        id: 2,
        text: "“We’re reaching out to give you the chance to extend your vehicle’s warranty while it still qualifies. Major repairs can be expensive, and this coverage helps you avoid those surprise costs. If your vehicle’s running fine, I’ll get you over to the Service Advisor now so they can explain what’s available. Please stay in the line.”",
      },
    ],
  },
  {
    id: "who-is-this",
    number: "08",
    title: "WHO IS THIS?",
    shortTitle: "WHO IS THIS?",
    isTop6: true,
    category: "top6",
    categoryLabel: "Most Frequent",
    icon: "UserCheck",
    colorScheme: {
      bg: "bg-amber-50/70 hover:bg-amber-100/60",
      border: "border-amber-400 hover:border-amber-500",
      text: "text-amber-950",
      badgeBg: "bg-amber-500",
      badgeText: "text-slate-950",
      pillBg: "bg-amber-100",
      pillText: "text-amber-800",
      accent: "#f59e0b",
    },
    goal: "State company name first, then explain our role paying mechanical breakdown bills.",
    responses: [
      {
        id: 1,
        contextNote: "The first rebuttal is always",
        text: "“from the Vehicle Services Group”",
      },
      {
        id: 2,
        text: "“We’re the folks who help pay the bill when something major breaks. I’m just making sure you get the info before your eligibility changes.”",
      },
    ],
  },

  // --- VEHICLE & RECORDS GROUP ---
  {
    id: "not-my-vehicle",
    number: "09",
    title: "THAT’S NOT MY VEHICLE",
    isTop6: false,
    category: "vehicle",
    categoryLabel: "Vehicle & Records",
    icon: "CarFront",
    colorScheme: {
      bg: "bg-emerald-50/70 hover:bg-emerald-100/60",
      border: "border-emerald-300 hover:border-emerald-500",
      text: "text-emerald-950",
      badgeBg: "bg-emerald-500",
      badgeText: "text-slate-950",
      pillBg: "bg-emerald-100",
      pillText: "text-emerald-800",
      accent: "#10b981",
    },
    goal: "Normalize dealership records being outdated and pivot to their current vehicle.",
    responses: [
      {
        id: 1,
        text: "“Thank you for letting me know. Sometimes the information we receive from the dealership can be outdated—that’s exactly why we’re calling to verify it.”",
      },
      {
        id: 2,
        text: "“No problem at all. We can still review protection options for the vehicle you’re currently driving. Just to confirm, is your vehicle running in good condition right now?”",
      },
      {
        id: 3,
        text: "“That happens often. We just need to update the vehicle information so the Service Advisor can check what options are available for you.”",
      },
    ],
  },
  {
    id: "vehicle-info-wrong",
    number: "10",
    title: "THE VEHICLE INFORMATION IS WRONG (PRICE, LOAN, DATE)",
    isTop6: false,
    category: "vehicle",
    categoryLabel: "Vehicle & Records",
    icon: "FileWarning",
    colorScheme: {
      bg: "bg-emerald-50/70 hover:bg-emerald-100/60",
      border: "border-emerald-300 hover:border-emerald-500",
      text: "text-emerald-950",
      badgeBg: "bg-emerald-500",
      badgeText: "text-slate-950",
      pillBg: "bg-emerald-100",
      pillText: "text-emerald-800",
      accent: "#10b981",
    },
    goal: "Acknowledge finance data discrepancy, confirm identity and vehicle running condition, then transfer.",
    responses: [
      {
        id: 1,
        text: "“I apologize, sometimes the finance information we receive can be wrong but this is (Customer’s name) right? Okay. It was most likely about a vehicle you had recently financed, our records indicated you haven't activated an extended warranty yet on it, is it still in good running condition?”",
      },
      {
        id: 2,
        contextNote: "Warm transfer phrase to Service Advisor",
        text: "“Hello Service Advisor, I have (client's name) on the line, the loan info we had was incorrect but they did confirm the vehicle is in good running condition. Can you please assist?”",
      },
    ],
  },
  {
    id: "dont-remember-vehicle-info",
    number: "11",
    title: "I DON’T REMEMBER / KNOW IF THAT’S MY VEHICLE INFO",
    isTop6: false,
    category: "vehicle",
    categoryLabel: "Vehicle & Records",
    icon: "FileQuestion",
    colorScheme: {
      bg: "bg-emerald-50/70 hover:bg-emerald-100/60",
      border: "border-emerald-300 hover:border-emerald-500",
      text: "text-emerald-950",
      badgeBg: "bg-emerald-500",
      badgeText: "text-slate-950",
      pillBg: "bg-emerald-100",
      pillText: "text-emerald-800",
      accent: "#10b981",
    },
    goal: "Reassure them that this happens often and check eligibility for the car they are currently driving.",
    responses: [
      {
        id: 1,
        text: "“No problem at all—this happens often. What we can do is simply check the eligibility for the vehicle you're currently driving. If it’s running well, I’ll connect you with the Service Advisor so they can review the options with you.”",
      },
    ],
  },
  {
    id: "vehicle-totaled-sold",
    number: "12",
    title: "MY VEHICLE WAS TOTALED / I SOLD THE VEHICLE",
    isTop6: false,
    category: "vehicle",
    categoryLabel: "Vehicle & Records",
    icon: "RefreshCw",
    colorScheme: {
      bg: "bg-emerald-50/70 hover:bg-emerald-100/60",
      border: "border-emerald-300 hover:border-emerald-500",
      text: "text-emerald-950",
      badgeBg: "bg-emerald-500",
      badgeText: "text-slate-950",
      pillBg: "bg-emerald-100",
      pillText: "text-emerald-800",
      accent: "#10b981",
    },
    goal: "Congratulate them on upgrade and check protection on their replacement vehicle.",
    responses: [
      {
        id: 1,
        text: "“Got it—and congratulations if you upgraded. Many customers don’t realize their account may still qualify for protection on their new vehicle. Let me ask you real quick, do you currently have another vehicle you’re driving?”",
      },
      {
        id: 2,
        text: "“No problem at all—this happens often. What we can do is simply check the eligibility for the vehicle you're currently driving. If it’s running well, I’ll connect you with the Service Advisor so they can review the options with you.”",
      },
    ],
  },
  {
    id: "multiple-cars",
    number: "13",
    title: "I HAVE MULTIPLE CARS",
    isTop6: false,
    category: "vehicle",
    categoryLabel: "Vehicle & Records",
    icon: "Layers",
    colorScheme: {
      bg: "bg-emerald-50/70 hover:bg-emerald-100/60",
      border: "border-emerald-300 hover:border-emerald-500",
      text: "text-emerald-950",
      badgeBg: "bg-emerald-500",
      badgeText: "text-slate-950",
      pillBg: "bg-emerald-100",
      pillText: "text-emerald-800",
      accent: "#10b981",
    },
    goal: "Qualify primary car first (newer than 2011) and expand from there.",
    responses: [
      {
        id: 1,
        text: "“Perfect—many of our customers do! We can check coverage for each one, but let’s start with your main vehicle. Is it newer than 2011? Great, let’s go from there.”",
      },
    ],
  },

  // --- TRUST & IDENTITY GROUP ---
  {
    id: "no-service-with-you",
    number: "14",
    title: "I DON’T HAVE ANY SERVICE WITH YOU",
    isTop6: false,
    category: "trust",
    categoryLabel: "Trust & Identity",
    icon: "ShieldAlert",
    colorScheme: {
      bg: "bg-sky-50/70 hover:bg-sky-100/60",
      border: "border-sky-300 hover:border-sky-500",
      text: "text-sky-950",
      badgeBg: "bg-sky-500",
      badgeText: "text-slate-950",
      pillBg: "bg-sky-100",
      pillText: "text-sky-800",
      accent: "#0ea5e9",
    },
    goal: "Agree immediately ('Exactly') and highlight zero money down activation privilege.",
    responses: [
      {
        id: 1,
        text: "“Exactly, and that’s why we’re reaching out today—this is your opportunity to activate full protection with zero money down. If you give me one second, I’ll introduce you to the coverage expert who can go over the details.”",
      },
      {
        id: 2,
        text: "“That makes sense, and today’s call is to give you access to coverage options before anything happens. Would you be open to a quick explanation from a licensed advisor?”",
      },
    ],
  },
  {
    id: "where-are-you-located",
    number: "15",
    title: "WHERE ARE YOU LOCATED?",
    isTop6: false,
    category: "trust",
    categoryLabel: "Trust & Identity",
    icon: "MapPin",
    colorScheme: {
      bg: "bg-sky-50/70 hover:bg-sky-100/60",
      border: "border-sky-300 hover:border-sky-500",
      text: "text-sky-950",
      badgeBg: "bg-sky-500",
      badgeText: "text-slate-950",
      pillBg: "bg-sky-100",
      pillText: "text-sky-800",
      accent: "#0ea5e9",
    },
    goal: "State Dallas HQ while reassuring them that protection is nationwide across the USA.",
    responses: [
      {
        id: 1,
        text: "“Our headquarters are based in Dallas, Texas—but our protection plans are accepted at any licensed repair facility across the U.S.”",
      },
      {
        id: 2,
        text: "“We’re based in Texas but work nationwide. Wherever you are, your vehicle is covered coast to coast.”",
      },
    ],
  },
  {
    id: "concerned-about-scam",
    number: "16",
    title: "CUSTOMER IS CONCERNED ABOUT THE CALL BEING A SCAM",
    isTop6: false,
    category: "trust",
    categoryLabel: "Trust & Identity",
    icon: "ShieldQuestion",
    colorScheme: {
      bg: "bg-sky-50/70 hover:bg-sky-100/60",
      border: "border-sky-300 hover:border-sky-500",
      text: "text-sky-950",
      badgeBg: "bg-sky-500",
      badgeText: "text-slate-950",
      pillBg: "bg-sky-100",
      pillText: "text-sky-800",
      accent: "#0ea5e9",
    },
    goal: "Disarm suspicion with total transparency and zero obligation.",
    responses: [
      {
        id: 1,
        text: "“I understand your concern. That's why we want to be completely transparent. Our Service Advisor can explain everything in detail, and you can decide if it's something that benefits you.”",
      },
    ],
  },

  // --- PRICING & INSURANCE GROUP ---
  {
    id: "too-expensive",
    number: "17",
    title: "THAT’S TOO EXPENSIVE",
    isTop6: false,
    category: "pricing",
    categoryLabel: "Cost & Insurance",
    icon: "BadgeDollarSign",
    colorScheme: {
      bg: "bg-purple-50/70 hover:bg-purple-100/60",
      border: "border-purple-300 hover:border-purple-500",
      text: "text-purple-950",
      badgeBg: "bg-purple-500",
      badgeText: "text-slate-950",
      pillBg: "bg-purple-100",
      pillText: "text-purple-800",
      accent: "#a855f7",
    },
    goal: "Reframe price vs single repair cost and mention customized budget plans.",
    responses: [
      {
        id: 1,
        text: "“I understand why you’d feel that way. Most people think the same thing—until they see how expensive a single repair can be. That’s exactly why customers take a moment to review their options first.”",
      },
      {
        id: 2,
        text: "“The good news is we actually have plans designed to work around different budgets. That’s why the Service Advisor reviews the options with you before anything is decided.”",
      },
    ],
  },
  {
    id: "already-have-insurance",
    number: "18",
    title: "I ALREADY HAVE INSURANCE",
    isTop6: false,
    category: "pricing",
    categoryLabel: "Cost & Insurance",
    icon: "ShieldCheck",
    colorScheme: {
      bg: "bg-purple-50/70 hover:bg-purple-100/60",
      border: "border-purple-300 hover:border-purple-500",
      text: "text-purple-950",
      badgeBg: "bg-purple-500",
      badgeText: "text-slate-950",
      pillBg: "bg-purple-100",
      pillText: "text-purple-800",
      accent: "#a855f7",
    },
    goal: "Contrast accident coverage with mechanical breakdown coverage (engine, transmission).",
    responses: [
      {
        id: 1,
        text: "“Totally get that—and that’s actually why we’re calling. Insurance covers accidents. What we offer is mechanical breakdown coverage—engine, transmission, and more.”",
      },
      {
        id: 2,
        text: "“Insurance is for accidents, but most car issues aren’t caused by accidents—they’re mechanical. This plan fills that gap so you’re not stuck paying out-of-pocket.”",
      },
    ],
  },

  // --- RESISTANCE & PROTOCOL GROUP ---
  {
    id: "already-called-before",
    number: "19",
    title: "YOU ALREADY CALLED ME BEFORE AND I SAID I’M NOT INTERESTED",
    isTop6: false,
    category: "compliance",
    categoryLabel: "Resistance & Protocol",
    icon: "PhoneForwarded",
    colorScheme: {
      bg: "bg-rose-50/70 hover:bg-rose-100/60",
      border: "border-rose-300 hover:border-rose-500",
      text: "text-rose-950",
      badgeBg: "bg-rose-500",
      badgeText: "text-slate-950",
      pillBg: "bg-rose-100",
      pillText: "text-rose-800",
      accent: "#f43f5e",
    },
    goal: "Respect previous response and explain that account now qualifies for updated, newer options.",
    responses: [
      {
        id: 1,
        text: "“I understand, and I appreciate you letting me know. The reason we’re reaching out again is because your account may now qualify for updated options that weren’t available before.”",
      },
      {
        id: 2,
        text: "“That makes sense—and I completely respect that. We’re calling today because there may be better options available now for your vehicle. It only takes a moment to hear what’s changed.”",
      },
    ],
  },
  {
    id: "customer-rude-inappropriate",
    number: "20",
    title: "CUSTOMER IS RUDE OR USES INAPPROPRIATE LANGUAGE",
    isTop6: false,
    category: "compliance",
    categoryLabel: "Resistance & Protocol",
    icon: "PhoneOff",
    colorScheme: {
      bg: "bg-rose-50/70 hover:bg-rose-100/60",
      border: "border-rose-300 hover:border-rose-500",
      text: "text-rose-950",
      badgeBg: "bg-rose-500",
      badgeText: "text-slate-950",
      pillBg: "bg-rose-100",
      pillText: "text-rose-800",
      accent: "#f43f5e",
    },
    goal: "Stay professional, do not argue, execute immediate DNC list removal.",
    responses: [
      {
        id: 1,
        text: "“I will go ahead and remove your number from our calling list. Thank you for your time, and have a nice day.”",
      },
    ],
  },
];

export const TOP_6_OBJECTIONS = ALL_OBJECTIONS.filter((item) => item.isTop6);
export const MOST_FREQUENT_OBJECTIONS = TOP_6_OBJECTIONS;
export const OTHER_OBJECTIONS = ALL_OBJECTIONS.filter((item) => !item.isTop6);

// Universal In-Call Holding Tips to show inside every modal and call area
export const UNIVERSAL_HOLDING_TIPS = [
  {
    id: "warning-lights",
    text: "- Have you noticed any warning lights on your vehicle?",
    purpose: "Vehicle Check / Engagement",
  },
  {
    id: "waiting-advisor",
    text: "- I'm still here with you on the line. We're just waiting for the advisor to join us.",
    purpose: "Holding Bridge / Dead-Air Buffer",
  },
];

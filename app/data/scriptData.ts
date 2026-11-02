export interface ScriptVariables {
  clientName: string;
  agentName: string;
  monthYear: string;
  paymentAmount: string;
}

export interface ObjectionResponse {
  id: number;
  text: string;
  contextNote?: string;
}

export interface ObjectionItem {
  id: string;
  number: string;
  title: string;
  isCore: boolean; // True for the 4 core campaign cards
  category: "interest" | "trust" | "vehicle" | "financial" | "compliance";
  goal: string;
  goalSubtext?: string;
  openingTactics?: string[];
  tacticBanner?: string;
  responses: ObjectionResponse[];
  proTip?: string;
  accentColor?: string;
}

export const INITIAL_VARIABLES: ScriptVariables = {
  clientName: "John Doe",
  agentName: "Alex Rivera",
  monthYear: "March, 2023",
  paymentAmount: "$485",
};

export const CORE_OBJECTIONS: ObjectionItem[] = [
  {
    id: "not-interested",
    number: "01",
    title: '"I\'M NOT INTERESTED / I DON\'T HAVE TIME"',
    isCore: true,
    category: "interest",
    goal: "Keep them on the line & create curiosity.",
    goalSubtext: "Start with a question to get more info.",
    openingTactics: [
      '"Really quick, just so I understand—why wouldn\'t you be interested?"',
      '"Most people just want to hear what the options are before deciding."',
    ],
    tacticBanner: "AFTER YOU HAVE AN ANSWER, YOU HAVE SOMETHING TO WORK ON!",
    responses: [
      {
        id: 1,
        text: '"I completely understand. A lot of people felt the same way at first—until they saw how much a single repair could cost without coverage. That\'s exactly why we do not charge for the quote with the Service Advisor—just to help you make an informed decision. Fair enough?"',
      },
      {
        id: 2,
        text: '"Don\'t worry, I won\'t take too much of your time. The reason for my call today is to review the benefits associated with your vehicle and answer any questions you may have."',
      },
    ],
    proTip: "Acknowledge their time immediately. Frame the transfer as a 60-second complimentary benefit review rather than a sales pitch.",
  },
  {
    id: "no-service",
    number: "02",
    title: '"I DON\'T HAVE ANY SERVICE WITH YOU."',
    isCore: true,
    category: "trust",
    goal: "Clarify purpose and shift into value mode.",
    goalSubtext: "Position the call as an unactivated owner privilege.",
    responses: [
      {
        id: 1,
        text: '"Exactly, and that\'s why we\'re reaching out today—this is your opportunity to activate full protection with zero money down. If you give me one second, I\'ll introduce you to the coverage expert who can go over the details."',
      },
      {
        id: 2,
        text: '"That makes sense, and today\'s call is to give you access to coverage options before anything happens. Would you be open to a quick explanation from a licensed advisor?"',
      },
    ],
    proTip: "Agree with the customer right away ('Exactly'). Don't get defensive; treat their lack of existing service as the exact reason you are contacting them today.",
  },
  {
    id: "where-info",
    number: "03",
    title: '"WHERE DID YOU GET MY INFORMATION?"',
    isCore: true,
    category: "trust",
    goal: "Normalize the contact & build trust.",
    goalSubtext: "Highlight transparency and standard registry partnerships.",
    responses: [
      {
        id: 1,
        text: '"We partner with dealerships and vehicle registries nationwide, and your vehicle info is part of our outreach for protection eligibility."',
      },
      {
        id: 2,
        text: '"Your info came from your vehicle registration. When it was listed as financed, we were alerted that it may qualify for extended coverage. That is why we are providing you with an opportunity to acquire coverage today."',
      },
    ],
    proTip: "Speak with calm, matter-of-fact certainty. Highlighting public vehicle records and dealership registration partnerships disarms privacy skepticism instantly.",
  },
  {
    id: "what-vehicle",
    number: "04",
    title: '"WHAT KIND OF VEHICLE?"',
    isCore: true,
    category: "vehicle",
    goal: "Build trust, show limitations, and shift to Service Advisor.",
    goalSubtext: "Position yourself as the intake coordinator and the advisor as the specialist.",
    responses: [
      {
        id: 1,
        contextNote: "Reference the vehicle financed on {monthYear}",
        text: '"I only see the finance info here—no specific make or model, the total payment I show for all your vehicles is {paymentAmount}. That\'s why I need to get you over to the Service Advisor who has the full picture and can go over every detail with you. Let me just verify, is the vehicle in good running conditions?"',
      },
      {
        id: 2,
        contextNote: "Reference the vehicle financed on {monthYear}",
        text: '"We\'re calling about the vehicle you financed on {monthYear}. My system only shows your monthly payment for all your vehicles—I don\'t have the specific vehicle details (proceed to validate the finance information)."',
      },
      {
        id: 3,
        contextNote: "Reference the vehicle financed on {monthYear}",
        text: '"We\'re calling about the vehicle you financed on {monthYear}. Think of me as the receptionist—I\'m just confirming everything\'s up to date before you speak with the person who\'ll break down the coverage for you."',
      },
    ],
    proTip: "The 'Receptionist Analogy' is your strongest weapon here. When you admit you don't hold the full mechanical file, your credibility rises and the customer eagerly accepts the transfer.",
  },
];

export const ADDITIONAL_OBJECTIONS: ObjectionItem[] = [
  {
    id: "how-much-cost",
    number: "05",
    title: '"HOW MUCH DOES THIS COST?"',
    isCore: false,
    category: "financial",
    goal: "Deflect exact pricing without guessing and pivot to the Advisor quote.",
    goalSubtext: "Prevent sticker shock before vehicle mileage is verified.",
    openingTactics: [
      '"That is the most important question, and we want to ensure you get the absolute lowest rate."',
    ],
    responses: [
      {
        id: 1,
        text: '"Because rates are customized based on your vehicle\'s exact current mileage and drivetrain, my system doesn\'t give me a flat number. The Service Advisor has the live matrix and will pull up the exact dollar amount in less than 60 seconds with zero obligation. Let me get them on the line for you real quick."',
      },
      {
        id: 2,
        text: '"Our programs are designed to be zero down with monthly payments often lower than a single mechanic diagnostic fee. Let\'s have the Service Advisor verify which discount tier your vehicle qualifies for today."',
      },
    ],
    proTip: "Never guess a price. Emphasize that the Service Advisor provides a zero-commitment, tailored quote.",
  },
  {
    id: "already-covered",
    number: "06",
    title: '"I ALREADY HAVE A WARRANTY / FACTORY COVERAGE"',
    isCore: false,
    category: "vehicle",
    goal: "Educate on factory warranty expiration and gap risks.",
    goalSubtext: "Distinguish between original powertrain and full exclusionary coverage.",
    responses: [
      {
        id: 1,
        text: '"That\'s fantastic! Most factory warranties, however, only cover basic defects for 3 years or 36,000 miles before dropping off. Today\'s call is to ensure you lock in uninterrupted extended protection before unexpected mechanical or high-tech electrical failures hit your pocket. Let\'s have the Advisor double-check your expiration timeline."',
      },
      {
        id: 2,
        text: '"A lot of customers think their dealer warranty is comprehensive, but find out too late that computer modules, AC compressors, and sensors aren\'t included. The Service Advisor can compare your existing paperwork against full coverage at no charge."',
      },
    ],
    proTip: "Compliment them for having coverage first, then point out common warranty cliff expirations.",
  },
  {
    id: "send-mail-email",
    number: "07",
    title: '"JUST SEND IT TO ME IN THE MAIL / EMAIL ME"',
    isCore: false,
    category: "interest",
    goal: "Explain why tailored quotes cannot be mailed generically.",
    goalSubtext: "Secure verbal authorization for immediate transfer.",
    responses: [
      {
        id: 1,
        text: '"I would love to send that out to you, but because these coverage plans and rates are customized directly to your vehicle\'s mileage, sending a generic booklet wouldn\'t give you accurate figures. It only takes the Service Advisor about 90 seconds to review the terms with you so you know exactly what is going into your email. Hold on one second..."',
      },
      {
        id: 2,
        text: '"We definitely send the full written policy to your email or physical address! We just need the licensed advisor to verify your current odometer reading so we mail the exact contract approved for your VIN. One moment please."',
      },
    ],
    proTip: "Promise that written materials WILL be sent, but clarify that the Advisor must first customize the policy numbers.",
  },
  {
    id: "is-this-scam",
    number: "08",
    title: '"IS THIS A SCAM? / WHO ARE YOU?"',
    isCore: false,
    category: "trust",
    goal: "Reassure legitimacy, compliance, and consumer protection.",
    goalSubtext: "Establish company identity with calm professionalism.",
    responses: [
      {
        id: 1,
        text: '"I completely respect you asking—there are far too many automated robocalls out there. We are Vehicle Services Group, a legitimate administrative outreach team. We never ask for your bank account or sensitive personal credentials on this introductory call. Our goal is strictly to connect you with an authorized Service Advisor to see if you wish to activate extended protection."',
      },
      {
        id: 2,
        text: '"Not at all. You can verify our licensed administrators and all terms are backed by accredited contract providers with ASE-certified repair shop acceptance nationwide. Let\'s get you to the advisor who can provide our corporate credential references."',
      },
    ],
    proTip: "Don't sound offended. Acknowledge that customer caution is 100% smart and valid.",
  },
  {
    id: "dnc-remove",
    number: "09",
    title: '"TAKE ME OFF YOUR CALL LIST / DO NOT CALL"',
    isCore: false,
    category: "compliance",
    goal: "Remain 100% compliant, polite, and record DNC disposition.",
    goalSubtext: "Uphold telemarketing regulations and maintain customer goodwill.",
    responses: [
      {
        id: 1,
        text: '"I completely understand and respect that. I am immediately submitting your number to our internal Do-Not-Call registry right now. Please allow up to 24 hours for the dialer to completely clear. Thank you for your time and have a wonderful day."',
      },
    ],
    proTip: "Never push back against a clear DNC request. Immediate polite compliance protects the campaign license.",
  },
];

export const ALL_OBJECTIONS = [...CORE_OBJECTIONS, ...ADDITIONAL_OBJECTIONS];

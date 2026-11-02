export interface ObjectionResponse {
  id: number;
  text: string;
  contextNote?: string;
}

export interface ObjectionItem {
  id: string;
  number: string;
  title: string;
  isCore: boolean; // True for the core campaign cards (01 - 04)
  category: "interest" | "trust" | "vehicle" | "financial" | "compliance";
  goal: string;
  goalSubtext?: string;
  openingTactics?: string[];
  tacticBanner?: string;
  responses: ObjectionResponse[];
  proTip?: string;
  accentColor?: string;
}

export const OBJECTIONS_DATA: ObjectionItem[] = [
  {
    id: "not-interested-no-time",
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
    proTip: "Acknowledge their time immediately. Frame the transfer as a complimentary benefit review rather than a sales pitch.",
  },
  {
    id: "no-service-with-you",
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
    id: "where-did-you-get-info",
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
    id: "what-kind-of-vehicle",
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
  {
    id: "where-are-you-located",
    number: "05",
    title: '"WHERE ARE YOU LOCATED?"',
    isCore: false,
    category: "trust",
    goal: "Provide clear location while emphasizing nationwide coverage.",
    goalSubtext: "Establish national repair facility acceptance from coast to coast.",
    responses: [
      {
        id: 1,
        text: '"Our headquarters are based in Dallas, Texas—but our protection plans are accepted at any licensed repair facility across the U.S."',
      },
      {
        id: 2,
        text: '"We\'re based in Texas but work nationwide. Wherever you are, your vehicle is covered coast to coast."',
      },
    ],
    proTip: "Reassure the customer that no matter where they drive or move across the country, their plan is accepted by any certified mechanic or dealership.",
  },
  {
    id: "who-is-this",
    number: "06",
    title: '"WHO IS THIS?"',
    isCore: false,
    category: "trust",
    goal: "Identify service department role and pivot to Service Advisor.",
    goalSubtext: "State warranty administration specialty and introduce the advisor.",
    responses: [
      {
        id: 1,
        text: '"You\'re speaking with the service department, we handle policies for warranties on vehicles nationwide."',
      },
      {
        id: 2,
        text: '"We specialize in vehicle protection plans accepted by dealerships and repair shops across the country. I\'m just here to help introduce you to your Service Advisor."',
      },
      {
        id: 3,
        contextNote: "IF THEY CONTINUE INSISTING",
        text: '"We\'re calling on behalf of the Vehicle Service Center."',
      },
    ],
    proTip: "If they continue insisting on corporate identity, use the verified escalation line: 'We\'re calling on behalf of the Vehicle Service Center.'",
  },
  {
    id: "how-much-cost",
    number: "07",
    title: '"HOW MUCH DOES IT COST?"',
    isCore: false,
    category: "financial",
    goal: "Explain pricing factors and transition to Service Advisor.",
    goalSubtext: "Cost is customized to vehicle mileage and driving habits.",
    responses: [
      {
        id: 1,
        contextNote: "AUTO WARRANTY MEXICO TEAM",
        text: '"That\'s the great part—cost depends on your mileage and driving habits, but it\'s usually less than the cost of a single major repair. I\'ll get you to the Service Advisor to break it all down."',
      },
      {
        id: 2,
        text: '"That\'s why I\'m connecting you—costs vary by car, but our plans are low cost. Let\'s find out exactly what you qualify for..."',
      },
      {
        id: 3,
        text: '"I don\'t handle pricing myself—I\'m here to confirm your car is still in good condition so the Service Advisor can customize the options for you."',
      },
    ],
    proTip: "Never guess a price. Emphasize that plans are tailored and usually cost far less than a single mechanical breakdown.",
  },
  {
    id: "already-have-insurance",
    number: "08",
    title: '"I ALREADY HAVE INSURANCE."',
    isCore: false,
    category: "vehicle",
    goal: "Clarify difference between auto insurance and mechanical breakdown coverage.",
    goalSubtext: "Insurance covers accidents; warranty covers engine, transmission, and wear-and-tear.",
    responses: [
      {
        id: 1,
        text: '"Totally get that—and that\'s actually why we\'re calling. Insurance covers accidents. What we offer is mechanical breakdown coverage—engine, transmission, and more."',
      },
      {
        id: 2,
        text: '"Insurance won\'t cover when your car just stops working due to wear and tear. Our coverage kicks in when your check engine light comes on—not after a crash."',
      },
      {
        id: 3,
        text: '"Insurance is for accidents, but most car issues aren\'t caused by accidents—they\'re mechanical. This plan fills that gap so you\'re not stuck paying out-of-pocket."',
      },
    ],
    proTip: "The line 'Our coverage kicks in when your check engine light comes on—not after a crash' is the ultimate rebuttal for this objection.",
  },
  {
    id: "purpose-of-call",
    number: "09",
    title: '"PURPOSE OF THE CALL"',
    isCore: false,
    category: "interest",
    goal: "Clearly explain warranty extension opportunity and transfer to advisor.",
    goalSubtext: "Position the call as protection against surprise repair costs.",
    responses: [
      {
        id: 1,
        text: '"This call is simply an opportunity to extend the warranty on your vehicle before any issues come up. Think of it as an extra layer of protection against unexpected breakdowns. If your vehicle is still running well, I\'ll go ahead and connect you to the Service Advisor, who\'ll walk you through everything. Sounds good? Just stay on the line."',
      },
      {
        id: 2,
        text: '"We\'re reaching out to give you the chance to extend your vehicle\'s warranty while it still qualifies. Major repairs can be expensive, and this coverage helps you avoid those surprise costs. If your vehicle\'s running fine, I\'ll get you over to the Service Advisor now so they can explain what\'s available. Please stay in the line."',
      },
    ],
    proTip: "Use confident, warm phrasing and end with a smooth assumptive handoff: 'Please stay on the line.'",
  },
  {
    id: "multiple-cars",
    number: "10",
    title: '"I HAVE MULTIPLE CARS."',
    isCore: false,
    category: "vehicle",
    goal: "Turn multi-car ownership into an advantage by qualifying their primary vehicle first.",
    goalSubtext: "Check if the primary car is newer than 2011 to establish qualification.",
    responses: [
      {
        id: 1,
        text: '"Perfect—many of our customers do! We can check coverage for each one, but let\'s start with your main vehicle. Is it newer than 2011? Great, let\'s go from there."',
      },
    ],
    proTip: "Qualify their primary vehicle first. Once transferred, the Service Advisor can bundle all household vehicles for multi-car discounts.",
  },
  {
    id: "im-busy",
    number: "11",
    title: '"I\'M BUSY."',
    isCore: false,
    category: "interest",
    goal: "Respect their time while offering immediate fast quote or scheduled callback.",
    goalSubtext: "Highlight today's valid discounts or arrange a callback.",
    responses: [
      {
        id: 1,
        text: '"Totally respect that—this will take a few minutes. If it\'s a bad time, I can schedule a callback that works better for you. Would later today or tomorrow be easier?"',
      },
      {
        id: 2,
        text: '"Quick heads-up—we\'re offering discounts that are only valid today. If you\'ve got just a few minutes now, we can secure your quote."',
      },
    ],
    proTip: "Urgency ('discounts valid today') or an alternative callback choice ('later today or tomorrow?') keeps the lead alive.",
  },
  {
    id: "vehicle-totaled-sold",
    number: "12",
    title: '"MY VEHICLE WAS TOTALED / I SOLD THE VEHICLE."',
    isCore: false,
    category: "vehicle",
    goal: "Pivot seamlessly to checking eligibility for their current replacement vehicle.",
    goalSubtext: "Confirm their current car is running well and connect with the Service Advisor.",
    responses: [
      {
        id: 1,
        text: '"That\'s completely fine. A lot of people call in after changing vehicles. The good news is we may still be able to review protection options for the vehicle you have now. Is the vehicle currently running in good condition?"',
      },
      {
        id: 2,
        text: '"No problem at all—this happens often. What we can do is simply check the eligibility for the vehicle you\'re currently driving. If it\'s running well, I\'ll connect you with the Service Advisor so they can review the options with you."',
      },
    ],
    proTip: "Never drop the call when a car is sold or totaled. The owner almost certainly bought another vehicle that needs warranty coverage.",
  },
  {
    id: "already-called-not-interested",
    number: "13",
    title: '"YOU ALREADY CALLED ME BEFORE AND I SAID I\'M NOT INTERESTED."',
    isCore: false,
    category: "interest",
    goal: "Acknowledge past outreach and present newly updated qualifying options.",
    goalSubtext: "Explain that account parameters and promotional options have been updated.",
    responses: [
      {
        id: 1,
        text: '"I understand, and I appreciate you letting me know. The reason we\'re reaching out again is because your account may now qualify for updated options that weren\'t available before."',
      },
      {
        id: 2,
        text: '"That makes sense—and I completely respect that. We\'re calling today because there may be better options available now for your vehicle. It only takes a moment to hear what\'s changed."',
      },
    ],
    proTip: "Agreeing immediately removes friction. Emphasizing 'what has changed' sparks renewed curiosity.",
  },
  {
    id: "too-expensive",
    number: "14",
    title: '"THAT\'S TOO EXPENSIVE."',
    isCore: false,
    category: "financial",
    goal: "Reframe cost vs. sudden repair bills and highlight flexible budget tiers.",
    goalSubtext: "Explain that Service Advisors have multiple payment tiers to fit any budget.",
    responses: [
      {
        id: 1,
        text: '"I understand why you\'d feel that way. Most people think the same thing—until they see how expensive a single repair can be. That\'s exactly why customers take a moment to review their options first."',
      },
      {
        id: 2,
        text: '"The good news is we actually have plans designed to work around different budgets. That\'s why the Service Advisor reviews the options with you before anything is decided."',
      },
    ],
    proTip: "Validate their budget concern, then remind them that the Service Advisor can customize the plan to their financial comfort zone.",
  },
  {
    id: "not-my-vehicle",
    number: "15",
    title: '"THAT\'S NOT MY VEHICLE."',
    isCore: false,
    category: "vehicle",
    goal: "Normalize outdated dealer records and transition to protect their current car.",
    goalSubtext: "Verify running condition of current vehicle and connect to advisor.",
    responses: [
      {
        id: 1,
        text: '"Thank you for letting me know. Sometimes the information we receive from the dealership can be outdated—that\'s exactly why we\'re calling to verify it."',
      },
      {
        id: 2,
        text: '"No problem at all. We can still review protection options for the vehicle you\'re currently driving. Just to confirm, is your vehicle running in good condition right now?"',
      },
      {
        id: 3,
        text: '"That happens often. We just need to update the vehicle information so the Service Advisor can check what options are available for you."',
      },
    ],
    proTip: "Outdated dealership lists are common. Pivot directly to: 'What vehicle are you driving today?' and check its condition.",
  },
  {
    id: "vehicle-info-wrong",
    number: "16",
    title: '"THE VEHICLE INFORMATION IS WRONG (PRICE, LOAN, DATE)."',
    isCore: false,
    category: "vehicle",
    goal: "Thank customer for correction and explain why verification is conducted.",
    goalSubtext: "Clarify that finance records are updated live to ensure accurate quotes.",
    responses: [
      {
        id: 1,
        text: '"Thank you for clarifying that. Sometimes the finance information we receive from the dealership can be outdated—that\'s why we verify everything first."',
      },
      {
        id: 2,
        text: '"That\'s exactly why we\'re reaching out—to make sure the information is accurate before reviewing the coverage options available for you."',
      },
    ],
    proTip: "Use their correction as proof of why the call is happening: to ensure all details are accurate before presenting customized coverage.",
  },
  {
    id: "rude-inappropriate-language",
    number: "17",
    title: '"CUSTOMER IS RUDE OR USES INAPPROPRIATE LANGUAGE."',
    isCore: false,
    category: "compliance",
    goal: "Maintain composure, de-escalate, and execute immediate DNC removal.",
    goalSubtext: "Professional, polite exit conforming with telemarketing regulations.",
    responses: [
      {
        id: 1,
        text: '"I will go ahead and remove your number from our calling list. Thank you for your time, and have a nice day."',
      },
    ],
    proTip: "Never retaliate or argue. Deliver this single calm sentence and promptly disconnect and disposition the lead as DNC.",
  },
  {
    id: "concerned-about-scam",
    number: "18",
    title: '"CUSTOMER IS CONCERNED ABOUT THE CALL BEING A SCAM."',
    isCore: false,
    category: "trust",
    goal: "Address skepticism with total transparency and zero-obligation explanation.",
    goalSubtext: "Service Advisor provides clear details so customer decides for themselves.",
    responses: [
      {
        id: 1,
        text: '"I understand your concern. That\'s why we want to be completely transparent. Our Service Advisor can explain everything in detail, and you can decide if it\'s something that benefits you."',
      },
    ],
    proTip: "Empower the customer: by emphasizing that THEY decide whether it benefits them, you dismantle the suspicion of high-pressure sales.",
  },
];

export const CORE_OBJECTIONS: ObjectionItem[] = OBJECTIONS_DATA.filter(
  (item) => item.isCore
);

export const ADDITIONAL_OBJECTIONS: ObjectionItem[] = OBJECTIONS_DATA.filter(
  (item) => !item.isCore
);

export const ALL_OBJECTIONS: ObjectionItem[] = OBJECTIONS_DATA;

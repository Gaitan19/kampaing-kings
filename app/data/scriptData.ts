// Script constants and verbatim text
export const OPENING_SCRIPT_DATA = {
  title: "Opening Script",
  companyName: "Vehicle Services Group",
  greetingPart1: "Hi, [Client's Name], this is (your name) with the Vehicle Services Group.",
  howAreYouQuestion: "How are you doing today?",
  howAreYouWaitNote: "(Wait for customer response)",
  healthyReplyCondition: "If customer asks how you are doing:",
  healthyReply: "- As long as we're healthy and able to provide for our families, I think we're doing just fine.",
  vehicleFinanceNotice: "We're calling about the vehicle you financed on (month, year), looks like you are paying (Monthlies) correct?",
  financeWaitNote: "(Wait for customer confirmation)",
  vehicleConditionQuestion: "So, how's your vehicle so far? Still running good?",
  vehicleConditionAffirmation: "Perfect!",
  warrantyStatement: "Our records show you haven't activated your Vehicle's Extended Warranty.",
  advisorBridge: "So I have your Service Advisor on the line to provide you with some brief details of your qualifications and what it will cover. Okay?",
  transferApprovalNote: "(Wait for customer approval to transfer)",
  advisorHandoff: "Hello Service Advisor, I have (client's name) on the line, can you please assist?",
};

// Full verbatim text for 1-click clipboard copy
export const FULL_OPENING_SCRIPT_TEXT = `Opening Script
Hi, [Client's Name], this is (your name) with the Vehicle Services Group.
How are you doing today? (Wait for customer response)
[If customer asks how you are doing: "- As long as we're healthy and able to provide for our families, I think we're doing just fine."]

We're calling about the vehicle you financed on (month, year), looks like you are paying (Monthlies) correct? (Wait for customer confirmation)

So, how's your vehicle so far? Still running good? Perfect!

Our records show you haven't activated your Vehicle's Extended Warranty.
So I have your Service Advisor on the line to provide you with some brief details of your qualifications and what it will cover. Okay? (Wait for customer approval to transfer)

Hello Service Advisor, I have (client's name) on the line, can you please assist?`;

export type {
  ObjectionResponse,
  ObjectionItem,
  ObjectionCategory,
  ObjectionCategoryMeta,
} from "./objectionsData";

export {
  ALL_OBJECTIONS,
  TOP_6_OBJECTIONS,
  OTHER_OBJECTIONS,
  CATEGORIES_META,
  UNIVERSAL_HOLDING_TIPS,
} from "./objectionsData";

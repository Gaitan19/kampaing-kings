export interface ScriptVariables {
  clientName: string;
  agentName: string;
  monthYear: string;
  paymentAmount: string;
}

export const INITIAL_VARIABLES: ScriptVariables = {
  clientName: "John Doe",
  agentName: "Alex Rivera",
  monthYear: "March, 2023",
  paymentAmount: "$485",
};

// Re-export objections definitions and data from objectionsData.ts
export type { ObjectionResponse, ObjectionItem } from "./objectionsData";
export {
  OBJECTIONS_DATA,
  CORE_OBJECTIONS,
  ADDITIONAL_OBJECTIONS,
  ALL_OBJECTIONS,
} from "./objectionsData";

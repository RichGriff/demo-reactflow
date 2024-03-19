import ContextNode from "@/components/ContextNode";
import EvidenceNode from "@/components/EvidenceNode";
import GoalNode from "@/components/GoalNode";
import PropertyNode from "@/components/PropertyNode";
import StrategyNode from "@/components/StrategyNode";

export const nodeTypes = {
  goal: GoalNode,
  property: PropertyNode,
  strategy: StrategyNode,
  evidence: EvidenceNode,
  context: ContextNode
};
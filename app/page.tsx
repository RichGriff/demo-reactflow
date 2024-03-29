'use client'

import ActionButtons from "@/components/ActionButtons";
import ContextNode from "@/components/ContextNode";
import EvidenceNode from "@/components/EvidenceNode";
import Flow from "@/components/Flow";
import GoalNode from "@/components/GoalNode";
import PropertyNode from "@/components/PropertyNode";
import StrategyNode from "@/components/StrategyNode";
import UpdateNode from "@/components/updatetest";
import { BookOpenText, Database, FolderOpenDot, Goal, Route } from "lucide-react";
import { useEffect, useState } from "react";
import { useNodesState } from "reactflow";

const nodeTypes = {
  goal: GoalNode,
  property: PropertyNode,
  strategy: StrategyNode,
  evidence: EvidenceNode,
  context: ContextNode
};

const initNodes = [
  {
    id: '1',
    type: 'goal',
    data: { name: 'G1', type: 'goal', description: 'Lorem ipsum testing description', icon: <Goal /> },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'context',
    data: { name: 'C1', type: 'context', description: 'Lorem ipsum testing description, Lorem ipsum testing description', icon: <BookOpenText /> },

    position: { x: -350, y: 50 },
  },
  {
    id: '3',
    type: 'property',
    data: { name: 'P1', type: 'property', description: 'Lorem ipsum testing description', icon: <FolderOpenDot /> },
    position: { x: -200, y: 200 },
  },
  {
    id: '4',
    type: 'strategy',
    data: { name: 'S1', type: 'strategy', description: 'Lorem ipsum testing description', icon: <Route /> },
    position: { x: 200, y: 200 },
  },
  {
    id: '5',
    type: 'evidence',
    data: { name: 'E1', type: 'evidence', description: 'Lorem ipsum testing description', icon: <Database /> },
    position: { x: -400, y: 350 },
  },
  {
    id: '6',
    type: 'evidence',
    data: { name: 'E2', type: 'evidence', description: 'Lorem ipsum testing description', icon: <Database /> },
    position: { x: 0, y: 350 },
  },
];

const initEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    sourceHandle: 'a'
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    sourceHandle: 'b'
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
    sourceHandle: 'b'
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
  },
  {
    id: 'e3-6',
    source: '3',
    target: '6',
  },
];

export default function Home() {
  return (
    <>
      <Flow initNodes={initNodes} initEdges={initEdges} nodeTypes={nodeTypes} />
    </>
  );
}

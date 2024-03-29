'use client'

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  getConnectedEdges,
  getOutgoers,
  Edge,
  NodeProps,
  NodeTypes,
  OnNodesChange
} from 'reactflow';

import 'reactflow/dist/style.css';
import CustomNode from './PropertyNode';
import EvidenceNode from './EvidenceNode';
import { BookOpenText, Database, FolderOpenDot, Goal, Play, Route } from 'lucide-react';
import ContextNode from './ContextNode';
import PropertyNode from './PropertyNode';
import GoalNode from './GoalNode';
import StrategyNode from './StrategyNode';
import NodeEdit from './common/NodeEdit';
import ActionButtons from './ActionButtons';

import { shallow } from 'zustand/shallow';
import useStore from '@/data/store';

interface FlowProps {
}

const selector = (state: any) => ({
  nodes: state.nodes,
  edges: state.edges,
  nodeTypes: state.nodeTypes,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

function Flow({ }: FlowProps) {
  const { nodes, edges, nodeTypes, onNodesChange, onEdgesChange, onConnect } = useStore(selector, shallow);
  const [editOpen, setEditOpen] = useState(false)
  const [selectedNode, setSelectedNode] = useState<Node | any>(null)

  // const onConnect = useCallback((params: any ) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const handleNodeClick = (event: React.MouseEvent, node: Node | any) => {
    // let currentNodeID = node.id
    // alert(`Selected ${currentNodeID}`)
    // console.log(node.data)
    setSelectedNode(node)
    setEditOpen(true)
  }

  return (
    <div className='min-h-screen'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        className='min-h-screen'
        fitView
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls className='z-50' />
        <Background />
      </ReactFlow>
      <ActionButtons />
      <NodeEdit node={selectedNode} isOpen={editOpen} onClose={() => setEditOpen(false)} />
    </div>
  );
}

export default Flow
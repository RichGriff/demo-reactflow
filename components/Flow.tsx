'use client'

import { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  getConnectedEdges,
  getOutgoers
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
    data: { name: 'G1', type: 'goal', description: 'Lorem ipsum testing description', emoji: '😎', icon: <Goal /> },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'context',
    data: { name: 'C1', type: 'context', description: 'Lorem ipsum testing description, Lorem ipsum testing description', emoji: '🤓', icon: <BookOpenText /> },

    position: { x: -350, y: 50 },
  },
  {
    id: '3',
    type: 'property',
    data: { name: 'P1', type: 'property', description: 'Lorem ipsum testing description', emoji: '🤩', icon: <FolderOpenDot /> },
    position: { x: -200, y: 200 },
  },
  {
    id: '4',
    type: 'strategy',
    data: { name: 'S1', type: 'strategy', description: 'Lorem ipsum testing description', emoji: '🤩', icon: <Route /> },
    position: { x: 200, y: 200 },
  },
  {
    id: '5',
    type: 'evidence',
    data: { name: 'E1', type: 'evidence', description: 'Lorem ipsum testing description', emoji: '🤩', icon: <Database /> },
    position: { x: -400, y: 350 },
  },
  {
    id: '6',
    type: 'evidence',
    data: { name: 'E2', type: 'evidence', description: 'Lorem ipsum testing description', emoji: '🤩', icon: <Database /> },
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

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
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


  // TODO: Toggle Function
  // const [hidden, setHidden] = useState<boolean>(true);
  // const hide = (hidden:boolean , childEdgeID: any, childNodeID: any) => (nodeOrEdge: any) => {
  //   if (
  //     childEdgeID.includes(nodeOrEdge.id) ||
  //     childNodeID.includes(nodeOrEdge.id)
  //   )
  //     nodeOrEdge.hidden = hidden;
  //   return nodeOrEdge;
  // };
  // const checkTarget = (edge: any, id: number) => {
  //   let edges = edge.filter((ed: any) => {
  //     return ed.target !== id;
  //   });
  //   return edges;
  // };
  // let stack: any[] = []
  // let outgoers: any[] = [];
  // let connectedEdges: any[] = [];
  // const handleChildToggle = () => {
  //   alert('toggle')
  // }

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
        <Controls />
        <Background />
      </ReactFlow>
      <NodeEdit node={selectedNode} isOpen={editOpen} onClose={() => setEditOpen(false)} />
    </div>
  );
}

export default Flow
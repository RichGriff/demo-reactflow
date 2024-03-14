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
import CustomNode from './CustomNode';
import EvidenceNode from './EvidenceNode';


const nodeTypes = {
  custom: CustomNode,
  evidence: EvidenceNode
};

const initNodes = [
  {
    id: '1',
    type: 'custom',
    data: { name: 'G1', type: 'goal', description: 'Lorem ipsum testing description', emoji: '😎' },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'C1', type: 'context', description: 'Lorem ipsum testing description, Lorem ipsum testing description', emoji: '🤓' },

    position: { x: -300, y: 200 },
  },
  {
    id: '3',
    type: 'custom',
    data: { name: 'P1', type: 'project', description: 'Lorem ipsum testing description', emoji: '🤩' },
    position: { x: 0, y: 200 },
  },
  {
    id: '4',
    type: 'custom',
    data: { name: 'S1', type: 'strategy', description: 'Lorem ipsum testing description', emoji: '🤩' },
    position: { x: 300, y: 200 },
  },
  {
    id: '5',
    type: 'evidence',
    data: { name: 'E1', type: 'evidence', description: 'Lorem ipsum testing description', emoji: '🤩' },
    position: { x: -200, y: 350 },
  },
  {
    id: '6',
    type: 'evidence',
    data: { name: 'E2', type: 'evidence', description: 'Lorem ipsum testing description', emoji: '🤩' },
    position: { x: 200, y: 350 },
  },
];

const initEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
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
  const [hidden, setHidden] = useState<boolean>(true);

  const hide = (hidden:boolean , childEdgeID: any, childNodeID: any) => (nodeOrEdge: any) => {
    if (
      childEdgeID.includes(nodeOrEdge.id) ||
      childNodeID.includes(nodeOrEdge.id)
    )
      nodeOrEdge.hidden = hidden;
    return nodeOrEdge;
  };

  const checkTarget = (edge: any, id: number) => {
    let edges = edge.filter((ed: any) => {
      return ed.target !== id;
    });
    return edges;
  };

  let stack: any[] = []
  let outgoers: any[] = [];
  let connectedEdges: any[] = [];
  // const onConnect = useCallback((params: any ) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const handleNodeClick = (event: React.MouseEvent, node: Node | any) => {
    let currentNodeID = node.id
    stack.push(node)
    while(stack.length > 0) {
      let lastNode = stack.pop()
      let childNode = getOutgoers(lastNode, nodes, edges)
      let childEdge = checkTarget(getConnectedEdges([lastNode], edges), currentNodeID)
      childNode.map((goer: any, key: any) => {
        stack.push(goer)
        outgoers.push(goer)
      })
      childEdge.map((edge: any, key: any) => {
        connectedEdges.push(edge);
      });
    }

    let childNodeID = outgoers.map((node) => {
      return node.id;
    });
    let childEdgeID = connectedEdges.map((edge) => {
      return edge.id;
    });

    setNodes((node) => node.map(hide(hidden, childEdgeID, childNodeID)));
    setEdges((edge) => edge.map(hide(hidden, childEdgeID, childNodeID)));
    setHidden(!hidden);
  }

  return (
    <div className='min-h-screen'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        //@ts-ignore
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
    </div>
  );
}

export default Flow
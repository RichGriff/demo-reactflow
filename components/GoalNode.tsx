'use client'

import { ArrowDown, ChevronDown } from 'lucide-react';
import React, { memo, useState } from 'react';
import { Handle, NodeProps, Position, getConnectedEdges, getOutgoers } from 'reactflow';

function GoalNode({ data, ...props }: NodeProps) {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <div className={`px-4 py-2 shadow-md rounded-md bg-slate-900 text-white`}>
      <div className="flex">
        <div className={`rounded-full w-12 h-12 flex justify-center items-center bg-slate-900/20`}>
          {/* {data.emoji} */}
          {data.icon}
        </div>
        <div className="ml-2 w-[200px]">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-xs truncate">{data.description}</div>
        </div>
        <button onClick={() => alert('show/hide')}><ChevronDown size={16}/></button>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" id='b' position={Position.Bottom} />
      <Handle type="source" id='a' position={Position.Left} />
    </div>
  );
}

export default memo(GoalNode);

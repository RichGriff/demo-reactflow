'use client'

import { ChevronDown } from 'lucide-react';
import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import ToggleButton from './ToggleButton';

function StrategyNode({ data, ...props }: NodeProps) {
  return (
    <div className={`px-4 py-2 shadow-md rounded-md bg-indigo-500 text-white -skew-x-6`}>
      <div className="flex skew-x-6">
        <div className={`rounded-full w-12 h-12 flex justify-center items-center bg-slate-900/20`}>
          {/* {data.emoji} */}
          {data.icon}
        </div>
        <div className="ml-2 w-[200px]">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-xs truncate">{data.description}</div>
        </div>
        <ToggleButton node={props}/>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" id='b' position={Position.Bottom} />
      <Handle type="source" id='a' position={Position.Left} />
    </div>
  );
}

export default memo(StrategyNode);

'use client'

import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }: any) {
  return (
    <div className={`px-4 py-2 shadow-md rounded-md ${data.type != 'goal' ? 'bg-slate-900' : 'bg-indigo-500'} text-white`}>
      <div className="flex">
        {/* <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div> */}
        <div className="ml-2 w-[200px]">
          <div className="text-lg font-bold text-center">{data.name}</div>
          <div className="text-xs truncate">{data.description}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(CustomNode);

'use client'

import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }: any) {
  let classnames

  switch (data.type) {
    case 'goal':
      classnames = 'bg-slate-900'
      break;
    case 'context':
      classnames = 'bg-white border-2 border-slate-900 text-slate-900'
      break;
    default:
      classnames = 'bg-indigo-500'
      break;
  }
  return (
    <div className={`px-4 py-2 shadow-md rounded-md ${classnames} text-white`}>
      <div className="flex">
        <div className={`rounded-full w-12 h-12 flex justify-center items-center bg-slate-900/20`}>
          {/* {data.emoji} */}
          {data.icon}
        </div>
        <div className="ml-2 w-[200px]">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-xs truncate">{data.description}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(CustomNode);

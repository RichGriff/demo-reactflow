'use client'

import { Edge } from "reactflow";

export const initEdges = [
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
] as Edge[];
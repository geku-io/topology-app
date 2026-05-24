export const NodeKind = {
   CONTEXT: "context",
   SWITCH: "switch",
   PORT: "port",
} as const;

export const NodeState = {
   OK: "ok",
   WARNING: "warning",
   ERROR: "error",
} as const;

export const ConnectionKind = {
   LINE: "line",
   ARROW: "arrow",
   DASHED: "dashed",
} as const;

export type NodeKindType = (typeof NodeKind)[keyof typeof NodeKind];

type NodeStateType = (typeof NodeState)[keyof typeof NodeState];

type ConnectionKindType = (typeof ConnectionKind)[keyof typeof ConnectionKind];

export interface INode {
   id: string;
   label: string;
   type: NodeKindType;
   state: NodeStateType;
   parent?: string;
}

export interface IConnection {
   id: string;
   source: string;
   target: string;
   type: ConnectionKindType;
}

export interface ITopologyData {
   nodes: INode[];
   connections: IConnection[];
}

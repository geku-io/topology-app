import type { IConnection, INode } from "./entities.types";

export interface ICyNodeElement {
   data: INode;
}

export interface ICyEdgeElement {
   data: IConnection;
}

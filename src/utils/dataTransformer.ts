import { TopologyMode } from "../constants/topologyMode";
import {
   ConnectionKind,
   NodeKind,
   NodeState,
   type IConnection,
   type INode,
   type ITopologyData,
} from "../types/entities.types";

export const filterData = (data: ITopologyData) => {
   const rawNodes = data.nodes.filter(
      node =>
         Object.values(NodeKind).includes(node.type) &&
         Object.values(NodeState).includes(node.state),
   );
   const filteredNodes = rawNodes.filter(
      item => !item.parent || rawNodes.find(node => node.id === item.parent),
   );

   const filteredConnections = data.connections.filter(
      item =>
         item.source !== item.target &&
         filteredNodes.find(node => node.id === item.source) &&
         filteredNodes.find(node => node.id === item.target) &&
         Object.values(ConnectionKind).includes(item.type),
   );

   return {
      ...data,
      connections: filteredConnections,
      nodes: filteredNodes,
   };
};

const filterConnectionByMode = (
   nodes: INode[],
   connection: IConnection,
   types: string[],
) => {
   const sourceNode = nodes.find(node => node.id === connection.source);
   const targetNode = nodes.find(node => node.id === connection.target);
   const isIncluded =
      sourceNode?.type &&
      types.includes(sourceNode.type) &&
      targetNode?.type &&
      types.includes(targetNode.type);
   if (types.length === 1) {
      return isIncluded;
   } else {
      return isIncluded && sourceNode.type !== targetNode.type;
   }
};

export const filterDataByMode = (
   data: ITopologyData,
   modes: string[] | null,
): ITopologyData => {
   if (!modes) return data;

   const filteredNodes = modes.map(mode => {
      switch (mode) {
         case TopologyMode.CONTEXTS:
            return data.connections.filter(item =>
               filterConnectionByMode(data.nodes, item, [NodeKind.CONTEXT]),
            );

         case TopologyMode.PORTS:
            return data.connections.filter(item =>
               filterConnectionByMode(data.nodes, item, [NodeKind.PORT]),
            );

         case TopologyMode.SWITCHES:
            return data.connections.filter(item =>
               filterConnectionByMode(data.nodes, item, [NodeKind.SWITCH]),
            );

         case TopologyMode.CONTEXT_PORT:
            return data.connections.filter(item =>
               filterConnectionByMode(data.nodes, item, [
                  NodeKind.CONTEXT,
                  NodeKind.PORT,
               ]),
            );

         case TopologyMode.SWITCH_PORT:
            return data.connections.filter(item =>
               filterConnectionByMode(data.nodes, item, [
                  NodeKind.SWITCH,
                  NodeKind.PORT,
               ]),
            );

         case TopologyMode.CONTEXT_SWITCH:
            return data.connections.filter(item =>
               filterConnectionByMode(data.nodes, item, [
                  NodeKind.CONTEXT,
                  NodeKind.SWITCH,
               ]),
            );

         default:
            return data.connections;
      }
   });
   return {
      nodes: data.nodes,
      connections: filteredNodes.flat(),
   };
};

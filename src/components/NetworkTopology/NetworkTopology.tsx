import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import cytoscape, { type ElkLayoutOptions } from "cytoscape";
import elk from "cytoscape-elk";
import {
   ConnectionKind,
   NodeKind,
   NodeState,
   type ITopologyData,
} from "../../types/entities.types";
import type { ICyEdgeElement, ICyNodeElement } from "../../types/cy.types";
import styles from "./NetworkTopology.module.scss";
import { cyStyles } from "./topologyStylesheet";

cytoscape.use(elk);

function NetworkTopology() {
   const containerRef = useRef(null);
   const cyRef = useRef<null | cytoscape.Core>(null);
   const { data, isPending, isError } = useQuery<ITopologyData>({
      queryKey: ["data"],
      queryFn: async () => {
         const res = await fetch("/api");
         const data: ITopologyData = await res.json();
         const rawNodes = data.nodes.filter(
            node =>
               Object.values(NodeKind).includes(node.type) &&
               Object.values(NodeState).includes(node.state),
         );
         console.log(rawNodes);
         const filteredNodes = rawNodes.filter(
            item =>
               !item.parent || rawNodes.find(node => node.id === item.parent),
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
      },
   });
   useEffect(() => {
      if (!cyRef.current && containerRef.current && data) {
         const nodeElements = data.nodes.map<ICyNodeElement>(item => ({
            data: item,
         }));
         // console.log(nodeElements);
         const edgeElements = data.connections.map<ICyEdgeElement>(item => ({
            data: item,
         }));
         const coreCy = cytoscape({
            container: containerRef.current,
            elements: [...nodeElements, ...edgeElements],
            style: cyStyles,
            layout: {
               name: "elk",
               elk: {
                  algorithm: "layered",
                  "elk.direction": "RIGHT",
                  "elk.edgeRouting": "SPLINES",
                  "elk.spacing.nodeNode": "80",
                  "elk.layered.spacing.nodeNodeBetweenLayers": "120",
                  "elk.hierarchyHandling": "INCLUDE_CHILDREN",
                  "elk.portConstraints": "FREE",
                  "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
                  "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
                  "elk.layered.crossingMinimization.greedySwitch.type":
                     "TWO_SIDED",
                  "elk.padding": "[top=30, left=30, bottom=30, right=30]",
                  "elk.layered.compaction.postCompaction.strategy":
                     "EDGE_LENGTH",
                  "elk.layered.compaction.connectedComponents": "true",

                  // Рёбра между compound-нодами идут по краям, не через середину
                  "elk.layered.unnecessaryBendpoints": "true",
                  "elk.layered.edgeCenter.strategy": "CENTER",
               },
            } as ElkLayoutOptions,
         });
         cyRef.current = coreCy;
      }
   }, [data]);
   if (isPending) {
      return <div>Загрузка данных...</div>;
   }
   if (isError) {
      return <div>Произошла ошибка</div>;
   }
   return <div ref={containerRef} className={styles.container} />;
}

export default NetworkTopology;

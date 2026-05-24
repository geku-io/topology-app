import { useEffect, useRef } from "react";
import cytoscape, { type ElkLayoutOptions } from "cytoscape";
import elk from "cytoscape-elk";
import type { ICyEdgeElement, ICyNodeElement } from "../../types/cy.types";
import styles from "./NetworkTopology.module.scss";
import { cyStyles } from "./topologyStylesheet";
import type { ITopologyData } from "../../types/entities.types";

cytoscape.use(elk);

interface ITopologyProps {
   data: ITopologyData;
}

const NetworkTopology = ({ data }: ITopologyProps) => {
   const containerRef = useRef(null);
   const cyRef = useRef<null | cytoscape.Core>(null);
   useEffect(() => {
      if (containerRef.current && data) {
         console.log(data);
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
                  "elk.spacing.nodeNodeBetweenLayers": "50",
                  "elk.spacing.componentComponent": "50",
                  "elk.layered.spacing.nodeNodeBetweenLayers": "120",
                  "elk.hierarchyHandling": "INCLUDE_CHILDREN",
                  "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
                  "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
                  "elk.layered.crossingMinimization.greedySwitch.type":
                     "TWO_SIDED",
                  "elk.layered.compaction.postCompaction.strategy":
                     "EDGE_LENGTH",
                  "elk.layered.compaction.connectedComponents": "true",
               },
            } as ElkLayoutOptions,
         });
         cyRef.current = coreCy;
         return () => {
            coreCy.unmount();
            cyRef.current = null;
         };
      }
   }, [data]);
   return <div ref={containerRef} className={styles.container} />;
};

export default NetworkTopology;

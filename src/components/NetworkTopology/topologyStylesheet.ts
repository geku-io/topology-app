import type { StylesheetJson } from "cytoscape";

export const cyStyles: StylesheetJson = [
   {
      selector: "node[type='context']",
      style: {
         "background-color": "#1a1f2e",
         "background-opacity": 1,
         "border-width": 1,
         "border-color": "#2e3650",
         "border-style": "solid",
         label: "data(label)",
         "text-valign": "top",
         "text-halign": "center",
         "text-margin-y": -10,
         color: "#64748b",
         "font-size": 11,
         "font-weight": 600,
         "text-transform": "uppercase",
         padding: "20px",
         shape: "roundrectangle",
         "corner-radius": "8px",
         "z-index": 1,
      },
   },

   {
      selector: "node[type='switch']",
      style: {
         "background-color": "#0f172a",
         "background-opacity": 1,
         "border-width": 1,
         "border-color": "#3b82f6",
         "border-opacity": 0.3,
         label: "data(label)",
         "text-valign": "top",
         "text-halign": "center",
         "text-margin-y": -8,
         color: "#64748b",
         "font-size": 10,
         padding: "14px",
         shape: "roundrectangle",
         "corner-radius": "5px",
         "z-index": 2,
      },
   },

   {
      selector: "node[type='port']",
      style: {
         "background-color": "transparent",
         "background-image": "/port1.svg",
         "background-fit": "contain",
         "background-clip": "none",
         width: 40,
         height: 14,
         "text-margin-y": 3,
         label: "data(label)",
         "font-size": 10,
         color: "#475569",
         "text-valign": "bottom",
         "text-halign": "center",
         "z-index": 3,
      },
   },

   {
      selector: "node[state='ok']",
      style: { "border-color": "#22c55e", "border-opacity": 0.7 },
   },
   {
      selector: "node[state='ok'][type='port']",
      style: {
         "border-width": 1.5,
         "border-color": "#22c55e",
         "corner-radius": "5px",
         shape: "roundrectangle",
      },
   },
   {
      selector: "node[state='warning']",
      style: { "border-color": "#f59e0b", "border-opacity": 0.9 },
   },
   {
      selector: "node[state='warning'][type='port']",
      style: {
         "border-width": 1.5,
         "border-color": "#f59e0b",
         "corner-radius": "5px",
         shape: "roundrectangle",
      },
   },
   {
      selector: "node[state='error']",
      style: { "border-color": "#ef4444", "border-opacity": 1 },
   },
   {
      selector: "node[state='error'][type='port']",
      style: {
         "border-width": 1.5,
         "border-color": "#ef4444",
         "corner-radius": "5px",
         shape: "roundrectangle",
      },
   },

   {
      selector: "edge",
      style: {
         width: 1,
         "line-color": "#3b82f6",
         "target-arrow-shape": "none",
         "curve-style": "bezier",
         opacity: 0.7,
      },
   },
   {
      selector: "edge[type='arrow']",
      style: {
         "line-color": "#3b82f6",
         "line-opacity": 0.6,
         "target-arrow-color": "#3b82f6",
         "target-arrow-shape": "triangle",
         "arrow-scale": 0.7,
      },
   },
   {
      selector: "edge[type='dashed']",
      style: {
         "line-color": "#3b82f6",
         "line-style": "dashed",
         "line-dash-pattern": [5, 3],
      },
   },

   {
      selector: "node:selected",
      style: {
         "border-color": "#3b82f6",
         "border-width": 2,
         "border-opacity": 1,
      },
   },
   {
      selector: "edge:selected",
      style: {
         "line-color": "#60a5fa",
         width: 2,
         opacity: 1,
      },
   },
];

/* import type { StylesheetJson } from "cytoscape";

export const cyStyles: StylesheetJson = [
   {
      selector: "node[type='context']",
      style: {
         "background-color": "#c92d2d",
      },
   },
   {
      selector: "node[type='switch']",
      style: {
         "background-color": "#fff",
      },
   },
   {
      selector: "node[type='port']",
      style: {
         "background-color": "transparent",
         "background-image": "../../../public/port2.svg",
         "background-fit": "contain",
         "background-clip": "none",
         "border-width": 0,
         width: "20px",
         height: "7px",
         label: "data(label)",
         "font-size": "4px",
         "font-family": "Arial, sans-serif",
         color: "#000",
         "text-valign": "bottom",
         "text-halign": "center",
      },
   },
   {
      selector: "edge",
      style: {
         width: "1px",
         "line-color": "#0937b6",
      },
   },
]; */
import type { StylesheetJson } from "cytoscape";

const colors = {
   accent: "#3b82f6",
   bgDeep: "#0f172a",
   bgContext: "#1a1f2e",
   bgSwitch: "#0f172a",
   border: "#2e3650",
   borderSubtle: "#1e293b",
   textPrimary: "#e2e8f0",
   textMuted: "#64748b",
   textTiny: "#475569",
   ok: "#22c55e",
   warning: "#f59e0b",
   error: "#ef4444",
   edgeLine: "#334155",
   edgeArrow: "#3b82f6",
   edgeDashed: "#475569",
} as const;

export const cyStyles: StylesheetJson = [
   // ── Context ───────────────────────────────────────────
   {
      selector: "node[type='context']",
      style: {
         "background-color": colors.bgContext,
         "background-opacity": 1,
         "border-width": 1,
         "border-color": colors.border,
         "border-style": "solid",
         label: "data(label)",
         "text-valign": "top",
         "text-halign": "center",
         "text-margin-y": -10,
         color: colors.textMuted,
         "font-size": 11,
         "font-weight": 600,
         "text-transform": "uppercase",
         padding: "20px",
         shape: "roundrectangle",
         "corner-radius": "8px",
         "z-index": 1,
      },
   },

   // ── Switch ────────────────────────────────────────────
   {
      selector: "node[type='switch']",
      style: {
         "background-color": colors.bgSwitch,
         "background-opacity": 1,
         "border-width": 1,
         "border-color": colors.accent,
         "border-opacity": 0.3,
         label: "data(label)",
         "text-valign": "top",
         "text-halign": "center",
         "text-margin-y": -8,
         color: colors.textMuted,
         "font-size": 10,
         padding: "14px",
         shape: "roundrectangle",
         "corner-radius": "5px",
         "z-index": 2,
      },
   },

   // ── Port ──────────────────────────────────────────────
   {
      selector: "node[type='port']",
      style: {
         "background-color": "transparent",
         "background-image": "/port1.svg",
         "background-fit": "contain",
         "background-clip": "none",
         "border-width": 0,
         width: 40,
         height: 14,
         label: "data(label)",
         "font-size": 10,
         color: colors.textTiny,
         "text-valign": "bottom",
         "text-halign": "center",
         "z-index": 3,
      },
   },

   // ── Состояния ─────────────────────────────────────────
   {
      selector: "node[state='ok']",
      style: { "border-color": colors.ok, "border-opacity": 0.7 },
   },
   {
      selector: "node[state='warning']",
      style: { "border-color": colors.warning, "border-opacity": 0.9 },
   },
   {
      selector: "node[state='error']",
      style: { "border-color": colors.error, "border-opacity": 1 },
   },

   // ── Рёбра ─────────────────────────────────────────────
   {
      selector: "edge",
      style: {
         width: 1,
         "line-color": colors.edgeLine,
         "target-arrow-shape": "none",
         "curve-style": "bezier",
         opacity: 0.7,
      },
   },
   {
      selector: "edge[type='arrow']",
      style: {
         "line-color": colors.edgeArrow,
         "line-opacity": 0.6,
         "target-arrow-color": colors.edgeArrow,
         "target-arrow-shape": "triangle",
         "arrow-scale": 0.7,
      },
   },
   {
      selector: "edge[type='dashed']",
      style: {
         "line-color": colors.edgeDashed,
         "line-style": "dashed",
         "line-dash-pattern": [5, 3],
      },
   },

   // ── Hover ─────────────────────────────────────────────
   {
      selector: "node:hover",
      style: {
         "border-color": colors.accent,
         "border-opacity": 1,
         "border-width": 2,
         "z-index": 10,
      },
   },
   {
      selector: "edge:hover",
      style: {
         width: 2,
         "line-color": colors.accent,
         opacity: 1,
         "z-index": 10,
      },
   },

   // ── Selected ──────────────────────────────────────────
   {
      selector: "node:selected",
      style: {
         "border-color": colors.accent,
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
   {
      selector: "node[type='port']",
      style: {
         "border-width": 0,
         "border-opacity": 0,
      },
   },
];

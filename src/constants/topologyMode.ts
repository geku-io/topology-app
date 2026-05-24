import type { ISelectItem } from "../types/main.types";

export const TopologyMode = {
   PORTS: "ports",
   SWITCHES: "switches",
   CONTEXTS: "contexts",
   SWITCH_PORT: "switch_port",
   CONTEXT_PORT: "context_port",
   CONTEXT_SWITCH: "context_switch",
} as const;

export type TopologyModeType = (typeof TopologyMode)[keyof typeof TopologyMode];

export const topologyModes: ISelectItem[] = [
   {
      value: TopologyMode.PORTS,
      label: "Port-Port",
   },
   {
      value: TopologyMode.SWITCHES,
      label: "Switch-Switch",
   },
   {
      value: TopologyMode.CONTEXTS,
      label: "Context-Context",
   },
   {
      value: TopologyMode.SWITCH_PORT,
      label: "Switch-Port",
   },
   {
      value: TopologyMode.CONTEXT_PORT,
      label: "Context-Port",
   },
   {
      value: TopologyMode.CONTEXT_SWITCH,
      label: "Context-Switch",
   },
];

import { QRL } from "@builder.io/qwik";

export type FabricFunction = (context: FabricContext, ...args: never) => unknown;

export type FabricInjection = () => Array<[FabricFunction, QRL<FabricFunction>]>;

export interface FabricContext {
  state: Record<string, unknown>;
  types: Record<string, FabricFunction>;
}

import { FabricContext } from "./interfaces";

export const fabricSetState: (
  fabricContext: FabricContext,
  key: string,
  value: unknown
) => void = (fabricContext, key, value) => {
  const state = { ...fabricContext.state };
  state[key] = value;
  fabricContext.state = state;
};

export const fabricGetState: <T>(
  fabricContext: FabricContext,
  key: string
) => T | undefined = (fabricContext, key) => {
  let state = fabricContext.state;
  for (const keyPart of key.split(".")) {
    state = state[keyPart] as Record<string, unknown>;
  }
  return state as never;
};

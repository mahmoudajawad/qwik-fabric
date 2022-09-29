import { QRL, useContext } from "@builder.io/qwik";
import { FABRIC_CONTEXT } from "./context";
import { FabricContext, FabricFunction } from "./interfaces";

export const fabricSet = <T extends FabricFunction>(t: T, o: QRL<T>) => {
  const context = useContext(FABRIC_CONTEXT);
  if (context.types[t.name] != undefined) {
    throw Error(`Type ${t.name} already exists in fabric`);
  }
  context.types[t.name] = o;
};

export const fabricGet = <T extends FabricFunction>(
  context: FabricContext,
  t: T
): QRL<T> => {
  if (context.types[t.name] == undefined) {
    throw Error(`Type ${t.name} is not found in fabric`);
  }
  return context.types[t.name] as QRL<T>;
};

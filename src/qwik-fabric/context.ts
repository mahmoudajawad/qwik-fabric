import { createContext, useContext } from "@builder.io/qwik";
import { FabricContext } from "./interfaces";

export const FABRIC_CONTEXT = createContext<FabricContext>("FABRIC_CONTEXT");

export const useFabricContext = () => {
  const fabricContext = useContext(FABRIC_CONTEXT);
  return fabricContext;
};

import { FabricContext } from "~/qwik-fabric";
import { Pokemon } from "../models/pokemon";

export const IGetPokemonByNumberDataSource: (
  fabricContext: FabricContext,
  number: number
) => Promise<Pokemon> = () => {
  throw Error("Not implemented");
};

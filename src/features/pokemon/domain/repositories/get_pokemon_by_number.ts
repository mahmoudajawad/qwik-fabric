import { DataMonad } from "~/features/shared";
import { FabricContext } from "~/qwik-fabric";
import { Pokemon } from "../models/pokemon";

export const IGetPokemonByNumberRepository: (
  fabricContext: FabricContext,
  number: number
) => Promise<DataMonad<Pokemon, string>> = () => {
  throw Error("Not implemented");
};

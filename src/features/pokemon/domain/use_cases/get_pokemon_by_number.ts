import { DataMonad } from "~/features/shared";
import { FabricContext, fabricGet } from "~/qwik-fabric";
import { Pokemon } from "../models/pokemon";
import { IGetPokemonByNumberRepository } from "../repositories/get_pokemon_by_number";

export const IGetPokemonByNumber: (
  fabricContext: FabricContext,
  number: number
) => Promise<DataMonad<Pokemon, string>> = () => {
  throw Error("Not implemented");
};

export const GetPokemonByNumber: typeof IGetPokemonByNumber = (fabricContext, number) => {
    const getPokemonByNumberRepository = fabricGet(fabricContext, IGetPokemonByNumberRepository);
    return getPokemonByNumberRepository(fabricContext, number);
};

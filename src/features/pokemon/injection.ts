import { $ } from "@builder.io/qwik";
import { FabricInjection } from "~/qwik-fabric";
import { GetPokemonByNumberPokeApiDataSource } from "./data/data_sources/get_pokemon_by_number/pokeapi";
import { GetPokemonByNumberRepository } from "./data/repositories/get_pokemon_by_number";
import { IGetPokemonByNumberDataSource } from "./domain/data_sources/get_pokemon_by_number";
import { IGetPokemonByNumberRepository } from "./domain/repositories/get_pokemon_by_number";
import { GetPokemonByNumber, IGetPokemonByNumber } from "./domain/use_cases/get_pokemon_by_number";

export const featurePokemonInjection: FabricInjection = () => [
    [IGetPokemonByNumberDataSource, $(GetPokemonByNumberPokeApiDataSource)],
    [IGetPokemonByNumberRepository, $(GetPokemonByNumberRepository)],
    [IGetPokemonByNumber, $(GetPokemonByNumber)],
];

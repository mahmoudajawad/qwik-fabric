import { fabricGet, fabricGetState, fabricSetState } from "~/qwik-fabric";
import { IGetPokemonByNumberDataSource } from "../../domain/data_sources/get_pokemon_by_number";
import { Pokemon } from "../../domain/models/pokemon";
import { IGetPokemonByNumberRepository } from "../../domain/repositories/get_pokemon_by_number";

export const GetPokemonByNumberRepository: typeof IGetPokemonByNumberRepository =
  async (fabricContext, number) => {
    const stateKey = `pokemon:${number}`;
    let pokemon = fabricGetState<Pokemon>(fabricContext, stateKey);
    if (pokemon != undefined) {
      return { data: pokemon };
    }
    const getPokemonByNumberDataSource = fabricGet(
      fabricContext,
      IGetPokemonByNumberDataSource
    );
    try {
      pokemon = await getPokemonByNumberDataSource(
        fabricContext,
        number
      );

      fabricSetState(fabricContext, stateKey, pokemon);

      return {data: pokemon};
    } catch (err) {
      return { failure: `${(err as Error)?.message || err}` };
    }
  };

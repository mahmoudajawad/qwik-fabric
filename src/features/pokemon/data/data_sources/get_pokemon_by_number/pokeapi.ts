import { IGetPokemonByNumberDataSource } from "~/features/pokemon/domain/data_sources/get_pokemon_by_number";
import { IFetch } from "~/features/shared";
import { fabricGet } from "~/qwik-fabric";

export const GetPokemonByNumberPokeApiDataSource: typeof IGetPokemonByNumberDataSource =
  async (fabricContext, number) => {
    const fetch = fabricGet(fabricContext, IFetch);
    const response = await fetch(
      fabricContext,
      `https://pokeapi.co/api/v2/pokemon/${number}`
    );

    if (response.status != 200) {
        return Promise.reject(await response.text());
    }

    const pokemonData = await response.json();
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      types: pokemonData.types.map((type: any) => type.type.name),
      sprites: {
        back_default: pokemonData.sprites.back_default,
        back_female: pokemonData.sprites.back_female || undefined,
        back_shiny: pokemonData.sprites.back_shiny || undefined,
        back_shiny_female: pokemonData.sprites.back_shiny_female || undefined,
        front_default: pokemonData.sprites.front_default,
        front_female: pokemonData.sprites.front_female || undefined,
        front_shiny: pokemonData.sprites.front_shiny || undefined,
        front_shiny_female: pokemonData.sprites.front_shiny_female || undefined,
      },
    };
  };

import { describe, test, expect } from "@jest/globals";
import { GetPokemonByNumberPokeApiDataSource } from "~/features/pokemon/data/data_sources/get_pokemon_by_number/pokeapi";
import { FabricContext } from "~/qwik-fabric";
import { pokeApi5Response, pokemon5 } from "../../../shared";

describe("Feature Pokemon: Get Pokemon By Number PokeAPI Data Source", () => {
  test("Returns 'Pokemon'-object with Charmeleon info when called with number 5", async () => {
    const fabricContext: FabricContext = {
      state: {},
      types: {
        IFetch: () =>
          Promise.resolve(<Response>{
            status: 200,
            json: () => Promise.resolve(pokeApi5Response),
          }),
      },
    };
    expect(await GetPokemonByNumberPokeApiDataSource(fabricContext, 5)).toEqual(pokemon5);
  });

  test("Throws error when called with number 1000000", async () => {
    const fabricContext: FabricContext = {
      state: {},
      types: {
        IFetch: () =>
          Promise.resolve(<Response>{
            status: 404,
            text: () => Promise.resolve("Not Found"),
          }),
      },
    };
    expect(
      async () => await GetPokemonByNumberPokeApiDataSource(fabricContext, 1000000)
    ).rejects.toBe("Not Found");
  });
});

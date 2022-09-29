import { describe, test, expect } from "@jest/globals";
import { Pokemon } from "~/features/pokemon";
import { GetPokemonByNumber } from "~/features/pokemon/domain/use_cases/get_pokemon_by_number";
import { DataMonad } from "~/features/shared";
import { FabricContext } from "~/qwik-fabric";
import { pokemon5 } from "../../shared";

describe("Feature Pokemon: Get Pokemon By Number Use Case", () => {
  test("Returns 'DataMonad' with 'Pokemon'-object with Charmeleon info when called with number 5", async () => {
    const fabricContext: FabricContext = {
      state: {},
      types: {
        IGetPokemonByNumberRepository: () =>
          Promise.resolve({ data: pokemon5 }),
      },
    };

    expect(await GetPokemonByNumber(fabricContext, 5)).toEqual(<
      DataMonad<Pokemon, string>
    >{
      data: pokemon5,
    });
  });

  test("Returns 'DataMonad' with 'failure' when called with number 1000000", async () => {
    const fabricContext: FabricContext = {
      state: {},
      types: {
        IGetPokemonByNumberRepository: () =>
          Promise.resolve({ failure: "Not Found" }),
      },
    };

    expect(await GetPokemonByNumber(fabricContext, 1000000)).toEqual(<
      DataMonad<Pokemon, string>
    >{
      failure: "Not Found",
    });
  });
});

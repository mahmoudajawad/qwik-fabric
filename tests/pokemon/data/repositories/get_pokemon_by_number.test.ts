import { describe, test, expect } from "@jest/globals";
import { Pokemon } from "~/features/pokemon";
import { GetPokemonByNumberRepository } from "~/features/pokemon/data/repositories/get_pokemon_by_number";
import { DataMonad } from "~/features/shared";
import { FabricContext, fabricGetState } from "~/qwik-fabric";
import { pokemon5 } from "../../shared";

describe("Feature Pokemon: Get Pokemon By Number Repository", () => {
  test("Returns 'DataMonad' with 'Pokemon'-object with Charmeleon info when called with number 5, save value to Qwik Fabric state", async () => {
    const fabricContext: FabricContext = {
      state: {},
      types: {
        IGetPokemonByNumberDataSource: () => Promise.resolve(pokemon5),
      },
    };

    expect(await GetPokemonByNumberRepository(fabricContext, 5)).toEqual(<
      DataMonad<Pokemon, string>
    >{
      data: pokemon5,
    });

    expect(fabricGetState(fabricContext, "pokemon:5")).toEqual(pokemon5);
  });

  test("Returns 'DataMonad' with 'Pokemon'-object with Charmeleon info when called with number 5, using value from Qwik Fabric state", async () => {
    const fabricContext: FabricContext = {
      state: {
        "pokemon:5": pokemon5,
      },
      types: {},
    };

    expect(await GetPokemonByNumberRepository(fabricContext, 5)).toEqual(<
      DataMonad<Pokemon, string>
    >{
      data: pokemon5,
    });
  });

  test("Returns 'DataMonad' with 'failure' when called with number 1000000", async () => {
    const fabricContext: FabricContext = {
      state: {},
      types: {
        IGetPokemonByNumberDataSource: () => Promise.reject("Not Found"),
      },
    };

    expect(await GetPokemonByNumberRepository(fabricContext, 1000000)).toEqual(<
      DataMonad<Pokemon, string>
    >{
      failure: "Not Found",
    });
  });
});

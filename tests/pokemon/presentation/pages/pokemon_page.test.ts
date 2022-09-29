import { JSXNode, render } from "@builder.io/qwik";
import { describe, test, expect, beforeEach, afterAll } from "@jest/globals";
import {
  PokemonPage,
  PokemonPageFormSubmit,
  PokemonPageProps,
} from "~/features/pokemon/presentation/pages/pokemon_page";
import { QwikFabricBed } from "~/qwik-fabric";
import { pokemon5 } from "../../shared";

describe("Feature Pokemon: Pokemon Page", () => {
  // [REF] https://gitlab.com/openbravo/product/openbravo/-/merge_requests/324/diffs
  let consoleHasErrorOrWarning = false;
  const { error, warn } = console;

  global.console.error = (...args) => {
    consoleHasErrorOrWarning = true;
    error(...args);
  };
  global.console.warn = (...args) => {
    consoleHasErrorOrWarning = true;
    warn(...args);
  };

  beforeEach(() => {
    consoleHasErrorOrWarning = false;
  });

  afterAll(() => {
    if (consoleHasErrorOrWarning) {
      throw Error("Console has error[s] or warning[s]");
    }
  });

  test("Page displays pokemon-card component when searched using number 5", async () => {
    const fabricContext = {
      types: {
        IGetPokemonByNumber: () => Promise.resolve({ data: pokemon5 }),
      },
      state: {},
    };
    const pokemonPageState: Required<PokemonPageProps>["initialState"] = {
      isLoading: false,
      pokemonNumber: 5,
    };

    const fabric = QwikFabricBed(
      {
        fabricContext,
        element: PokemonPage(
          { initialState: pokemonPageState },
          null
        ) as JSXNode,
      },
      null
    ) as JSXNode;
    await render(document, fabric);
    await PokemonPageFormSubmit(fabricContext, pokemonPageState);
    expect(pokemonPageState.pokemon).toEqual(pokemon5);
  });
});

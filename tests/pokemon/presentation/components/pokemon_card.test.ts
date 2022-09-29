import { JSXNode, render } from "@builder.io/qwik";
import { describe, test, expect, beforeEach, afterAll } from "@jest/globals";
import { PokemonCard } from "~/features/pokemon/presentation/components/pokemon_card";
import { pokemon5 } from "../../shared";

describe("Feature Pokemon: Pokemon Card Component", () => {
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

  test("Component shows Pokemon info for Charmeleon from provided property", async () => {
    const pokemonCard = PokemonCard({pokemon: pokemon5}, null) as JSXNode;
    await render(document, pokemonCard);
    expect(document.querySelector('h1')?.innerHTML).toEqual('charmeleon (#5)');
    expect(document.querySelector('h3')?.innerHTML).toEqual('fire');
    expect(document.querySelectorAll('img').length).toEqual(4);
  });
});

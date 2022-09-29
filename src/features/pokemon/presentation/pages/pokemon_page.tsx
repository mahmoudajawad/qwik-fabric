import { component$, useStore } from "@builder.io/qwik";
import { FabricContext, fabricGet, useFabricContext } from "~/qwik-fabric";
import { Pokemon } from "../../domain/models/pokemon";
import { IGetPokemonByNumber } from "../../domain/use_cases/get_pokemon_by_number";
import { PokemonCard } from "../components/pokemon_card";

export interface PokemonPageProps {
  initialState?: {
    isLoading: boolean;
    pokemonNumber?: number;
    pokemon?: Pokemon;
    err?: string;
  };
}

export const PokemonPageFormSubmit = async (
  fabricContext: FabricContext,
  state: Required<PokemonPageProps>["initialState"]
) => {
  if (state.isLoading) return;

  state.isLoading = true;
  const getPokemonByNumber = fabricGet(fabricContext, IGetPokemonByNumber);
  const { data, failure } = await getPokemonByNumber(
    fabricContext,
    state.pokemonNumber!
  );
  state.err = failure;
  state.pokemon = data;
  state.isLoading = false;
};

export const PokemonPage = component$<PokemonPageProps>(({ initialState }) => {
  const state = useStore<Required<PokemonPageProps>["initialState"]>(
    initialState || { isLoading: false }
  );

  const fabricContext = useFabricContext();

  return (
    <div>
      <h1>QwikeDex</h1>
      <form
        onSubmit$={() => PokemonPageFormSubmit(fabricContext, state)}
        preventdefault:submit
      >
        <input
          type="number"
          onChange$={($event) => {
            const input = $event.target as HTMLInputElement;
            state.pokemonNumber = input.valueAsNumber;
          }}
          disabled={state.isLoading}
          required
        />
        <button type="submit">Find by Number</button>
      </form>

      {state.isLoading ? (
        <h2>Loading...</h2>
      ) : state.err ? (
        <h2>{state.err}</h2>
      ) : state.pokemon ? (
        <PokemonCard pokemon={state.pokemon} />
      ) : (
        <></>
      )}
    </div>
  );
});

import { component$ } from "@builder.io/qwik";
import { Pokemon } from "../../domain/models/pokemon";

export const PokemonCard = component$<{ pokemon: Pokemon }>(({ pokemon }) => {
  return (
    <div>
      <h1 style="text-transform: capitalize">
        {pokemon.name} (#{pokemon.id})
      </h1>
      <h3 style="text-transform: capitalize">{pokemon.types.join(", ")}</h3>
      {Object.entries(pokemon.sprites)
        .filter((entry) => entry[1] != undefined)
        .map(([sprite, url]) => (
          <img src={url} alt={sprite} />
        ))}
    </div>
  );
});

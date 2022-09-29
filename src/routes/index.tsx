import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonPage } from "~/features/pokemon/presentation/pages/pokemon_page";

export default component$(() => {
  return <PokemonPage />
});

export const head: DocumentHead = {
  title: "Welcome to QwikeDex",
};

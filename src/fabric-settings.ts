import { $ } from "@builder.io/qwik";
import { featurePokemonInjection } from "./features/pokemon";
import { Fetch, IFetch } from "./features/shared";
import { FabricInjection } from "./qwik-fabric";

export const fabricInjection: FabricInjection = () => [
  [IFetch, $(Fetch)],
  ...featurePokemonInjection(),
];

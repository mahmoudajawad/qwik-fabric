import { FabricContext } from "~/qwik-fabric";

export const IFetch: (
  fabricContext: FabricContext,
  url: string
) => Promise<Response> = () => {
  throw Error("Not implemented");
};

export const Fetch: typeof IFetch = (_, url) => {
  return fetch(url);
};

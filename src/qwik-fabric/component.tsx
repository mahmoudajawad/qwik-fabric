import {
  component$,
  JSXNode,
  QRL,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { FABRIC_CONTEXT } from "./context";
import { FabricContext, FabricInjection } from "./interfaces";

export const QwikFabric = component$<{ injection$?: QRL<FabricInjection> }>(
  ({ injection$ }) => {
    const fabricState = useStore<FabricContext>({
      state: {},
      types: {},
    });
    useContextProvider(FABRIC_CONTEXT, fabricState);

    if (injection$) {
      injection$().then((injection) =>
        injection.forEach(([t, o]) => (fabricState.types[t.name] = o as never))
      );
    }

    return <Slot />;
  }
);

export const QwikFabricBed = component$<{
  fabricContext: FabricContext;
  element: JSXNode;
}>(({ fabricContext, element }) => {
  const state = useStore<FabricContext>(fabricContext);
  useContextProvider(FABRIC_CONTEXT, state);

  return element;
});

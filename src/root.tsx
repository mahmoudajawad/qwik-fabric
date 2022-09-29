import { component$ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikFabric } from "~/qwik-fabric";

import { RouterHead } from "./components/router-head/router-head";
import { fabricInjection } from "./fabric-settings";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <QwikFabric injection$={() => fabricInjection()}>
          <RouterOutlet />
          <ServiceWorkerRegister />
        </QwikFabric>
      </body>
    </QwikCity>
  );
});

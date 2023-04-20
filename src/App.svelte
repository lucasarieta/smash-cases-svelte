<script lang="ts">
  import Router from "svelte-spa-router";
  import { lua } from "./lib/callback";
  import { isDevelopment } from "./lib/env";
  import { useEvent } from "./lib/events";
  import "./mocks";
  import Home from "./pages/Home.svelte";
  import OpenCase from "./pages/OpenCase.svelte";
  import { credits, storeUrl } from "./stores/user";

  let visible: boolean = isDevelopment ? true : false;

  useEvent("visibility", (status: boolean) => (visible = status));
  useEvent("updateCredits", (value: number) => credits.set(value));

  lua("GET_INFOS").then((data: { credits: number; storeUrl: string }) => {
    credits.set(data.credits);
    storeUrl.set(data.storeUrl);
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{#if visible}
  <div class="text-gray-300 bg-[#0f1923] min-h-screen flex flex-col">
    <Router
      routes={{
        "/": Home,
        "/case/:caseId": OpenCase,
      }}
    />
  </div>
{/if}

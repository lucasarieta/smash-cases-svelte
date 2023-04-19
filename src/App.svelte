<script lang="ts">
  import Router from "svelte-spa-router";
  import { isDevelopment } from "./lib/env";
  import { useEvent } from "./lib/events";
  import Home from "./pages/Home.svelte";
  import OpenCase from "./pages/OpenCase.svelte";

  let visible: boolean = isDevelopment ? true : false;

  useEvent("visibility", (status: boolean) => (visible = status));
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
  <div class="text-gray-300 bg-[#0f1923] h-screen flex-flex-col">
    <Router
      routes={{
        "/": Home,
        "/case/:caseId": OpenCase,
      }}
    />
  </div>
{/if}

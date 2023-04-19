<script lang="ts">
  import { DollarSign, PackageOpen } from "lucide-svelte";
  import { link } from "svelte-spa-router";
  import type { Case } from "../lib/types";

  export let currentCase: Case;
</script>

<div
  class="flex flex-col gap-4 bg-[#111e2b] w-80 h-80 pb-4 rounded-lg shadow-md"
>
  <div class="h-[70%] border-b border-gray-400/30">
    <img class="w-full h-full object-fill" src={currentCase.image} alt="" />
  </div>

  <div class="flex flex-col items-center justify-center gap-2">
    <h1 class="text-white font-semibold text-lg uppercase">
      {currentCase.name}
    </h1>

    <div class="flex gap-2 items-center">
      <a
        class="flex items-center bg-emerald-800 text-emerald-200 py-2 text-sm px-6 rounded-md"
        href={`/case/${currentCase.id}`}
        use:link
      >
        <DollarSign class="w-4 h-4" />
        {currentCase.price}
      </a>
      <a
        class="flex items-center bg-cyan-800 text-cyan-200 py-2 text-sm px-6 rounded-md gap-2"
        href={`/case/${currentCase.id}`}
        use:link
      >
        <PackageOpen class="w-4 h-4" />
        Visualizar
      </a>
    </div>
  </div>
</div>

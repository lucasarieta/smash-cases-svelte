<script lang="ts">
  import { DollarSign } from "lucide-svelte";
  import {
    credits as creditsStore,
    storeUrl as storeUrlStore,
  } from "../stores/user";

  let credits = 0;
  let storeUrl = "";

  creditsStore.subscribe((value) => (credits = value));
  storeUrlStore.subscribe((value) => (storeUrl = value));
</script>

<header
  class="flex items-center justify-between py-4 border-b border-gray-400/30"
>
  <div
    class="flex items-center mx-4 bg-emerald-800 text-emerald-200 py-2 px-4 rounded-md"
  >
    <DollarSign class="w-4 h-4" />
    {credits}
  </div>

  <a
    class="flex items-center mx-4 bg-blue-800 text-blue-200 py-2 px-4 rounded-md"
    href={storeUrl}
  >
    Adquirir créditos</a
  >
</header>

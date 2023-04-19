<script lang="ts">
  export let coins: number;
  export let storeUrl: string;

  import { DollarSign } from "lucide-svelte";
</script>

<header
  class="flex items-center justify-between h-16 border-b border-gray-400/30"
>
  <div
    class="flex items-center mx-4 bg-emerald-800 text-emerald-200 py-2 px-4 rounded-md"
  >
    <DollarSign class="w-4 h-4" />
    {coins}
  </div>

  <a
    class="flex items-center mx-4 bg-blue-800 text-blue-200 py-2 px-4 rounded-md"
    href={storeUrl}
  >
    Adquirir créditos</a
  >
</header>

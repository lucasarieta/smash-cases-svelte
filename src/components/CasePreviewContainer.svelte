<script lang="ts">
  import { lua } from "../lib/callback";
  import type { Case as ICase } from "../lib/types";
  import "../mocks";
  import CasePreview from "./CasePreview.svelte";

  let cases: ICase[] = [];

  lua("GET_CASES").then((data) => {
    cases = data as ICase[];
  });
</script>

<div
  class="max-w-[1200px] m-auto mt-4 p-4 grid grid-cols-2 gap-8 place-items-center lg:grid-cols-3"
>
  {#each cases as currentCase (currentCase.id)}
    <CasePreview {currentCase} />
  {/each}
</div>

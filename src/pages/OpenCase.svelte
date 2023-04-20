<script lang="ts">
  import CaseRoulette from "../components/CaseRoulette.svelte";
  import Header from "../components/Header.svelte";
  import { lua } from "../lib/callback";
  import type { Case } from "../lib/types";
  import "../mocks";

  export let params: { caseId: string };

  const caseId = parseInt(params.caseId);
  let currentCase: Case = undefined;

  lua("GET_CASE", { caseId }).then((data) => {
    currentCase = data as Case;
  });
</script>

<Header />
{#if currentCase}
  <CaseRoulette {currentCase} />
{/if}

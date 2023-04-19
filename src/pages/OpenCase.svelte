<script lang="ts">
  import Header from "../components/Header.svelte";

  export let params: { caseId: string };

  const caseId = parseInt(params.caseId);
  console.log(caseId);
</script>

<Header coins={100} storeUrl="https://hydrus.gg" />

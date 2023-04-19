<script lang="ts">
  import { addLuaMock, lua } from "../lib/callback";
  import type { Case as ICase } from "../lib/types";
  import CasePreview from "./CasePreview.svelte";

  let cases: ICase[] = [];

  addLuaMock("GET_CASES", () => {
    return [
      {
        id: 1,
        name: "Caixa de AK-47",
        image:
          "https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png",
        price: 200,
        items: [],
      },
      {
        id: 2,
        name: "Caixa de AK-47",
        image:
          "https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png",
        price: 200,
        items: [],
      },
      {
        id: 3,
        name: "Caixa de AK-47",
        image:
          "https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png",
        price: 200,
        items: [],
      },
      {
        id: 4,
        name: "Caixa de AK-47",
        image:
          "https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png",
        price: 200,
        items: [],
      },
      {
        id: 5,
        name: "Caixa de AK-47",
        image:
          "https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png",
        price: 200,
        items: [],
      },
      {
        id: 6,
        name: "Caixa de AK-47",
        image:
          "https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png",
        price: 200,
        items: [],
      },
      {
        id: 7,
        name: "Caixa de AK-47",
        image:
          "https://cdn.discordapp.com/attachments/1003120601415815249/1096893690498273300/Caixa_AK_47_1.png",
        price: 200,
        items: [],
      },
    ] satisfies ICase[];
  });

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

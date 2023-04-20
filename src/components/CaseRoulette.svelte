<script lang="ts">
  import { DollarSign, RotateCcw } from "lucide-svelte";
  import { link } from "svelte-spa-router";
  import { lua } from "../lib/callback";
  import type { Case } from "../lib/types";
  import { credits as creditsStore } from "../stores/user";
  import { animate, getWinnerItem, shuffleArray } from "../utils";
  import Item from "./Item.svelte";

  export let currentCase: Case;

  let credits = 0;

  creditsStore.subscribe((value) => (credits = value));

  let isSpinning = false;
  const rouletteItems = [...currentCase.items];

  while (rouletteItems.length < 200) {
    const shuffledItems = shuffleArray(currentCase.items);
    rouletteItems.push(...shuffledItems);
  }

  async function spin() {
    if (isSpinning) return;

    isSpinning = true;

    const canSpin = await lua("OPEN_CASE", {
      price: currentCase.price,
    });

    if (!canSpin) {
      isSpinning = false;
      return;
    }

    const roulette = document.getElementById("roulette");
    // return roulette to initial position
    await animate(
      roulette,
      { transform: "translateX(0rem)" },
      {
        duration: 0,
        easing: "ease-in-out",
      }
    );

    const randomItemIndex = Math.floor(Math.random() * 50 + 100);
    const winnerItem = getWinnerItem(rouletteItems);

    console.log(`winnerItem ${winnerItem.name}`);

    rouletteItems[randomItemIndex] = winnerItem;

    const ITEM_SIZE_WITH_GAP = 10 + 0.5;
    const MARGIN_LEFT = ITEM_SIZE_WITH_GAP * 3 + 1;
    const VARY = Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1);

    const transform = ITEM_SIZE_WITH_GAP * randomItemIndex - MARGIN_LEFT;

    await animate(
      roulette,
      {
        transform: `translateX(-${transform + VARY}rem)`,
      },
      {
        duration: 10 * 1000,
        easing: "ease-in-out",
      }
    );

    setTimeout(() => {
      animate(
        roulette,
        {
          transform: `translateX(-${transform}rem)`,
        },
        {
          duration: 1000,
          easing: "ease-in-out",
        }
      );
    }, 500);

    lua("WIN_OPENING_CASE", {
      winnerItem,
    });

    setTimeout(() => {
      isSpinning = false;
    }, 1500);
  }
</script>

<div class="mt-8">
  <header class="flex items-center justfiy-center flex-col gap-4">
    <h1 class="font-bold text-lg uppercase">{currentCase.name}</h1>
    <div class="w-64">
      <img src={currentCase.image} class="object-contain" alt="" />
    </div>
  </header>

  <main
    class="relative min-w-[1200px] m-auto w-[90%] bg-[#152433] h-[12rem] rounded-md mt-8"
  >
    <!-- Wheel marker -->
    <div
      id="wheel_marker"
      class="absolute left-[50%] bg-red-500 w-[2px] h-full z-20"
    />

    <!-- Roulette items -->
    <div class="flex items-center h-full overflow-hidden">
      <div
        class="flex relative gap-2"
        id="roulette"
        style="transform: translateX(0rem);"
      >
        {#each rouletteItems as item}
          <Item {item} />
        {/each}
      </div>
    </div>
  </main>

  <!-- Open and back buttons -->
  <div class="flex items-center justify-center gap-2 mt-8">
    <button
      class="flex items-center bg-emerald-800 gap-1 text-emerald-200 py-2 text-sm px-4 rounded-md disabled:opacity-80 disabled:cursor-not-allowed"
      disabled={isSpinning || currentCase.price > credits}
      on:click={spin}
    >
      {#if !isSpinning}
        <DollarSign class="w-4 h-4" />
        Abrir por
        {currentCase.price}
      {:else}
        <DollarSign class="w-4 h-4" />
        Abririndo caixa
      {/if}
    </button>

    <a
      class="flex items-center bg-cyan-800 text-cyan-200 py-2 text-sm px-6 rounded-md gap-2"
      href={`/`}
      use:link
    >
      <RotateCcw class="w-4 h-4" />
      Voltar a Home
    </a>
  </div>

  <section class="min-w-[1200px] m-auto w-[90%] p-4 rounded-md mt-8">
    <h1 class="font-bold uppercase text-lg">Itens na caixa</h1>

    <div class="mt-2 grid grid-cols-8 place-items-center gap-10">
      {#each currentCase.items as item}
        <Item {item} />
      {/each}
    </div>
  </section>
</div>

<script lang="ts">
  import { colors } from "../constants";
  import type { Item } from "../lib/types";

  export let item: Item;

  let itemColor = colors[item.rarity];

  $: itemColor = colors[item.rarity];
</script>

<div
  class="bg-[#20354a] relative rounded-md flex flex-col items-center justify-evenly w-40 h-[10rem]"
>
  <div
    class="absolute top-[1px] rounded-t-md w-full h-[2px]"
    style={`background: ${itemColor}`}
  />

  <img class="w-[50%]" src={item.image} alt="" />

  <h1>{item.name}</h1>
</div>

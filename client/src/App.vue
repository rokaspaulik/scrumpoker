<script setup>
import PokerTable from './components/PokerTable.vue';
import PokerCard from './components/PokerCard.vue';
</script>

<template>
  <div class="container mx-auto font-sans lg:w-2/5 md:w-2/5 sm: w-full">
    <div class="
      py-8
      grid grid-rows-1
      grid-flow-col
    ">
      <PokerCard points=1 />
      <PokerCard points=2 />
      <PokerCard points=3 />
      <PokerCard points=5 />
      <PokerCard points=8 />
      <PokerCard points=13 />
      <PokerCard points=21 />
    </div>

    <PokerTable />
  </div>
</template>

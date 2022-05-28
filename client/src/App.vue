<script setup>
import CardButton from './components/CardButton.vue'
import PokerTable from './components/PokerTable.vue'
</script>

<template>
  <div class="container mx-auto font-sans lg:w-2/5 md:w-2/5 sm: w-full">
    <div class="
      py-8
      grid grid-rows-1
      grid-flow-col
    ">
      <CardButton points=1 />
      <CardButton points=2 />
      <CardButton points=3 />
      <CardButton points=5 />
      <CardButton points=8 />
      <CardButton points=13 />
      <CardButton points=21 />
    </div>

    <PokerTable />
  </div>
</template>

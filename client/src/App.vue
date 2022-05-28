<script setup>
import CardButton from './components/CardButton.vue'
</script>

<template>
  <div class="bg-gray-100 w-screen h-screen">
    <div class="container mx-auto font-sans">
      <div class="grid grid-flow-col grid-rows-1 p-10">
        <CardButton points=1 />
        <CardButton points=2 />
        <CardButton points=3 />
        <CardButton points=5 />
        <CardButton points=8 />
        <CardButton points=13 />
        <CardButton points=21 />
      </div>
    </div>
  </div>
</template>

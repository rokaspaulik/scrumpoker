<template>
  <div class="inline-block">
    <button class="rounded-md p-2 m-2 border-solid border-2 border-black hover:bg-emerald-500 w-16 h-20 text-2xl">
      <span class="font-semibold">
        {{ points }}
      </span>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      points: Number
    }
  }
</script>

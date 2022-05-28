<template>
  <div class="inline-block m-auto">
    <button class="
      rounded-md
      p-2 m-2
      border-solid
      border-2
      border-black
      hover:bg-gray-200
      lg:w-16
      lg:h-20
      md:w-8
      md:h-10
      sm:w-8
      sm:h-10
      lg:text-2xl
      md:text-md
      sm:text-sm
    ">
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

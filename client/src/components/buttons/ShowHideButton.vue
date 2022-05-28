<template>
  <button @click='triggerFlip()' v-if="show" type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Hide</button>
  <button @click='triggerFlip()' v-else type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Show</button>
</template>

<script>
  export default {
    props: {
      initialShow: Boolean
    },
    data() {
      return {
        show: this.initialShow
      };
    },
    methods: {
      triggerFlip() {
        this.show ? this.show = false : this.show = true

        this.$emit('flip-triggered');
      }
    }
  }
</script>

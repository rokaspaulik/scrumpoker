<template>
  <div>
    <div class="inline-block pb-2">
      <ResetButton @reset-triggered="resetPoints()"></ResetButton>
      <ShowHideButton :initial-show="this.show" @flip-triggered="flipShowHide()"></ShowHideButton>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            User
          </th>
          <th scope="col" class="px-6 py-3">
            Points
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              <span>{{ item.user }}</span>
          </th>
          <td class="px-6 py-4">
              <span v-if="show">{{ item.points }}</span>
              <span v-else>?</span>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import ShowHideButton from './buttons/ShowHideButton.vue';
  import ResetButton from './buttons/ResetButton.vue';

  export default {
    data() {
        return {
            items: [
                { user: "Rokas", points: 5 },
                { user: "Darius", points: 13 },
                { user: "Marius", points: 8 },
                { user: "Karolis", points: 8 },
                { user: "Vladis", points: 3 },
                { user: "Lukas", points: 2 },
            ],
            show: true
        };
    },
    components: { ResetButton, ShowHideButton },
    methods: {
      flipShowHide() {
        this.show ? this.show = false : this.show = true
      },
      resetPoints() {
        this.items.forEach((item, index) => {
          this.items[index].points = 0;
        });
      }
    }
  }
</script>

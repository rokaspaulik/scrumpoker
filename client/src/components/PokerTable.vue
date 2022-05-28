<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        <tr v-for="item in items" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            <span>
              {{ item.user }}
            </span>
          </th>
          <td class="px-6 py-4">
            <span v-if="show">
              {{ item.points }}
            </span>
            <span v-else>?</span>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
</template>

<script>
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
  }
</script>

<template>
  <div class="w-full flex justify-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-full max-w-3xl flex flex-col gap-y-2">
      <div class="flex rounded-md bg-gray-900 p-4 mb-4 gap-x-4">
        <button
          class="flex gap-x-1 bg-gray-800 rounded-md px-2 py-1"
          :class="{ 'text-blue-500': data.sorting.property === property }"
          @click="setSorting(property)"
          v-for="(title, property) in {productName: 'Nazwa Produktu', price: 'Cena', date: 'Data'}"
          :key="property"
        >
          <span class="font-bold">{{ title }}</span>
          <span v-if="data.sorting.property === property">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="data.sorting.mode === 'desc'">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="data.sorting.mode === 'asc'">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </span>
        </button>
      </div>
      <UiOrder
        v-for="(order, key) in sortedOrders"
        :key="key"
        :product-name="order.productName"
        :price="order.price"
        :date="order.date"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {computed, reactive} from 'vue';
  import UiOrder from "../components/ui/UiOrder.vue";

  const data = reactive({
    sorting: {
      property: 'date',
      mode: 'desc'
    } as { property: string, mode: string },
    orders: [
      {
        productName: 'Nazwa Produktu 1',
        price: 123,
        date: '12-12-2020 12:45:32'
      },
      {
        productName: 'Nazwa Produktu 2',
        price: 132323,
        date: '12-10-2020 07:45:32'
      },
      {
        productName: 'Nazwa Produktu 3',
        price: 1223,
        date: '01-12-2020 13:45:32'
      }
    ] as { [key: string]: string|number }[]
  })

  const sortedOrders = computed(() => {
    const property = data.sorting.property
    const mode = data.sorting.mode
    const orders = [...data.orders]

    if(!property) {
      return orders
    }

    if(mode === 'asc') {
      return orders.sort((a, b) => {
        if(a[property] > b[property]) {
          return 1
        } else if (b[property] > a[property]) {
          return -1
        } else {
          return 0
        }
      })
    }

    if(mode === 'desc') {
      return orders.sort((a, b) => {
        if(a[property] > b[property]) {
          return -1
        } else if (b[property] > a[property]) {
          return 1
        } else {
          return 0
        }
      })
    }
  })

  const setSorting = (parameter: string) => {
    const currentProperty = data.sorting.property
    const currentMode = data.sorting.mode

    if(currentProperty !== parameter) {
      data.sorting.property = parameter
      data.sorting.mode = 'asc'
      return
    }

    switch (currentMode) {
      case '':
        data.sorting.mode = 'asc'
        break;
      case 'asc':
        data.sorting.mode = 'desc'
        break;
      default:
        data.sorting.property = ''
        data.sorting.mode = ''
        break;
    }
  }
</script>
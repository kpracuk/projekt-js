<template>
  <div class="w-full flex justify-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-full max-w-3xl flex flex-col gap-y-2">
      <div class="flex rounded-md bg-gray-900 p-4 mb-4 gap-x-4">
        <button
          class="flex gap-x-1 bg-gray-800 rounded-md px-2 py-1"
          :class="{ 'text-blue-500': data.sorting.property === property }"
          @click="setSorting(property)"
          v-for="(title, property) in data.sorting.properties"
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
        :product-name="order.product.name"
        :price="order.price_at_buy"
        :quantity="order.quantity"
        :date="order.updated_at"
        :status="order.status"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onMounted, reactive } from 'vue';
  import UiOrder from "../components/ui/UiOrder.vue";
  import { getOrders } from "../api/endpoints/orders";
  import { notify } from "@kyvg/vue3-notification";
  import { Order } from "../api/interfaces/orders";

  const data = reactive({
    loading: true,
    sorting: {
      property: 'created_at',
      mode: 'desc',
      properties: {
        quantity: 'Ilość',
        price_at_buy: 'Cena',
        created_at: 'Data'
      }
    },
    orders: [] as Order[]
  })

  onMounted(() => {
    getOrders()
      .then(response => {
        data.orders = response.data
      })
      .catch(error => {
        data.orders = []
        notify({
          type: 'error',
          title: 'Wystąpił błąd',
          text: 'Nie udało się pobrać zamówień'
        })
      })
      .finally(() => {
        data.loading = false
      })
  })

  const sortedOrders = computed((): Order[] => {
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

    return orders
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
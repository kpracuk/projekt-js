<template>
  <div class="w-full flex justify-center pt-8">
    <div class="p-4 bg-gray-800 rounded-md w-full max-w-3xl flex flex-col gap-y-2">
      <div class="flex rounded-md bg-gray-900 p-4 mb-4 gap-x-4">
        <button
          class="flex gap-x-1 bg-gray-800 rounded-md px-2 py-1"
          :class="{ 'text-blue-500': data.sorting.property === property }"
          @click="setSorting(property)"
          v-for="(title, property) in {name: 'Nazwa', available: 'Ilość dostępnych', price: 'Cena'}"
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
      <UiProduct
        v-for="(product, key) in sortedProducts"
        :key="key"
        :name="product.name"
        :available="product.available"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {computed, reactive} from 'vue';
  import UiProduct from "../components/ui/UiProduct.vue";

  const data = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    sorting: {
      property: '',
      mode: ''
    } as { property: string, mode: string },
    products: [
      {
        name: 'Nazwa Produktu 1',
        available: 23,
        price: 123
      },
      {
        name: 'Nazwa Produktu 2',
        available: 123,
        price: 343445
      },
      {
        name: 'Nazwa Produktu 3',
        available: 43,
        price: 1234125
      },
      {
        name: 'Nazwa Produktu 4',
        available: 1,
        price: 1233
      }
    ] as { [key: string]: string|number }[]
  })

  const sortedProducts = computed(() => {
    const property = data.sorting.property
    const mode = data.sorting.mode
    const products = [...data.products]

    if(!property) {
      return products
    }

    if(mode === 'asc') {
      return products.sort((a, b) => {
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
      return products.sort((a, b) => {
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
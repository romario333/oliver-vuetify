<template>
  <v-list>
    <v-list-item
      v-for="product in products"
      :key="product.id"
      :title="product.name"
      :prepend-avatar="`https://picsum.photos/200/300?random=${product.id}`"
      nuxt
      :to="`/products/${product.id}`"
    />
  </v-list>
</template>

<script setup lang="ts">
import { useProducts, type Product } from "../composables/products";

definePageMeta({
  pageTransition: {
    mode: "out-in",
  },
});

const { fetchProducts } = useProducts();

const products = ref<Product[]>([]);

products.value = await fetchProducts();
</script>

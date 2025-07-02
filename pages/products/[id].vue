<template>
  <div>
    <v-btn
      prepend-icon="mdi-arrow-left"
      variant="text"
      nuxt
      to="/eshop"
      class="mb-4"
    >
      Back to E-shop
    </v-btn>
    <h1>Product {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    mode: "out-in",
    name: "slide-right",
  },
});

const { id } = useRoute().params;
</script>

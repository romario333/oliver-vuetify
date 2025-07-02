<template>
  <v-layout>
    <v-app-bar title="Vuetify Prototype">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <template v-slot:append>
        <v-btn
          :icon="
            theme.global.current.value.dark
              ? 'mdi-weather-sunny'
              : 'mdi-weather-night'
          "
          @click="toggleTheme"
          variant="text"
        >
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item title="Dashboard" nuxt to="/"></v-list-item>
        <v-list-item title="E-shop" nuxt to="/eshop"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>

    <!-- Global Toast Component -->
    <Toast />
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const drawer = ref(false);
const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

<style>
/* Slide right transition (eshop → products) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

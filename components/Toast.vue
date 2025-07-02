<template>
  <v-snackbar
    v-if="currentMessage"
    v-model="currentMessage.show"
    :color="currentMessage.color"
    :timeout="currentMessage.timeout"
    location="top right"
    @update:model-value="handleSnackbarClose"
  >
    {{ currentMessage.text }}

    <template v-slot:actions>
      <v-btn
        color="white"
        variant="text"
        @click="hideCurrentToast"
        icon="mdi-close"
      >
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
// Toast functionality
const { currentMessage, hideCurrentToast } = useToast();

const handleSnackbarClose = (value) => {
  if (!value) {
    hideCurrentToast();
  }
};
</script>

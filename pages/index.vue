<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="formData.firstname"
            :counter="10"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="formData.lastname"
            :counter="10"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="formData.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-date-input v-model="formData.dateOfBirth" label="Date of Birth">
          </v-date-input>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-btn :loading="submitting" @click="submit" class="mt-4">
          Submit
        </v-btn>

        <v-btn
          icon="mdi-heart"
          class="mt-4 ml-4"
          :loading="liking"
          @click="like"
        ></v-btn>
      </v-row>

      <!-- Toast Demo Buttons -->
      <v-row align="center" class="mt-15">
        <v-btn
          color="success"
          @click="success('Success message!')"
          class="mr-4"
        >
          Success Toast
        </v-btn>

        <v-btn color="error" @click="error('Error message!')" class="mr-4">
          Error Toast
        </v-btn>

        <v-btn
          color="warning"
          @click="warning('Warning message!')"
          class="mr-4"
        >
          Warning Toast
        </v-btn>

        <v-btn color="info" @click="info('Info message!')"> Info Toast </v-btn>
      </v-row>

      <v-row class="other">
        <v-time-picker v-model="formData.timeOfBirth"> </v-time-picker>
      </v-row>

      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import type { VForm } from "vuetify/components";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth?: Date;
  timeOfBirth: string;
}

const valid = ref(false);
const submitting = ref(false);
const liking = ref(false);
const form = ref<VForm>();

const formData = ref<FormData>({
  firstname: "",
  lastname: "",
  email: "",
  dateOfBirth: undefined,
  timeOfBirth: "",
});

const nameRules = [
  (v: string) => !!v || "Name is required",
  (v: string) =>
    (v && v.length <= 10) || "Name must be less than 10 characters",
];
const emailRules = [
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

// Initialize toast functionality
const { success, error, warning, info } = useToast();

async function submit() {
  if (!form.value) return;

  const { valid } = await form.value.validate();

  if (!valid) {
    return;
  }

  submitting.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    success("Task completed successfully!");
  } catch (err) {
    error("Something went wrong!");
  } finally {
    submitting.value = false;
  }
}

async function like() {
  liking.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    info("Thanks for liking!", 3000);
  } catch (err) {
    warning("Could not process your like");
  } finally {
    liking.value = false;
  }
}

watch(
  formData,
  (newValue) => {
    console.log("formData changed:", newValue);
  },
  { deep: true }
);
</script>

<style scoped>
.other {
  margin-top: 100px;
}
</style>

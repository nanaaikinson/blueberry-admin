<template>
  <div class="flex h-screen w-screen items-center justify-center container">
    <div class="w-full max-w-lg justify-center">
      <Card class="p-10">
        <div class="text-center mb-8">
          <h3 class="font-semibold">Login</h3>
          <p class="text-basic">Log in to your account to continue</p>
        </div>

        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="uppercase">email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-input"
              placeholder="Enter email"
              v-model.trim="email"
            />
          </div>

          <div class="mb-4">
            <label for="password" class="uppercase">password</label>
            <input
              type="password"
              name="password"
              id="password"
              class="form-input"
              placeholder="Enter password"
              v-model.trim="password"
            />
          </div>

          <div class="pt-4">
            <Btn variant="primary" block>Log In</Btn>
          </div>
        </form>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/components/common/Card.vue";
import Btn from "@/components/common/Btn.vue";
import { useField, useForm } from "vee-validate";
import { loginValidationSchema } from "@/schema/authentication";

// Data
const { errors } = useForm({ validationSchema: loginValidationSchema });
const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");

// Methods
const login = () => {
  //
};
</script>

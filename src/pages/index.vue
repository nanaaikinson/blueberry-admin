<template>
  <div class="flex h-screen w-screen items-center justify-center container">
    <div class="w-full max-w-md justify-center">
      <Card class="p-10">
        <div class="text-center mb-8">
          <h3 class="font-semibold">Login</h3>
          <p class="text-basic">Log in to your account to continue</p>
        </div>

        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="text" class="uppercase">username</label>
            <input
              type="text"
              name="username"
              id="username"
              class="form-input"
              placeholder="Enter username"
              v-model.trim="username"
            />
            <ErrorVue :message="errors?.username" />
          </div>

          <div class="mb-4">
            <label for="password" class="flex items-center justify-between">
              <span class="uppercase">password</span>
              <a href="#" class="text-primary text-sm font-normal"
                >Forgot Password?</a
              >
            </label>
            <input
              type="password"
              name="password"
              id="password"
              class="form-input"
              placeholder="Enter password"
              v-model.trim="password"
            />
            <ErrorVue :message="errors?.password" />
          </div>

          <div class="pt-4 mb-4">
            <Btn variant="primary" type="submit" block>Log In</Btn>
          </div>

          <div class="text-center">
            <p class="text-center space-x-1">
              <span>Don't have an account? </span>
              <a href="#" class="text-primary">Sign Up</a>
            </p>
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
import ErrorVue from "../components/common/Error.vue";
import type { ILoginForm } from "@/types/authentication";
import { useRouter } from "vue-router";

// Data
const router = useRouter();
const { errors, validate } = useForm<ILoginForm>({
  validationSchema: loginValidationSchema,
});
const { value: username } = useField<string>("username");
const { value: password } = useField<string>("password");

// Methods
const login = async () => {
  const { valid } = await validate();

  if (valid) {
    router.push("/app");
  }
};
</script>

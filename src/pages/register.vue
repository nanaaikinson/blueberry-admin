<template>
  <div class="flex h-screen">
    <div class="w-2/5 h-full hidden lg:block"></div>

    <div
      class="w-full lg:w-3/5 px-10 lg:px-0 h-full bg-white flex items-center justify-center"
    >
      <div class="flex flex-col space-y-8 w-full max-w-lg">
        <div>
          <h3>Create your account</h3>
          <p>It's free and easy</p>
        </div>

        <form @submit.prevent="register" autocomplete="off">
          <div class="mb-4">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-input"
              v-model.trim="name"
            />
            <ErrorVue :message="errors?.name" />
          </div>

          <div class="mb-4">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-input"
              v-model.trim="email"
            />
            <ErrorVue :message="errors?.email" />
          </div>

          <div class="mb-4">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              class="form-input"
              v-model.trim="password"
            />
            <ErrorVue :message="errors?.password" />
          </div>

          <div class="mb-4 pt-4">
            <ButtonVue variant="primary" type="submit" class="w-full">
              Sign Up
            </ButtonVue>
          </div>

          <div class="text-center">
            <p class="space-x-1">
              <span>Have an account? </span>
              <router-link :to="{ name: 'index' }" class="text-primary">
                Log In
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm, useField } from "vee-validate";
import { useRouter } from "vue-router";
import ErrorVue from "@/components/common/Error.vue";
import ButtonVue from "@/components/common/Btn.vue";
import { registerValidationSchema } from "@/schema/authentication";
import type { IRegisterForm } from "@/types/authentication";

// Data
const router = useRouter();
const { errors, validate } = useForm<IRegisterForm>({
  validationSchema: registerValidationSchema,
});
const { value: name } = useField<string>("name");
const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");

// Methods
const register = async () => {
  const { valid } = await validate();

  if (valid) {
    router.push({ name: "app" });
  }
};
</script>

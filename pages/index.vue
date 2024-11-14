<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <PageRow :isFullWidth="false">
          <template #default>
            <h1>Examples extended via NPM package</h1>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import useZodValidation from 'srcdev-nuxt-forms/composables/useZodValidation';
import { z } from 'zod';
import type { IFormMultipleOptions } from '@/types/types.forms';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Home - Sample form',
  meta: [
    {
      name: 'description',
      content: 'Nuxt project using layers for forms and components',
    },
  ],
  bodyAttrs: {
    class: 'home',
  },
});

/*
 * Fetch some sample data
 **/
const { data: citiesData } = await useFetch<IFormMultipleOptions>('/api/places/list?category=cities');
const { data: countriesData } = await useFetch<IFormMultipleOptions>('/api/places/list?category=countries');
const { data: titleData } = await useFetch<IFormMultipleOptions>('/api/utils?category=title');

/*
 * Setup forms
 */
const formSchema = reactive(
  z
    .object({
      emailAddress: z
        .string({
          required_error: 'Email address is required',
        })
        .email({ message: 'Invalid email address' })
        .refine((email) => email !== zodFormControl.previousState.emailAddress.value, {
          message: 'This email address has already been used',
        }),
      username: z
        .string({
          required_error: 'Username is required',
        })
        .trim()
        .min(2, 'Username is too short')
        .max(25, 'Username is too long')
        .refine((email) => email !== zodFormControl.previousState.username.value, {
          message: 'This username has already been used',
        }),
      password: z
        .string()
        .trim()
        .min(8, 'Password is too short')
        .max(25, 'Password is too long')
        .refine((email) => email !== zodFormControl.previousState.password.value, {
          message: "You've already used this password",
        }),
      message: z.string().trim().min(2, 'Message is too short').max(255, 'Message is too long'),
      count: z
        .number({
          required_error: 'Count is required',
          invalid_type_error: 'Count must be a number',
        })
        .int({ message: 'Count must be a whole number' })
        .gte(25, 'Count must be between 25 and 75')
        .lte(75, 'Count must be between 25 and 75')
        .multipleOf(5, 'Count must be a multiple of 5'),
      count2: z
        .number({
          required_error: 'Count is required',
          invalid_type_error: 'Count must be a number',
        })
        .int({ message: 'Count must be a whole number' })
        .gte(25, 'Count must be between 25 and 75')
        .lte(75, 'Count must be between 25 and 75'),
      score: z
        .number({
          required_error: 'Score is required',
          invalid_type_error: 'Score must be a number',
        })
        .gte(0)
        .lte(100),
      cities: z.array(z.string()).min(1, 'Please select at least one city'),
      countries: z.array(z.string()).min(2, 'Please select at least 2 countries').max(5, 'Please select no more than 5 countries'),
      title: z.string().min(1, { message: 'Title is required' }),
      agreed: z.boolean().refine((val) => val === true, { message: 'You must tick this box' }),
      agree: z.boolean().refine((val) => val === true, { message: 'You must tick this box' }),
      terms: z.boolean().refine((val) => val === true, {
        message: 'You must accept our terms',
      }),
    })
    .required({
      emailAddress: true,
      username: true,
      password: true,
      message: true,
      count: true,
      count2: true,
      score: true,
      cities: true,
      countries: true,
      title: true,
      agreed: true,
      agree: true,
      terms: true,
    })
);

type formSchema = z.infer<typeof formSchema>;
const formErrors = computed<z.ZodFormattedError<formSchema> | null>(() => zodErrorObj.value);

const state = reactive({
  emailAddress: '',
  username: '',
  password: '',
  message: '',
  count: 25,
  count2: 25,
  score: 50,
  cities: [],
  countries: [],
  title: '',
  agreed: false,
  agree: false,
  terms: false,
});

const {
  initZodForm,
  zodFormControl,
  zodErrorObj,
  // formErrors,
  pushCustomErrors,
  doZodValidate,
  fieldMaxLength,
} = useZodValidation(formSchema);

initZodForm();

const submitForm = async () => {
  console.log('submitForm(): doZodValidate(state): ', doZodValidate(state));
  zodFormControl.submitAttempted = true;
  if (!(await doZodValidate(state))) return;
  zodFormControl.displayLoader = true;
  try {
    console.log('Form valid - post it');
    const data = await $fetch('/api/textFields', {
      method: 'post',
      body: state,
      async onResponse({ response }) {
        if (response.status === 400) {
          console.log('onResponse', response);
          console.log(response.status);

          // useApiErrors(response._data.data.errors);
          // for (const [key, message] of Object.entries(response._data.data.errors)) {
          //   console.log(`${key}: ${message}`);
          //   updateErrorMessages(key, message);
          // }

          // if (error instanceof Error) {
          await pushCustomErrors(response._data, state);
          // zodFormControl.formIsValid = false;
          // }
          // zodFormControl.submitAttempted = false;
        }
        if (response.status === 200) {
          zodFormControl.submitSuccessful = true;
        }
      },
    });
    console.log('3: Finished data', data);
    // return data;
  } catch (error) {
    console.warn('2: An error occured posting form data', error);
  } finally {
    zodFormControl.displayLoader = false;
  }
};

watch(
  () => state,
  () => {
    // console.log('Watching state');
    doZodValidate(state);
  },
  { deep: true }
);
</script>

<style lang="css">
.flex-group {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 32px;
}

ul.flex-group {
  list-style-type: none;
  padding: 0;
}

.header-1 {
  font-family: var(--font-family);
  color: var(--brand-success-text-text);
}
</style>

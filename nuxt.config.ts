// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['modern-normalize', './assets/styles/index.css'],
  modules: ['@nuxt/icon'],
  extends: ['srcdev-nuxt-forms', 'srcdev-nuxt-components'],
});

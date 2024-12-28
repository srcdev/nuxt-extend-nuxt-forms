// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        'data-color-scheme': 'auto',
      },
      titleTemplate: '%s - Nuxt app exended by other Nuxt layers',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],
  css: ['modern-normalize', './assets/styles/main.css'],
  modules: ['@nuxt/icon', '@nuxtjs/storybook'],
  extends: ['srcdev-nuxt-forms', 'srcdev-nuxt-components'],
});

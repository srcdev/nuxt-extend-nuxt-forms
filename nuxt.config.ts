// https://nuxt.com/docs/api/configuration/nuxt-config
// import path from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    https: true,
  },
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
  modules: ['@nuxt/icon'],
  extends: ['srcdev-nuxt-forms', 'srcdev-nuxt-components'],
  // nitro: {
  //   output: {
  //     publicDir: path.join(__dirname, 'custom-output-path'),
  //     // publicDir: '../custom-output-path',
  //   },
  // },
});

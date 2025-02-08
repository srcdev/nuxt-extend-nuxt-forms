import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions', '@storybook/addon-links'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: { docgen: 'vue-component-meta' },
  },
  // async viteFinal(config) {
  //   const { mergeConfig } = await import('vite');

  //   return mergeConfig(config, {
  //     optimizeDeps: {
  //       include: ['jsdoc-type-pratt-parser'],
  //     },
  //     resolve: {
  //       alias: {
  //         // Resolve Vue bundler to support runtime compilation
  //         vue: 'vue/dist/vue.esm-bundler.js',
  //         // vue: 'vue',
  //       },
  //     },
  //     server: {
  //       proxy: {
  //         // Change Vite proxy configuration to enable Storybook server to serve fonts from Nuxt Dev server
  //         '^/(_nuxt|_ipx|_icon|__nuxt_devtools__|_fonts)': {
  //           target: 'http://localhost:3000',
  //           changeOrigin: true,
  //           secure: false,
  //           ws: true,
  //         },
  //       },
  //     },
  //   });
  // },
};
export default config;

import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions', '@storybook/addon-links'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: { docgen: 'vue-component-meta' },
  },
  logLevel: 'error',
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      server: {
        proxy: {
          // Change Vite proxy configuration to enable Storybook server to serve fonts from Nuxt Dev server

          // Handle NuxtIcon proxy
          '/api/_nuxt_icon': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            secure: false,
            ws: true,
            pathRewrite: {
              '^/api/_nuxt_icon': '',
            },
          },
        },
      },
    });
  },
};
export default config;

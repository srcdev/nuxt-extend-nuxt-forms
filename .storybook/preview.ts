import type { Preview } from '@storybook-vue/nuxt';
// import { setup } from '@nuxtjs/storybook';

import 'modern-normalize';
import '@/assets/styles/main.css';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { h, Suspense } from 'vue';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (story) => {
      return {
        setup() {
          return () => h(Suspense, {}, [h(story())]);
        },
      };
    },
  ],
};

export default preview;

// setup(app) => {
//   app.components: [
//     {
//       path: './components',
//       pathPrefix: false,
//     },
//   ],
// }

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;

// import type { Meta, StoryFn, StoryObj } from '@nuxtjs/storybook';
import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import { h, Suspense } from 'vue';

import DarkModeSwitcher from '../node_modules/srcdev-nuxt-forms/components/utils/dark-mode-switcher/DarkModeSwitcher.vue';

const meta = {
  title: 'SRCDEV/Forms/Components/Utils/DarkModeSwitcher',
  component: DarkModeSwitcher,
  argTypes: {
    labelWeight: {
      options: ['normal', 'semi-bold', 'bold'],
      control: { type: 'select' },
    },
    size: {
      options: ['x-small', 'small', 'normal', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof DarkModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle dark mode',
    name: 'dark-mode-switcher',
    styleClassPassthrough: ['mi-24'],
    labelWeight: 'semi-bold',
    size: 'small',
  },
  render(args) {
    return {
      setup() {
        return () =>
          h(
            Suspense,
            h(DarkModeSwitcher, {
              ...args,
            })
          );
      },
    };
  },
};

// export default {
//   title: 'SRCDEV/Forms/Components/Utils/DarkModeSwitcher',
//   component: DarkModeSwitcher,
//   argTypes: {
//     labelWeight: {
//       options: ['normal', 'semi-bold', 'bold'],
//       control: { type: 'select' },
//     },
//     size: {
//       options: ['x-small', 'small', 'normal', 'medium', 'large'],
//       control: { type: 'select' },
//     },
//   },
//   args: {
//     label: 'Toggle dark mode',
//     name: 'dark-mode-switcher',
//     styleClassPassthrough: ['mi-24'],
//     labelWeight: 'bold',
//     size: 'normal',
//   },
// } as Meta<typeof DarkModeSwitcher>;

// const Template: StoryFn<typeof DarkModeSwitcher> = (args) => ({
//   components: { DarkModeSwitcher },
//   setup() {
//     return { args };
//   },
//   template: `
//     <Suspense>
//       <template #default>
//         <DarkModeSwitcher v-bind="args" />
//       </template>
//       <template #fallback>
//         <div>Loading...</div>
//       </template>
//     </Suspense>
//   `,
// });

// export const Default = Template.bind({});
// Default.args = {
//   label: 'Toggle dark mode',
//   name: 'dark-mode-switcher',
//   styleClassPassthrough: ['mi-24'],
//   labelWeight: 'bold',
//   size: 'normal',
// };

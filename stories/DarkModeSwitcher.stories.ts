import type { Meta, StoryFn, StoryObj } from '@nuxtjs/storybook';
import { h, Suspense } from 'vue';

import DarkModeSwitcher from '../node_modules/srcdev-nuxt-forms/components/utils/dark-mode-switcher/DarkModeSwitcher.vue';

const meta = {
  title: 'SRCDEV/Forms/Components/Utils/DarkModeSwitcher',
  component: DarkModeSwitcher,
  argTypes: {
    labelWeight: {
      options: ['x-small', 'small', 'normal', 'medium', 'large'],
      control: { type: 'select' },
    },
    size: {
      options: [
        'wght-100',
        'wght-200',
        'wght-300',
        'wght-400',
        'wght-500',
        'wght-600',
        'wght-700',
        'wght-800',
        'wght-900',
        'light',
        'normal',
        'bold',
        'fvs-wght-100',
        'fvs-wght-200',
        'fvs-wght-300',
        'fvs-wght-400',
        'fvs-wght-500',
        'fvs-wght-600',
        'fvs-wght-700',
        'fvs-wght-800',
        'fvs-wght-900',
      ],
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
    labelWeight: 'bold',
    size: 'md',
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
//       options: ['x-small', 'small', 'normal', 'medium', 'large'],
//       control: { type: 'select' },
//     },
//     size: {
//       options: [
//         'wght-100',
//         'wght-200',
//         'wght-300',
//         'wght-400',
//         'wght-500',
//         'wght-600',
//         'wght-700',
//         'wght-800',
//         'wght-900',
//         'light',
//         'normal',
//         'bold',
//         'fvs-wght-100',
//         'fvs-wght-200',
//         'fvs-wght-300',
//         'fvs-wght-400',
//         'fvs-wght-500',
//         'fvs-wght-600',
//         'fvs-wght-700',
//         'fvs-wght-800',
//         'fvs-wght-900',
//       ],
//       control: { type: 'select' },
//     },
//   },
//   args: {
//     label: 'Toggle dark mode',
//     name: 'dark-mode-switcher',
//     styleClassPassthrough: ['mi-24'],
//     labelWeight: 'bold',
//     size: 'md',
//   }
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
//   size: 'md',
// };

import type { Meta, StoryObj } from '@storybook/vue3';
import { h, Suspense } from 'vue';

import DarkModeSwitcher from '../node_modules/srcdev-nuxt-forms/components/utils/dark-mode-switcher/DarkModeSwitcher.vue';

const meta = {
  title: 'SRCDEV/Forms/Components/Utils/DarkModeSwitcher Vue',
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

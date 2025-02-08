import type { Meta, StoryFn } from '@nuxtjs/storybook';

import DarkModeSwitcher from '../node_modules/srcdev-nuxt-forms/components/utils/dark-mode-switcher/DarkModeSwitcher.vue';

export default {
  title: 'SRCDEV/Forms/Components/Utils/DarkModeSwitcher Nuxt',
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
  args: {
    label: 'Toggle dark mode',
    name: 'dark-mode-switcher',
    styleClassPassthrough: ['mi-24'],
    labelWeight: 'bold',
    size: 'normal',
  },
} as Meta<typeof DarkModeSwitcher>;

const Template: StoryFn<typeof DarkModeSwitcher> = (args) => ({
  components: { DarkModeSwitcher },
  setup() {
    return { args };
  },
  template: `
    <Suspense>
      <template #default>
        <DarkModeSwitcher v-bind="args" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Toggle dark mode',
  name: 'dark-mode-switcher',
  styleClassPassthrough: ['mi-24'],
  labelWeight: 'bold',
  size: 'normal',
};

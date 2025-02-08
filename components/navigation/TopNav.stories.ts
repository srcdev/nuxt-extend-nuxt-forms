// import type { Meta, StoryFn } from '@nuxtjs/storybook';
import type { Meta, StoryFn } from '@storybook/vue3';

import TopNav from './TopNav.vue';

export default {
  title: 'UI/Components/TopNav',
  component: TopNav,
  args: {},
} as Meta<typeof TopNav>;

const Template: StoryFn<typeof TopNav> = (args) => ({
  components: { TopNav },
  setup() {
    return { args };
  },
  template: `
    <Suspense>
      <template #default>
        <TopNav v-bind="args" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  `,
});

export const Default = Template.bind({});

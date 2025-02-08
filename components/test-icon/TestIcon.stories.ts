// import type { Meta, StoryFn } from '@nuxtjs/storybook';
import type { Meta, StoryFn } from '@storybook/vue3';

import TestIcon from './TestIcon.vue';

export default {
  title: 'UI/Components/TestIcon',
  component: TestIcon,
  args: {},
} as Meta<typeof TestIcon>;

const Template: StoryFn<typeof TestIcon> = (args) => ({
  components: { TestIcon },
  setup() {
    return { args };
  },
  template: `
    <Suspense>
      <template #default>
        <TestIcon v-bind="args" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  `,
});

export const Default = Template.bind({});

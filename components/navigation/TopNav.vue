<template>
  <nav class="top-nav">
    <component :is="menuCoponentnName" :navLinks :styleClassPassthrough="['nav']" />
  </nav>

  <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
    <FormField width="wide" :has-gutter="false">
      <template #default>
        <ToggleSwitchWithLabel v-model="toggleBoolean" id="toggleBoolean" name="toggleBoolean" label="Toggle Modern Css Menu">
          <template #description>
            <p v-if="toggleBoolean" class="label-description">Current displaying modern CSS menu</p>
            <p v-else class="label-description">Current displaying legacy menu</p>
          </template>
        </ToggleSwitchWithLabel>
      </template>
    </FormField>

    <p v-if="modernMenuSupported" class="label-description">Modern CSS menu IS supported in your browser</p>
    <p v-else class="label-description">Modern CSS menu NOT supported in your browser</p>
  </LayoutRow>
</template>

<script setup lang="ts">
interface INavLink {
  name: string;
  path?: string;
  isExternal?: boolean;
  childLinks?: INavLink[];
  childLinksTitle?: string;
}

const navLinks = <INavLink[]>[
  { name: 'Home', path: '/' },
  {
    name: 'Functional',
    childLinksTitle: 'Functional Components',
    childLinks: [
      { name: 'Dialogs', path: '/components/functional/dialog' },
      { name: 'Popover', path: '/components/functional/popover' },
      { name: 'Sample form', path: '/form' },
      { name: 'Buttons', path: '/buttons' },
      { name: 'Limit Text Rows', path: '/limit-text-rows' },
      { name: 'Grid Header Align Height', path: '/aligned-headers' },
      { name: 'Rotating Carousel', path: '/components/ui/rotating-carousel' },
      { name: 'Glowing Cards', path: '/components/ui/container-glow' },
    ],
  },
  {
    name: 'Layout',
    childLinksTitle: 'Layout Components',
    childLinks: [
      { name: 'Layout Row', path: '/components/ui/layout-row' },
      { name: 'Layout Grid A', path: '/components/ui/layout-grid-a' },
      { name: 'Layout Grid B', path: '/components/ui/layout-grid-b' },
      { name: 'Simple Grid', path: '/components/ui/simple-grid' },
      { name: 'Accordian', path: '/components/ui/accordian' },
      { name: 'Tabs X', path: '/components/ui/tabs' },
      { name: 'Tabs Y', path: '/components/ui/tabs-y' },
      { name: 'Prompts', path: '/components/ui/display-prompt' },
      { name: 'Mix Blend Mode', path: '/mix-blend-mode' },
      { name: 'Masonry Grid Simple', path: '/components/ui/masonry-grid' },
      { name: 'Masonry Grid Sorted', path: '/components/ui/masonry-grid-sorted' },
      { name: 'Masonry Grid Ordered', path: '/components/ui/masonry-grid-ordered' },
      { name: 'CSS Counter Test', path: '/components/ui/css-counters' },
    ],
  },
];

const toggleBoolean = ref<boolean>(false);

const modernMenuSupported = computed<boolean>(() => {
  if (import.meta.client) {
    return 'anchorName' in document.documentElement.style;
  }
  return false;
});

const DeepExpandingMenu = defineAsyncComponent(() => import('../../node_modules/srcdev-nuxt-components/components/deep-expanding-menu/DeepExpandingMenu.vue'));
const DeepExpandingMenuOld = defineAsyncComponent(() => import('../../node_modules/srcdev-nuxt-components/components/deep-expanding-menu/DeepExpandingMenuOld.vue'));

const menuCoponentnName = computed(() => (toggleBoolean.value ? DeepExpandingMenu : DeepExpandingMenuOld));
</script>
<style lang="css">
.top-nav {
  display: flex;
  align-items: center;
  z-index: 10;

  .nav {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 2.4rem;
    padding: 2rem;
    list-style-type: none;

    li {
      margin-right: 1rem;
    }
  }
}
</style>

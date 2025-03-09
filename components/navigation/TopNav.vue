<template>
  <nav class="top-nav">
    <DeepExpandingMenu :navLinks :styleClassPassthrough="['nav']" />
  </nav>
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
</script>
<style lang="css">
.top-nav {
  display: flex;
  align-items: center;

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

<template>
  <nav class="top-nav">
    <ul class="nav">
      <li v-for="(link, index) in navLinks" :key="link.name">
        <NuxtLink :to="link.path" class="link-normal">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface INavLink {
  name: string;
  path: string;
}

const navLinks = <INavLink[]>[
  { name: 'Home', path: '/' },
  { name: 'Sample form', path: '/form' },
  { name: 'Buttons', path: '/buttons' },
  { name: 'Typography', path: '/typography' },
  { name: 'Limit Text Rows', path: '/limit-text-rows' },
  { name: 'Grid Header Align Height', path: '/aligned-headers' },
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
  { name: 'Rotating Carousel', path: '/components/ui/rotating-carousel' },
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

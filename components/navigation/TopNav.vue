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
  { name: 'Masonry Layout', path: '/masonry-layout' },
  { name: 'Sample form', path: '/form' },
  { name: 'Buttons', path: '/buttons' },
];
</script>
<style lang="css">
.top-nav {
  .nav {
    display: flex;
    gap: 24px;
    padding: 2rem;
    background-color: light-dark(#efefef, #333);
    list-style-type: none;

    li {
      margin-right: 1rem;

      .link-normal {
        color: light-dark(var(--blue-12), var(--gray-2));
      }
    }
  }
}
</style>

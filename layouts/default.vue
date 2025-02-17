<template>
  <div class="page-layout">
    <TopNav />
    <ul class="nav mbs-20">
      <li><NuxtLink to="/components/functional/dialog" class="link-normal">Dialog</NuxtLink></li>
      <li><NuxtLink to="/components/functional/popover" class="link-normal">Popover</NuxtLink></li>
      <li><NuxtLink to="/components/ui/layout-row" class="link-normal">Layout Row</NuxtLink></li>
      <li><NuxtLink to="/components/ui/nav-links" class="link-normal">Nav/Tab Links</NuxtLink></li>
      <li><NuxtLink to="/components/ui/container-glow" class="link-normal">Glowing Cards</NuxtLink></li>
    </ul>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'body-default',
    id: 'body',
  },
  // link: [
  //   {
  //     rel: 'preconnect',
  //     href: 'https://fonts.googleapis.com',
  //   },
  //   {
  //     rel: 'preconnect',
  //     href: 'https://fonts.gstatic.com',
  //     crossorigin: 'use-credentials',
  //   },
  //   {
  //     href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  //     rel: 'stylesheet',
  //   },
  // ],
});

// const { getSetPrefereredColourScheme } = useColourScheme();

// onBeforeMount(() => {
//   getSetPrefereredColourScheme();
// });
</script>

<style lang="css">
body {
  margin: 0;
  overflow-x: hidden;
}
.page-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  padding: 2rem;
  list-style-type: none;

  li {
    margin-right: 1rem;
  }
}
</style>

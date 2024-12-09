<template>
  <div class="page-layout">
    <TopNav />
    <ul class="nav mbs-20">
      <li><NuxtLink to="/components/functional/dialog" class="link-normal">Dialog</NuxtLink></li>
      <li><NuxtLink to="/components/functional/popover" class="link-normal">Popover</NuxtLink></li>
      <li><NuxtLink to="/components/ui/layout-row" class="link-normal">Layout Row</NuxtLink></li>
      <li><NuxtLink to="/components/ui/nav-links" class="link-normal">Nav Links</NuxtLink></li>
    </ul>
    <slot name="content"></slot>
  </div>
</template>

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
  gap: 24px;
  padding: 2rem;
  background-color: light-dark(#efefef, #333);
  color: white;
  list-style-type: none;

  li {
    margin-right: 1rem;
  }
}
</style>

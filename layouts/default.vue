<template>
  <div class="page-layout">
    <ul class="nav">
      <li><NuxtLink to="/" class="link-normal">Home</NuxtLink></li>
      <li><NuxtLink to="/masonry-layout" class="link-normal">Masonry Layout</NuxtLink></li>
      <li><NuxtLink to="/form" class="link-normal">Sample form</NuxtLink></li>
      <li><NuxtLink to="/buttons" class="link-normal">Sample buttons</NuxtLink></li>
    </ul>
    <ul class="nav mbs-20">
      <li><NuxtLink to="/components/functional/dialog" class="link-normal">Dialog</NuxtLink></li>
      <li><NuxtLink to="/components/functional/popover" class="link-normal">Popover</NuxtLink></li>
      <li><NuxtLink to="/components/ui/layout-row" class="link-normal">Layout Row</NuxtLink></li>
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

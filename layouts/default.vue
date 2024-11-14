<template>
  <div class="page-layout">
    <ul class="nav">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/masonry-layout">Masonry Layout</NuxtLink></li>
      <li><NuxtLink to="/form">Sample form</NuxtLink></li>
      <li><NuxtLink to="/buttons">Sample buttons</NuxtLink></li>
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
  background-color: #333;
  color: white;
  list-style-type: none;

  li {
    margin-right: 1rem;
  }
}
</style>

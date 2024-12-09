<template>
  <nav role="tablist" ref="navContainerRef" @mouseleave="resetHoverToActivePosition()" class="top-nav">
    <ul>
      <li v-for="(link, index) in navLinks" :key="link.name">
        <NuxtLink @click.stop.prevent="navItemClicked($event)" @mouseover="navItemHovered($event)" :to="link.path" :data-tab-index="index" data-nav-item role="tab" :aria-selected="false">{{
          link.name
        }}</NuxtLink>
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

const navContainerRef = ref<HTMLElement | null>(null);
const { initNavDecorators, navItemClicked, navItemHovered, resetHoverToActivePosition } = useNavDecoration(navContainerRef, 200);
onMounted(() => {
  initNavDecorators();
});
</script>
<style lang="css">
.top-nav {
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
    }
  }
}

[role='tablist'] {
  position: relative;
  display: flex;
  width: fit-content;
  border-bottom: 1px solid hsl(0 0% 30%);
  margin-block: 3rem;
  z-index: 1;
}

[role='tab'] {
  color: #fff;
  background: lightblue;
  background: transparent;
  display: inline-block;
  padding: 1em 2em;
  border: 0;
  font: inherit;
  text-transform: uppercase;
  font-weight: 500;
  opacity: 0.7;
  cursor: pointer;
  position: relative;
  z-index: 4;
}

[role='tab']:hover {
  opacity: 1;
}

[role='tab'][aria-selected='true'] {
  opacity: 1;
}

[role='tab'].nav__hovered {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  scale: var(--_width-hovered, 0.125) 1;
  translate: var(--_left-hovered, 0) 0;
  transform-origin: left;
  transition: scale var(--_transition-duration), translate var(--_transition-duration);
  z-index: 1;

  background: var(--gray-2);
  color: var(--gray-9);
}

[role='tab'].nav__active {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  scale: var(--_width-active, 0.125) 1;
  translate: var(--_left-active, 0) 0;
  transform-origin: left;
  transition: scale var(--_transition-duration), translate var(--_transition-duration);
  z-index: 2;

  background: var(--gray-2);
  color: var(--gray-9);
}

[role='tab'].nav__active-indicator {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px;
  scale: var(--_width-active, 0.125) 1;
  translate: var(--_left-active, 0) 0;
  transform-origin: left;
  transition: scale var(--_transition-duration), translate var(--_transition-duration);
  background: white;
  z-index: 3;
}
</style>

<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="popout" :style-class-passthrough="['mbs-32']">
          <h2 class="heading-2">Tabs #1</h2>
          <p>Tabs of varying length</p>

          <TabsCore :navItems="navLinks3" :transitionDuration="300" :style-class-passthrough="['class-modifier']">
            <template v-for="(item, key) in navLinks3" v-slot:[`tab-${key}-trigger`]> {{ key }} - {{ item.name }} </template>
            <template v-slot:[`tab-0-content`]>
              <p class="p-24">This is content slot 0</p>
            </template>
            <template v-slot:[`tab-1-content`]>
              <p class="p-24">This is content slot 1</p>
            </template>
            <template v-slot:[`tab-2-content`]>
              <p class="p-24">This is content slot 2</p>
            </template>
          </TabsCore>
        </LayoutRow>

        <LayoutRow tag="div" variant="popout" :style-class-passthrough="['mbs-32']">
          <h2 class="heading-2">Tabs #2</h2>

          <TabsCore :navItems="navLinks4" :style-class-passthrough="['class-modifier']">
            <template v-for="(item, key) in navLinks4" v-slot:[`tab-${key}-trigger`]> {{ key }} - {{ item.name }} </template>
            <template v-slot:[`tab-0-content`]>
              <p class="p-24">This is content slot 0</p>
            </template>
            <template v-slot:[`tab-1-content`]>
              <p class="p-24">This is content slot 1</p>
            </template>
            <template v-slot:[`tab-2-content`]>
              <p class="p-24">This is content slot 2</p>
            </template>
            <template v-slot:[`tab-3-content`]>
              <p class="p-24">This is content slot 3</p>
            </template>
          </TabsCore>
        </LayoutRow>

        <LayoutRow tag="div" variant="popout" :style-class-passthrough="['mbs-32']">
          <h2 class="heading-2">Tabs #3</h2>

          <TabsCore :navItems="navLinks6" :style-class-passthrough="['class-modifier']">
            <template v-for="(item, key) in navLinks6" v-slot:[`tab-${key}-trigger`]> {{ key }} - {{ item.name }} </template>
            <template v-slot:[`tab-0-content`]>
              <p class="p-24">This is content slot 0</p>
            </template>
            <template v-slot:[`tab-1-content`]>
              <p class="p-24">This is content slot 1</p>
            </template>
            <template v-slot:[`tab-2-content`]>
              <p class="p-24">This is content slot 2</p>
            </template>
            <template v-slot:[`tab-3-content`]>
              <p class="p-24">This is content slot 3</p>
            </template>
            <template v-slot:[`tab-4-content`]>
              <p class="p-24">This is content slot 4</p>
            </template>
            <template v-slot:[`tab-5-content`]>
              <p class="p-24">This is content slot 5</p>
            </template>
          </TabsCore>
        </LayoutRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { ITabNav } from '@/types/types.tabs';
definePageMeta({
  layout: false,
});

useHead({
  title: 'UI Tabs',
  meta: [{ name: 'description', content: 'Examples of UI Component Tabs' }],
  bodyAttrs: {
    class: 'home',
  },
});

const navLinks3 = <ITabNav[]>[
  { name: 'Home', path: '/' },
  { name: 'Layout Row', path: '/ui/layout-row' },
  { name: 'Dialogs', path: '/ui/dialog' },
];

const navLinks4 = <ITabNav[]>[
  { name: 'Home', path: '/' },
  { name: 'Layout Row', path: '/ui/layout-row' },
  { name: 'Dialogs', path: '/ui/dialog' },
  { name: 'Tabs', path: '/ui/tabs' },
];

const navLinks6 = <ITabNav[]>[
  { name: 'Home', path: '/' },
  { name: 'Layout Row', path: '/ui/layout-row' },
  { name: 'Dialogs', path: '/ui/dialog' },
  { name: 'Tabs', path: '/ui/tabs' },
  { name: 'Something Else', path: '/ui/something' },
  { name: 'Home Again', path: '/' },
];
</script>

<style lang="css">
.tabs-list.colour-test {
  --_default-text: light-dark(var(--green-4), var(--green-5));
  --_active-bg: light-dark(var(--red-12), var(--red-0));
  --_active-text: light-dark(var(--yellow-3), var(--yellow-6));
  --_active-indicator: light-dark(var(--orange-6), var(--orange-7));
  --_hovered-bg: light-dark(var(--blue-7), var(--blue-3));
  --_hovered-text: light-dark(var(--blue-4), var(--blue-12));
  --_border-bottom: light-dark(var(--red-7), var(--red-6));

  border-bottom: 0.1rem solid var(--_border-bottom);
  margin-block: 3rem;

  .nav__hovered {
    background: var(--_hovered-bg);
    color: var(--_hovered-text);
  }

  .nav__active {
    background: var(--_active-bg);
    color: var(--_active-text);
  }

  .nav__active-indicator {
    background: var(--_active-indicator);
    height: 0.4rem;
  }

  .tabs-list-item {
    background: transparent;
    border: 0;
    color: var(--_default-text);
    cursor: pointer;
    font: inherit;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
    padding: 1em 2em;

    &:hover {
      color: var(--_hovered-text);
    }

    &[aria-selected='true'] {
      color: var(--_active-text);
    }
  }
}
</style>

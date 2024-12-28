<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="popout" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2">Tabs</h2>
        </LayoutRow>
        <LayoutRow tag="div" variant="popout" :style-class-passthrough="['mbs-32']">
          <template #default>
            <Tabs :navItems="navLinks" :style-class-passthrough="['colour-test']" />
          </template>
        </LayoutRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: 'UI Dialog',
  meta: [{ name: 'description', content: 'Examples of UI Component Dialog' }],
  bodyAttrs: {
    class: 'home',
  },
});

interface INavLink {
  name: string;
  path: string;
}

const navLinks = <INavLink[]>[
  { name: 'Home', path: '/' },
  { name: 'Layout Row', path: '/ui/layout-row' },
  { name: 'Dialogs', path: '/ui/dialog' },
  { name: 'Tabs', path: '/ui/tabs' },
  { name: 'Something Else', path: '/ui/something' },
];
</script>

<style lang="css">
.tabs-list.colour-test {
  --_default-text: light-dark(var(--blue-12), var(--gray-2));
  --_active-bg: light-dark(var(--blue-12), var(--blue-10));
  --_active-text: light-dark(var(--gray-1), var(--gray-1));
  --_active-indicator: light-dark(var(--blue-5), var(--blue-1));
  --_hovered-bg: light-dark(var(--blue-1), var(--blue-3));
  --_hovered-text: light-dark(var(--blue-12), var(--blue-12));
  --_border-bottom: light-dark(var(--blue-5), var(--blue-1));

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

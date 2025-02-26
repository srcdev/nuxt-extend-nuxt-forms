<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h1 class="header-1">Colour Mode Switcher</h1>
          <div class="m-12">
            <ColourSchemeSelect :style-class-passthrough="['m-24']" />
          </div>
        </LayoutRow>

        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h1 class="header-1">Mix Blend Mode</h1>
          <p class="body-normal">Used for background image canvas removal</p>
          >
        </LayoutRow>

        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h1 class="header-1">Mix Blend Mode</h1>
          <p class="body-normal">Used for background image canvas removal</p>
          >
        </LayoutRow>

        <LayoutRow tag="div" variant="full" :styleClassPassthrough="['mbe-20', 'object-fit']">
          <NuxtImg src="/assets/images/karen-blonde-1.png" class="test-image" alt="Hero image" />
        </LayoutRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Mix Blend Mode',
  meta: [
    {
      name: 'description',
      content: 'Nuxt project using layers for forms and components',
    },
  ],
  bodyAttrs: {
    class: 'home',
  },
});
</script>

<style lang="css">
.flex-group {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  margin-bottom: 3.2rem;
}

ul.flex-group {
  list-style-type: none;
  padding: 0;
}

.header-1 {
  font-family: var(--font-family);
  color: var(--brand-success-text-text);
}

.layout-row {
  &.object-fit {
    object-fit: cover;

    .test-image {
      width: 100%;
      mix-blend-mode: lighten;
    }
  }
}
</style>

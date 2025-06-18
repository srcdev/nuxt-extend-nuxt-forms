<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2 mbe-24">Grid Header Align Height</h2>

          <div class="cols-row">
            <div class="col 1">
              <Icon name="radix-icons:envelope-closed" class="icon" />
              <h3 class="heading-3">This is header text</h3>
              <p>This is body class="body-normal"copy for testing purposes, should have just done some Lorum Ipsum really</p>
            </div>
            <div class="col 2">
              <Icon name="radix-icons:envelope-closed" class="icon" />
              <h3 class="heading-3">This is slightly longer text header text</h3>
              <p class="body-normal">This is body copy for testing purposes, should have just done some Lorum Ipsum really</p>
            </div>
            <div class="col 3">
              <Icon name="radix-icons:envelope-closed" class="icon" />
              <h3 class="heading-3">This is header text with a lot more characters to test balanced header height</h3>
              <p class="body-normal">This is body copy for testing purposes, should have just done some Lorum Ipsum really</p>
            </div>
            <div class="col 4">
              <Icon name="radix-icons:envelope-closed" class="icon" />
              <h3 class="heading-3">This is header text</h3>
              <p class="body-normal">This is body copy for testing purposes, should have just done some Lorum Ipsum really</p>
            </div>
          </div>
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
  title: 'Aligned header',
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
.cols-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;

  .col {
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 1.6rem;
  }
}
</style>

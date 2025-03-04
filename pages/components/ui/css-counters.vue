<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2">CSS Counters Test</h2>
        </LayoutRow>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['css-counters-wrapper', 'mbe-20']">
          <div class="grid-row">
            <div class="item-row">
              <span class="counter-circle"></span>
              <p class="body-normal">Column 1</p>
            </div>
            <div class="item-row">
              <span class="counter-circle"></span>
              <p class="body-normal">Column 2</p>
            </div>
          </div>

          <div class="grid-row">
            <div class="item-row">
              <span class="counter-circle"></span>
              <p class="body-normal">Column 1</p>
            </div>
            <div class="item-row">
              <span class="counter-circle"></span>
              <p class="body-normal">Column 2</p>
            </div>
          </div>

          <div class="columns-row">
            <div class="item-row">
              <span class="counter-circle"></span>
              <p class="body-normal">Column 1</p>
            </div>
            <div class="item-row">
              <span class="counter-circle"></span>
              <p class="body-normal">Column 2</p>
            </div>
          </div>

          <div class="flex-row">
            <div class="item-row">
              <span class="counter-circle"></span>
              <p class="body-normal">Column 1</p>
            </div>
            <div class="item-row">
              <span class="counter-circle"></span>
              <p class="body-normal">Column 2</p>
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
  title: 'Browser title tag',
  meta: [
    {
      name: 'description',
      content: 'Meta description content',
    },
  ],
  bodyAttrs: {
    class: 'classname-for-namespacing-if-desired',
  },
});
</script>

<style lang="css">
.css-counters-wrapper {
  --_border-color: light-dark(hsl(0, 29%, 3%), hsl(0, 0%, 92%));
  --_background-colour: light-dark(hsl(0, 0%, 100%), hsl(0, 0%, 10%));

  counter-reset: circle-counter;
  /* CSS styles */

  .grid-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }

  .columns-row {
    columns: auto 2;
    gap: 2.4rem;
  }

  .flex-row {
    display: flex;
    gap: 2.4rem;
    justify-content: stretch;
  }

  .item-row {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2.4rem;
  }

  .counter-circle {
    counter-increment: circle-counter;

    display: inline-grid;
    place-content: center;
    width: 3.2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;

    &:before {
      content: counter(circle-counter);
    }

    background-color: var(--_background-colour);
    outline: 0.1rem solid var(--_border-color);
  }
}
</style>

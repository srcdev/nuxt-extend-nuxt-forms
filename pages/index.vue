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
          <h1 class="header-1">Test Link to an external local dev</h1>
          <NuxtLink to="https://neighbourly.dev.local/auth-true" target="_blank">Auth true</NuxtLink>
        </LayoutRow>

        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h1 class="header-1">Test Icon</h1>
          <TestIcon />
        </LayoutRow>

        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2">Examples extended via NPM package</h2>

          <div>
            <p>
              This is an example store to test out devtools. Try one of the following with the devtools open:
              <br />
            </p>

            <ol>
              <li>Use the different increment actions</li>
              <li>Change the counter directly from the devtools</li>
              <li>Use decrement to zero to see how action groups work</li>
              <li>
                Click
                <b>Test Errors</b> and immediately after <b>increment</b> the store
              </li>
              <li>While the dev server is running, try changing counter.changeMe, adding, and removing new state properties</li>
            </ol>

            <h2>Counter Store</h2>

            <p data-testid="counter-values">Counter: {{ counter }}. Double: {{ double }}</p>

            <p>Increment the Store:</p>

            <ul class="flex-group">
              <li>
                <button @click="useCounterStore().increment()" data-testid="increment">+1</button>
              </li>
              <li>
                <button @click="useCounterStore().increment(10)">+10</button>
              </li>
              <li>
                <button @click="useCounterStore().increment(100)">+100</button>
              </li>
            </ul>

            <ul class="flex-group">
              <li>
                <button @click="useCounterStore().fail()">Test Errors</button>
              </li>
              <li>
                <button @click="useCounterStore().decrementToZero()">Decrement to zero</button>
              </li>
              <li>
                <button @click="useCounterStore().changeMe()">
                  <code>changeMe()</code>
                </button>
              </li>
            </ul>
            <hr />

            <p>
              Complete store state via
              <code>store.$state</code>:
            </p>

            <pre>{{ useCounterStore().$state }}</pre>
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
  title: 'Home - Sample form',
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

// const counterStore = useCounterStore();
const { counter, double } = storeToRefs(useCounterStore());
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
</style>

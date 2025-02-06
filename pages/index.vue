<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
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

            <p data-testid="counter-values">Counter: {{ n }}. Double: {{ double }}</p>

            <p>Increment the Store:</p>

            <ul class="flex-group">
              <li>
                <button @click="counter.increment()" data-testid="increment">+1</button>
              </li>
              <li>
                <button @click="counter.increment(10)">+10</button>
              </li>
              <li>
                <button @click="counter.increment(100)">+100</button>
              </li>
              <li>
                <button @click="counter.n++">Direct Increment</button>
              </li>
              <li>
                <button
                  @click="
                    counter.$patch((state) => {
                      state.n++;
                      state.incrementedTimes++;
                    })
                  "
                >
                  Direct patch
                </button>
              </li>
            </ul>

            <ul class="flex-group">
              <li>
                <button @click="counter.fail">Test Errors</button>
              </li>
              <li>
                <button @click="counter.decrementToZero()">Decrement to zero</button>
              </li>
              <li>
                <button @click="counter.changeMe()">
                  <code>counter.changeMe()</code>
                </button>
              </li>
            </ul>
            <hr />

            <p>
              Complete store state via
              <code>store.$state</code>:
            </p>

            <pre>{{ counter.$state }}</pre>
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

const counter = useCounter();
const { n, double } = storeToRefs(useCounter());
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

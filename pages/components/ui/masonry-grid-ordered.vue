<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="popout" :styleClassPassthrough="['mbe-20']">
          <h1 class="heading-3">Masonry Grid Ordered</h1>
          <p>This masonry grid can used when the reading order ltr</p>
          <p>Keyboard navigation will track element hierarchy, uses positioning aand can be animated when sorting filtering</p>
          <CanvasSwitcher v-model:canvasName="canvasName" />
        </LayoutRow>

        <LayoutRow tag="div" variant="popout" :styleClassPassthrough="['mbe-20']">
          <MasonryGridOrdered
            v-if="status === 'success'"
            :gridData="quotesData?.quotes.slice(0, displayCount) ?? <IQuotes>{}"
            :gap="12"
            :min-tile-width="300"
            :fixed-width="useFixedWidth"
            :styleClassPassthrough="[canvasName, 'mi-auto']"
          >
            <template v-for="(item, index) in quotesData?.quotes.slice(0, displayCount)" v-slot:[item.id]>
              <div class="p-10 border border-1 border-grey-dark border-r-4">
                <p class="text-normal wght-700">{{ index + 1 }}: {{ item.author }}</p>
                <p class="text-normal">{{ item.quote }}</p>
              </div>
            </template>
          </MasonryGridOrdered>
          <p v-else class="body-normal">&hellip;Loading</p>
        </LayoutRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { IQuotes } from '@/types/types.quotes';
import type { MediaCanvas } from '@/types/types.canvasName';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Masonry Grid Ordered',
  meta: [{ name: 'description', content: 'Masonry Grid Ordered' }],
  bodyAttrs: {
    class: '',
  },
});
const canvasName = ref<MediaCanvas>('desktopCanvas');

const useFixedWidth = true;
const displayCount = 12;
const { data: quotesData, status } = await useFetch<IQuotes>('https://dummyjson.com/quotes');
</script>

<style lang="css">
.masonry-grid-ordered {
  --_border-color: light-dark(hsl(0, 29%, 3%), hsl(0, 0%, 92%));
  --_background-colour: light-dark(hsl(0, 0%, 100%), hsl(0, 0%, 10%));

  .masonry-grid-ordered-wrapper {
    .masonry-grid-ordered-item {
      background-color: var(--_background-colour);
      outline: 0.1rem solid var(--_border-color);
      padding: 1.2rem;
      border-radius: 4px;
    }
  }
}
</style>

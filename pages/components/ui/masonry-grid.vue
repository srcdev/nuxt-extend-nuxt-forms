<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2">Masonry Grid</h2>
          <p>This masonry grid is the most basic css but can only be used when the reading order (ltd respresenting element order isn't necessary.)</p>
          <p>Note the element numbers are vertical down each column, keyboard navigation will track this pattern</p>
          <CanvasSwitcher v-model:canvasName="canvasName" />
        </LayoutRow>

        <LayoutRow tag="div" variant="popout" :styleClassPassthrough="['mbe-20']">
          <MasonryGrid :gridData="quotesData?.quotes.slice(0, qoutesDisplayCount) ?? <IQuotes>{}" :itemMinWidth="350" :gap="3.2" unit="rem" :styleClassPassthrough="[canvasName, 'mi-auto']">
            <template v-for="(item, index) in quotesData?.quotes.slice(0, qoutesDisplayCount)" v-slot:[item.id]>
              <div class="">
                <p class="">{{ index + 1 }}: {{ item.author }}</p>
                <p class="">{{ item.quote }}</p>
              </div>
            </template>
          </MasonryGrid>
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
  title: 'Masonry Grid',
  meta: [{ name: 'description', content: 'Masonry Grid - Nuxt Components Layer extending a Nuxt project' }],
  bodyAttrs: {
    class: 'home',
  },
});

const canvasName = ref<MediaCanvas>('desktopCanvas');

const qoutesDisplayCount = 21;
const { data: quotesData, status, error, refresh } = await useFetch<IQuotes>('https://dummyjson.com/quotes');
</script>

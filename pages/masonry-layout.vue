<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2">Masonry Layout</h2>

          <MasonryGrid :gridData="quotesData?.quotes.slice(0, qoutesDisplayCount) ?? <IQuotes>{}">
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

definePageMeta({
  layout: false,
});

useHead({
  title: 'Masonry Layout',
  meta: [{ name: 'description', content: 'Nuxt Components Layer extending a Nuxt project' }],
  bodyAttrs: {
    class: 'home',
  },
});

const qoutesDisplayCount = 21;
const { data: quotesData, status, error, refresh } = await useFetch<IQuotes>('https://dummyjson.com/quotes');
</script>

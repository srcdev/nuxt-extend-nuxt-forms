<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <PageRow :isFullWidth="false">
          <template #default>
            <h1>Examples extended via NPM package</h1>
          </template>
        </PageRow>
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
</script>

<style lang="css">
.flex-group {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 32px;
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

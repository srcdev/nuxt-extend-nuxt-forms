<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2">Popover</h2>
          <div style="text-align: center">
            <h1>PopOver component 1</h1>
            <PopOver popovertarget="profile1">
              <template #trigger>
                <img class="profile-image" src="https://ui-avatars.com/api/name=1?background=0A8A0A&color=fff" alt="" />
              </template>
              <template #popoverCotent>
                <h2>Popover content 1</h2>
              </template>
            </PopOver>
          </div>
        </LayoutRow>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <div style="text-align: center">
            <h1>PopOver component 2</h1>
            <PopOver popovertarget="profile2">
              <template #trigger>
                <img class="profile-image" src="https://ui-avatars.com/api/name=2?background=0A8A0A&color=fff" alt="" />
              </template>
              <template #popoverCotent>
                <h2>Popover content 2</h2>
              </template>
            </PopOver>
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
  title: 'Popover',
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

<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2">Popover</h2>
          <p class="body-normal">
            "anchorName" Supported <span class="body-normal-semibold">{{ anchorNameSupported }}</span>
          </p>
          <div style="text-align: center">
            <h1>PopOver component 1</h1>
            <PopOver popovertarget="profile1" :styleClassPassthrough="['popover-1']">
              <template #trigger>
                <img class="profile-image" src="https://ui-avatars.com/api/name=1?background=0A8A0A&color=fff" alt="" />
              </template>
              <template #popoverCotent>
                <h2>Popover content 1a</h2>
              </template>
            </PopOver>
          </div>
        </LayoutRow>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <div style="text-align: center">
            <h1>PopOver component 2</h1>
            <PopOver popovertarget="profile2" :styleClassPassthrough="['popover-2']">
              <template #trigger>
                <img class="profile-image" src="https://ui-avatars.com/api/name=2?background=0A8A0A&color=fff" alt="" />
              </template>
              <template #popoverCotent>
                <h2>Popover content 2a</h2>
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

const anchorNameSupported = computed(() => {
  return import.meta.client && !('anchorName' in document.documentElement.style);
});
</script>

<style lang="css">
dialog {
  &.popover-1 {
    width: 300px;
    height: 150px;
    /* background-color: #fff; */
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
}
</style>

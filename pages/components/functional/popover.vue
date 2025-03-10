<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h2 class="heading-2">Popover</h2>
          <ClientOnly>
            <p class="body-normal">
              "anchorName" Supported <span class="body-normal-semibold">{{ anchorNameSupported }}</span>
            </p>
          </ClientOnly>
          <p class="body-normal">
            If anchorName is supported, the popover below will display to right of the green image, if it cannot fit in the view port, it will fallback to positioning left of green image
          </p>
          <div style="text-align: left">
            <h1>PopOver component left</h1>
            <PopOver popovertarget="profile1" :styleClassPassthrough="['popover-1']">
              <template #trigger>
                <img class="profile-image" src="https://ui-avatars.com/api/name=1?background=0A8A0A&color=fff" alt="" />
              </template>
              <template #popoverCotent>
                <h2>Popover content</h2>
              </template>
            </PopOver>
          </div>
        </LayoutRow>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <div style="text-align: center">
            <h1>PopOver component centre</h1>
            <PopOver popovertarget="profile2" :styleClassPassthrough="['popover-2']">
              <template #trigger>
                <img class="profile-image" src="https://ui-avatars.com/api/name=2?background=0A8A0A&color=fff" alt="" />
              </template>
              <template #popoverCotent>
                <h2>Popover content</h2>
              </template>
            </PopOver>
          </div>
        </LayoutRow>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <div style="text-align: right">
            <h1>PopOver component right</h1>
            <PopOver popovertarget="profile3" :styleClassPassthrough="['popover-3']">
              <template #trigger>
                <img class="profile-image" src="https://ui-avatars.com/api/name=2?background=0A8A0A&color=fff" alt="" />
              </template>
              <template #popoverCotent>
                <h2>Popover content</h2>
              </template>
            </PopOver>
          </div>
        </LayoutRow>
      </template>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { ClientOnly } from '#components';

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
  return 'anchorName' in document.documentElement.style;
});
</script>

<style lang="css">
dialog {
  &.popover-1 {
    width: 300px;
    height: 150px;
    /* background-color: #fff; */
    border: 0.1rem solid #fff;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.1);
  }
}
</style>

<template>
  <div class="page-layout">
    <TopNav />

    <p class="mi-12 body-normal-semibold">Top Nav currently BETA</p>

    <!-- <p class="mi-12 body-normal-semibold">Top Nav currently only displays correctly in Chromium desktop</p>
    <p class="mi-12 body-normal">Top Nav currently uses the <samp>position-anchor</samp> property which is recognized as an experimental technology.</p> -->

    <slot name="content"></slot>
  </div>
</template>

<script type="module" lang="ts">
// declare global {
//   interface Window {
//     ANCHOR_POSITIONING_POLYFILL_OPTIONS?: {
//       elements?: any;
//       excludeInlineStyles?: boolean;
//       useAnimationFrame?: boolean;
//     };
//   }
// }

// if (import.meta.client) {
//   (async () => {
//     if (!('anchorName' in document.documentElement.style)) {
//       window.ANCHOR_POSITIONING_POLYFILL_OPTIONS = {
//         elements: undefined,
//         excludeInlineStyles: false,
//         useAnimationFrame: false,
//       };
//       await import('@oddbird/css-anchor-positioning');
//     }
//   })();
// }
</script>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'body-default',
    id: 'body',
  },
  // link: [
  //   {
  //     rel: 'preconnect',
  //     href: 'https://fonts.googleapis.com',
  //   },
  //   {
  //     rel: 'preconnect',
  //     href: 'https://fonts.gstatic.com',
  //     crossorigin: 'use-credentials',
  //   },
  //   {
  //     href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  //     rel: 'stylesheet',
  //   },
  // ],
});

// const { getSetPrefereredColourScheme } = useColourScheme();

// onBeforeMount(() => {
//   getSetPrefereredColourScheme();
// });
</script>

<style lang="css">
body {
  margin: 0;
  overflow-x: hidden;
}
.page-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  padding: 2rem;
  list-style-type: none;

  li {
    margin-right: 1rem;
  }
}
</style>

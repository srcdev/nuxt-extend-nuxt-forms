<template>
  <div>
    <NuxtLayout name="default">
      <template #content>
        <LayoutRow tag="div" variant="full-width" :styleClassPassthrough="['mbe-20']">
          <h1 class="heading-3">Limit Text Rows</h1>
          <p class="body-normal">Only allow 3 number of text rows to display</p>
          <div class="text-wrapper mbe-24">
            <p class="body-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="text-wrapper mbe-24">
            <p class="body-normal">
              Nisi harum impedit, expedita eius doloremque dicta obcaecati tempora dolorem eum fuga deserunt minus facere error mollitia pariatur cum tempore, reiciendis molestiae?
            </p>
          </div>
          <div class="text-wrapper mbe-24">
            <p class="body-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum impedit, expedita eius doloremque dicta obcaecati tempora dolorem eum fuga deserunt minus facere error mollitia
              pariatur cum tempore, reiciendis molestiae?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi harum impedit, expedita eius doloremque dicta obcaecati tempora dolorem eum fuga deserunt minus facere error mollitia
              pariatur cum tempore, reiciendis molestiae?
            </p>
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
  title: 'Limit Text to n rows',
  meta: [{ name: 'description', content: 'Limit Text to n rows' }],
  bodyAttrs: {
    class: '',
  },
});
</script>

<style lang="css">
.text-wrapper {
  padding: 2rem;
  outline: 0.1rem solid light-dark(var(--blue-12), var(--gray-2));
  place-content: center;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin-block: auto;
  }
}
</style>

<template>
  <div>
    <div class="test-icon p-20">
      <Icon name="mdi-light:layers" class="icon black" />
    </div>
    <div class="test-icon mbs-20 p-20">
      <Icon name="mdi-light:layers" class="icon white" />
    </div>
  </div>
</template>

<style lang="css">
.test-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    border: 1px solid red;
    font-size: 4rem;
    width: 4rem;
    height: 4rem;

    &.black {
      color: black;
    }
    &.white {
      color: white;
    }
  }
}
</style>

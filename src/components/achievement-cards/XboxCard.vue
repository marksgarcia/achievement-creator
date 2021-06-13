<template>
  <section class="card">
    <slot name="image"></slot>
    <slot name="text"></slot>
  </section>
</template>
<style lang="scss" scoped>
.card {
  @include flexbox();
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  height: 126px;
  width: 600px;

}
</style>

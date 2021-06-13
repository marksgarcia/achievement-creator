<template>
  <section class="card">
    <div class="inner-card-1">
      <div class="inner-card-2">
        <div class="inner-card-3">
          <slot name="image"></slot>
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.card {
  background: $quaternary-red;
  border-radius: 100px 70px 70px 100px;
  color: #ffffff;
  @include flexbox();
  justify-content: center;
  align-items: stretch;
  width: 670px;

  .inner-card-1 {
    background: $tertiary-red;
    border-radius: 100px 70px 70px 100px;
    color: #ffffff;
    @include flexbox();
    justify-content: center;
    align-items: stretch;
    width: 660px;

    .inner-card-2 {
      background: $secondary-red;
      border-radius: 100px 70px 70px 100px;
      color: #ffffff;
      @include flexbox();
      justify-content: center;
      align-items: stretch;
      width: 650px;

      .inner-card-3 {
        background: $primary-red;
        border-radius: 100px 70px 70px 100px;
        color: #ffffff;
        @include flexbox();
        justify-content: flex-start;
        align-items: center;
        padding: 10px 0;
        width: 650px;
      }
    }
  }
}
</style>

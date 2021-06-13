<template>
  <section class="card">
    <div class="image-slot">
      <slot name="image"></slot>
      <div class="logo-card">
        <img src="@/assets/logos/minn-max.svg" alt="minn max logo" />
      </div>
    </div>
    <slot name="text"></slot>
    <span class="milestone-tag" v-if="hasMilestone">Milestonne</span>
  </section>
</template>
<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore();
    const hasMilestone = computed(() => {
      return store.getters.getMilestone
    })
    return {
hasMilestone
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  @include flexbox();
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 126px;
  width: 600px;

  .image-slot {
    @include flexbox();
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    .logo-card {
      background: #ffffff;
      @include flexbox();
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      position: absolute;
      bottom: -0;
      right: -0;
      border: 4px solid $minnmax-orange;
      height: 2em;
      width: 2em;

      img {
        display: block;
        width: 80%;
      }
    }
  }

  .milestone-tag {
    background: rgba(#fff, 0.8);
    border-radius: 15px 30px 15px 30px;
    font-family: "Croogla 4F";
    font-size: 0.9em;
    position: absolute;
    right: 20px;
    padding: 0.2em 0.4em;
    text-transform: lowercase;
    top: 15px;
    color: $minnmax-orange;
  }
}
</style>

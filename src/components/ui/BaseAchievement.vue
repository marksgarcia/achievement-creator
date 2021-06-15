<template>
  <div class="achievement-card" :class="[mode, getTheme]">
    <slot></slot>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["mode"],
  setup() {
    const store = useStore();
    const imageUploaded = computed(() => {
      return store.getters.getImage !== "";
    });

    const getTheme = computed(() => {
      return store.getters.getTheme;
    });
    return { imageUploaded, getTheme};
  },
};
</script>
<style lang="scss" scoped>
.achievement-card.minnmax {
  @include flexbox();
  background: $minnmax-orange;
  align-items: center;
  justify-content: flex-start;
  border-radius: 40px;
  height: 126px;
  width: 600px;
}

.achievement-card.minnmax.light {
  background: #ffffff;
}

.achievement-card.minnmax.dark {
  background: #393b41;
}

.achievement-card.nintendo {
  @include flexbox();
  align-items: stretch;
  justify-content: center;
  height: 140px;
  width: 670px;
}

.achievement-card.playstation {
  background: linear-gradient($ps-alt-black, $ps-black);
  border-radius: 10px;
  @include flexbox();
  align-items: stretch;
  justify-content: space-between;
  height: 100px;
  padding: 0;
  width: 670px;
}

.achievement-card.xbox {
  border-radius: 63px;
  @include flexbox();
  background: $xbox-green;
  align-items: stretch;
  justify-content: flex-start;
  height: 126px;
  padding: 0;
  width: 670px;
}
</style>

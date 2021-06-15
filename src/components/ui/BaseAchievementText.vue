<template>
  <p :class="[brand, getTheme]" v-if="brand === 'xbox'">
    <span class="currency">
      G
    </span>
    {{ points }}
    {{ text }}
  </p>
  <p :class="[brand, getTheme]" v-else>
    {{ text }}
  </p>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const text = computed(() => {
      return store.getters.getText;
    });
    const brand = computed(() => {
      return store.getters.getBrand;
    });

    const points = computed(() => {
      return `${store.getters.getPoints} - `;
    });

    const getTheme = computed(() => {
      return store.getters.getTheme;
    });
    return { text, brand, points, getTheme };
  },
};
</script>
<style lang="scss" scoped>
p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  margin-top: 5px;
  padding: 0;
  text-align: left;
  text-shadow: 1px 1px $quaternary-red;
  position: relative;
  width: 100%;

  .currency,
  .points {
    display: none;
  }
}

p.minnmax {
  font-family: "Croogla 4F";
  font-size: 18px;
  text-shadow: none;
}

p.minnmax.light {
  color: #090a0b;
  text-shadow: none;
}

p.minnmax.dark {
  color: rgba(255, 255, 255, 0.8);
}

p.xbox {
  font-weight: 400;
  padding-left: 38px;
  @include flexbox();
  align-items: center;
  position: relative;
  justify-content: flex-start;
  width: calc(100% - 38px);

  .currency {
    background: #ffffff;
    @include flexbox();
    justify-content: center;
    align-items: center;
    color: $xbox-green;
    border-radius: 50%;
    text-shadow: none !important;
    height: 30px;
    width: 30px;
    margin-right: 5px;
    text-align: center;
    position: absolute;
    top: -3px;
    left: 0;
  }

  .points {
    color: #ffffff;
    @include flexbox();
    white-space: nowrap;
    text-shadow: 1px 1px #000000;
    margin-right: 5px;
  }
}

p.playstation {
  color: $ps-gray;
  padding-left: 8px;
}
</style>

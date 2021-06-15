<template>
  <h1 :class="[brand, getTheme]">
    <span class="trophy" v-if="isPS && header !== ''">
      <img :src="require('@/assets/trophies/' + trophy + '.png')" :alt="trophyType" v-if="trophy !== ''" />
    </span>
    {{ header }}
  </h1>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const header = computed(() => {
      return store.getters.getHeader;
    });
    const brand = computed(() => {
      return store.getters.getBrand;
    });
    const isPS = computed(() => {
      return store.getters.getBrand === "playstation";
    });
    const trophyType = computed(() => {
      return store.getters.getTrophy
    })
    const trophy = computed(() => {
      const currentTrophy = store.getters.getTrophy
      return currentTrophy;
    })

    const getTheme = computed(() => {
      return store.getters.getTheme;
    });

    return { header, brand, isPS, trophyType, trophy, getTheme };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  margin: 0;
  padding: 0;
  text-align: left;
  text-transform: uppercase;
  text-shadow: 1px 1px $quaternary-red;
  width: 100%;
}

h1.minnmax {
  font-family: "Croogla 4F";
  font-size: 24px;
}

h1.minnmax.light {
  color: #090A0B;
  text-shadow: none;
}

h1.minnmax.dark {
  color: rgba(#ffffff, 0.8);
}

h1.xbox {
  font-size: 24px;
}

h1.playstation {
  font-size: 24px;
  font-weight: 300;
  text-transform: none;
  position: relative;
  padding-left: 36px;

  .trophy {
    position: absolute;
    @include flexbox();
    justify-content: center;
    align-items: center;
    left: 0;
    top: -3px;
    width: 32px;
    height: 32px;

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>

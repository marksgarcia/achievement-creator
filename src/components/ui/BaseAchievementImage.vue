<template>
  <figure :class="[brand, props.shape, getTheme]">
    <font-awesome-icon
      v-if="isIcon && iconType !== undefined && brand !== 'xbox'"
      :icon="[iconClass, iconType]"
    ></font-awesome-icon>
    <font-awesome-icon
      :icon="['fad', 'gem']"
      v-else-if="rarity === true && brand === 'xbox'"
    ></font-awesome-icon>
    <font-awesome-icon
      :icon="['fas', 'trophy']"
      v-else-if="src === '' || brand === 'xbox'"
    ></font-awesome-icon>
    <img :src="src" v-else alt="trophy image" />
  </figure>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useStore } from "vuex";
  const props = defineProps({
    shape: String
  })
    const store = useStore();
    const brand = computed(() => {
      return store.getters.getBrand;
    });
    const rarity = computed(() => {
      return store.getters.getRarity;
    });
    const src = computed(() => {
      return store.getters.getImage;
    });
    const isIcon = computed(() => {
      return store.getters.getIsIcon;
    });

    const iconClass = computed(() => {
      return store.getters.getCurrentIcon.class;
    });

    const iconType = computed(() => {
      return store.getters.getCurrentIcon.icon;
    });
    const getTheme = computed(() => {
      return store.getters.getTheme;
    });
</script>
<style lang="scss" scoped>
figure {
  background: rgba(#fff, 0.2);
  border-radius: 50%;
  @include flexbox();
  justify-content: center;
  align-items: center;
  height: 120px;
  padding: 0;
  overflow: hidden;
  width: 120px;

  svg {
    font-size: 3em;
  }

  img {
    border-radius: 50%;
    display: block;
    border: 8px solid #ffffff;
    width: calc(100% - 16px);
  }
}

figure.nintendo {
  margin: 0 15px;
}

figure.xbox {
  background: $xbox-light-green;
  margin: 0;
  height: 126px;
  width: 126px;

  svg {
    color: #fff;
  }
}

figure.rounded {
  background: rgba(#ffffff, 0.2);
  @include flexbox();
  align-items: center;
  justify-content: center;
  border-radius: 27px;
  margin-left: 15px;
  margin-right: 10px;
  height: 86px;
  width: 86px;

  svg {
    color: #ffffff;
  }

  img {
    border-radius: 27px;
    display: block;
    border: 5px solid rgba(#ffffff, 0.3);
    width: calc(100% - 10px);
  }
}

figure.rounded.dark {
  background: rgba(0, 0, 0, 0.4);
}

figure.rounded.light {
  background: rgba($minnmax-orange, 0.8);
}

figure.square {
  background: none;
  @include flexbox();
  align-items: center;
  justify-content: center;
  border-radius: 0px;
  margin: 0 0 0 20px;
  height: 50px;
  width: 50px;

  svg {
    color: #ffffff;
    font-size: 2.5em;
  }

  img {
    border-radius: 0;
    border: 0;
    display: block;
    width: 100%;
  }
}
</style>
<style lang="scss">
.vue-image-crop-upload {
  a {
    color: #007aff !important;
  }

  input[type="range"]::-webkit-slider-container {
    background: #a5c7fb !important;
  }
  input[type="range"]::-webkit-slider-thumb {
    background: rgba(#007aff, 0.8) !important;
  }
}
</style>

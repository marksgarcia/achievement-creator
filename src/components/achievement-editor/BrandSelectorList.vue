<template>
  <ul>
    <li
      v-for="brand in brands"
      :key="brand"
      class="brand"
      :class="[{ active: brand.name === activeBrand }, brand.name]"
      @click="updateActive(brand.name)"
    >
      <figure>
        <img
          :src="brand.src"
          :alt="`${brand.name} icon`"
          v-if="brand.src !== null"
        />
        <font-awesome-icon
          :icon="['fab', brand.icon]"
          v-else
        ></font-awesome-icon>
      </figure>
    </li>
  </ul>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const activeBrand = ref("minnmax");
    const brands = [
      {
        name: "minnmax",
        src: require("@/assets/logos/minn-max.svg"),
        icon: null,
      },
      {
        name: "nintendo",
        src: require("@/assets/logos/switch-logo.svg"),
        icon: null,
      },
      {
        name: "playstation",
        src: null,
        icon: "playstation",
      },
      {
        name: "xbox",
        src: null,
        icon: "xbox",
      },
    ];
    onMounted(() => {
      store.dispatch("updateBrand", activeBrand.value);
    });
    const updateActive = (brand) => {
      activeBrand.value = brand;
      store.dispatch("updateBrand", activeBrand.value);
    };
    return {
      activeBrand,
      brands,
      updateActive,
    };
  },
};
</script>
<style lang="scss" scoped>
ul {
  @include flexbox();
  list-style: none;
  align-items: center;
  justify-content: center;
  width: 100%;

  li {
    border: 1px solid #d7d7d7;
    border-radius: 15px;
    @include flexbox();
    justify-content: center;
    align-items: center;
    filter: grayscale(100%);
    overflow: hidden;
    margin: 0 1em;
    @include transition(all 0.3s ease);
    @include transform(scale(0.95));
    height: 4em;
    width: 4em;

    img {
      display: block;
      width: 3em;
    }

    svg {
      font-size: 2em;
    }
  }

  li.active {
    filter: grayscale(0%);
    @include transform(scale(1.1));
  }

  li.minnmax.active {
    background: rgba($minnmax-orange, 0.1);
    border: 1px solid rgba($minnmax-orange, 0.1);
  }

  li.nintendo.active {
    background: rgba($primary-red, 0.1);
    border: 1px solid rgba($primary-red, 0.1);
  }

  li.playstation.active {
    color: $ps-blue;
    background: rgba($ps-blue, 0.1);
    border: 1px solid rgba($ps-blue, 0.1);
  }

  li.xbox.active {
    color: $xbox-green;
    background: rgba($xbox-green, 0.1);
    border: 1px solid rgba($xbox-green, 0.1);
  }
}
</style>

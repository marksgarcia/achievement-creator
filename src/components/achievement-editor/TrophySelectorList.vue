<template>
  <ul>
    <li
      v-for="trophy in trophies"
      :key="trophy"
      class="trophy"
      :class="[{ active: trophy.name === activeTrophy }, trophy.name]"
      @click="updateActive(trophy.name)"
    >
      <figure>
        <img :src="trophy.src" :alt="`${trophy.name} icon`" />
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
    const activeTrophy = ref("bronze");
    const trophies = [
      {
        name: "bronze",
        src: require("@/assets/trophies/bronze.png"),
      },
      {
        name: "silver",
        src: require("@/assets/trophies/silver.png"),
      },
      {
        name: "gold",
        src: require("@/assets/trophies/gold.png"),
      },
      {
        name: "platinum",
        src: require("@/assets/trophies/platinum.png"),
      },
    ];
    onMounted(() => {
      store.dispatch("updateTrophy", activeTrophy.value);
    });
    const updateActive = (trophy) => {
      activeTrophy.value = trophy;
      store.dispatch("updateTrophy", activeTrophy.value);
    };
    return {
      activeTrophy,
      trophies,
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
      background: #eaeaea;
    border: 1px solid #d7d7d7;
    border-radius: 15px;
    @include flexbox();
    justify-content: center;
    align-items: center;
    filter: grayscale(100%);
    overflow: hidden;
    opacity: 0.7;
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
    background: #ffffff;
    @include boxshadow(0 0 10px rgba(#3a3a3a, 0.3));
    filter: grayscale(0%);
    opacity: 1;
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

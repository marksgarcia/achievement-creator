<template>
  <div @click="toggleState">
    <span class="button" :class="{'selected': selected}"></span>
    <span class="text">{{ text }}</span>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import {useStore} from 'vuex'
export default {
  props: ["text", "selected"],
  setup(props, {emit}) {
    const store = useStore();
    const buttonSelected = ref(resetButton);
    const toggleState = () => {
      store.dispatch('updateTheme', props.text.toLowerCase())
      console.log(store.state)
      emit('button-clicked')
    };

    const resetButton = computed(() => {
        return props.selected;
    })
    return { buttonSelected, toggleState };
  },
};
</script>
<style lang="scss" scoped>
@keyframes material {
  from {
    opacity: 0.9;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(3.5);
  }
}

div {
  @include flexbox();
  align-items: center;
  padding: 0 0.5em 0 0;
  cursor: default;

  .button {
    @include flexbox();
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid $ps-black;
    @include transition(all 0.3s ease);
    margin-right: 0.5em;
    height: 18px;
    width: 18px;
    position: relative;
  }

  .button:before {
    content: "";
    border-radius: 50%;
    width: 12px;
    height: 12px;
    @include transition(all 0.3s ease);
  }

  .button.selected {
    border: 2px solid $minnmax-orange;
  }

  .button.selected:before {
    background: $minnmax-orange;
  }

  .button.selected:after {
    animation: material 0.3s linear 0s 1;
    content: "";
    background: $minnmax-orange;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    position: absolute;
    left: 50%;
    margin-left: -6px;
    top: 50%;
    margin-top: -6px;
  }

  .text {
      margin-right: 1em;
  }
}
</style>

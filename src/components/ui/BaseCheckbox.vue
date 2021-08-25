<template>
  <div @click="changeState" :class="brand">
    <span class="check" :class="{ checked: checkState }">
      <transition-group name="appear">
        <font-awesome-icon
          :icon="['fas', 'check']"
          v-if="checkState"
        ></font-awesome-icon
      ></transition-group>
    </span>
    <span class="text">{{ props.text }}</span>
  </div>
</template>
<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  text: String,
  currentState: String,
});

const emits = defineEmits(["change-state"]);

const store = useStore();
const checkState =
  props.currentState !== undefined ? ref(props.currentState) : ref(false);
const brand = computed(() => {
  return store.getters.getBrand;
});
const changeState = () => {
  checkState.value = !checkState.value;
  emits("change-state", checkState.value);
};
</script>
<style lang="scss" scoped>
div {
  @include flexbox();
  align-items: center;
  justify-content: flex-start;

  .check {
    @include flexbox();
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #d7d7d7;
    margin-right: 0.5em;
    height: 1.5em;
    width: 1.5em;
    @include transition(all 0.3s ease);
  }
}

.xbox {
  .check.checked {
    background: $xbox-green;

    svg {
      color: #ffffff;
    }
  }
}

.minnmax {
  .check.checked {
    background: $minnmax-orange;

    svg {
      color: #ffffff;
    }
  }
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
  @include transform(rotate(180deg));
}

.appear-enter-to,
.appear-leave-from {
  opacity: 1;
  @include transform(rotate(0deg));
}

.appear-enter-active,
.appear-leave-active {
  @include transition(all 0.3s ease);
}
</style>

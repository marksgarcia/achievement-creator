<template>
  <label>
    <span class="label-text">{{ inputLabel }}</span>
    <input
      type="text"
      :aria-label="`${inputLabel} text input field`"
      v-model="inputValue"
      @keyup="captureValue"
    />
  </label>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  label: String,
});
const store = useStore();
const inputLabel = ref(props.label);
const inputValue = ref("");

const captureValue = () => {
  const label = props.label;
  const value = inputValue.value;

  const objs = {
    "Achievement Header": "updateHeader",
    "Achievement Text": "updateText",
    "Achievement Value": "updatePoints",
  };
  store.dispatch(objs[label], value);
};
</script>
<style lang="scss" scoped>
label {
  position: relative;
  margin: 1em 0;
  width: 100%;

  span {
    background: #ffffff;
    padding: 0.25em;
    font-size: 0.8em;
    position: absolute;
    top: -0.7em;
    left: 10px;
  }

  input {
    border: 1px solid #3a3a3a;
    border-radius: 5px;
    font-size: 1em;
    outline: none;
    padding: 1em 0.5em;
    width: calc(100% - 1em);
  }
}
label:focus-within {
  span {
    color: #007aff;
  }
  input {
    border: 1px solid #007aff;
  }
}
</style>

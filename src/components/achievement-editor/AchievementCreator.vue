<template>
  <form>
    <base-header>Customize Your Achievement</base-header>
    <brand-selector-list></brand-selector-list>
    <section class="image-or-icons" v-if="!isXbox">
      <ul>
        <li
          :class="{ active: activeTab === 'image' }"
          @click="toggleActive('image')"
        >
          <font-awesome-icon :icon="['fad', 'image']"></font-awesome-icon> Image
        </li>
        <li
          :class="{ active: activeTab === 'icons' }"
          @click="toggleActive('icons')"
        >
          <font-awesome-icon :icon="['fad', 'icons']"></font-awesome-icon> Icons
        </li>
      </ul>
      <div class="image-upload" v-if="hasImage && !isIcon">
        <base-image-upload></base-image-upload>
      </div>
      <div class="icon-picker" v-else>
        <icon-selector-list></icon-selector-list>
      </div>
    </section>
    <div class="inputs">
      <base-input label="Achievement Header"></base-input>
      <base-input label="Achievement Text"></base-input>
      <base-input label="Achievement Value" v-if="isXbox"></base-input>
      <base-checkbox
        text="Add Milestonne Tag"
        :currentState="isMilestonne"
        v-if="isMinnMax"
        @change-state="updateMilestone"
      ></base-checkbox>
      <div class="radio-group" v-if="isMinnMax">
        <base-radio-button
          v-for="radio in radioButtons"
          :key="radio"
          :text="radio.text"
          :selected="radio.active"
          @button-clicked="toggleState(radio.text)"
        ></base-radio-button>
      </div>
      <base-checkbox
        text="Rare Achievement"
        :currentState="isRare"
        v-if="isXbox"
        @change-state="updateRarity"
      ></base-checkbox>
    </div>
    <trophy-selector-list v-if="isPS"></trophy-selector-list>
  </form>
</template>
<script>
import BrandSelectorList from "../achievement-editor/BrandSelectorList.vue";
import TrophySelectorList from "../achievement-editor/TrophySelectorList.vue";
import IconSelectorList from "../achievement-editor/IconSelectorList.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: { BrandSelectorList, TrophySelectorList, IconSelectorList },
  setup() {
    const store = useStore();

    const activeTab = ref("image");

    const toggleActive = (tab) => {
      activeTab.value = tab;
      store.dispatch("updateIcons", tab === "icons");
    };

    const hasImage = computed(() => {
      return store.getters.getBrand !== "xbox";
    });

    const isIcon = computed(() => {
      return store.getters.getIsIcon;
    });

    const isMinnMax = computed(() => {
      return store.getters.getBrand === "minnmax";
    });

    const isMilestonne = ref(false);

    const isXbox = computed(() => {
      return store.getters.getBrand === "xbox";
    });

    const isRare = computed(() => {
      return store.getters.getRarity;
    });

    const isPS = computed(() => {
      return store.getters.getBrand === "playstation";
    });

    const updateMilestone = (input) => {
      isMilestonne.value = input;
      store.dispatch("updateMilestone", input);
    };

    const radioButtons = ref([
      { text: "Default", active: true },
      { text: "Light", active: false },
      { text: "Dark", active: false },
    ]);
    const toggleState = (text) => {
      const buttons = [...radioButtons.value];
      const refreshedButtons = [];
      for (let button of buttons) {
        if (button.text === text) {
          button.active = true;
        } else {
          button.active = false;
        }
        refreshedButtons.push(button);
        radioButtons.value = refreshedButtons
      }
    };
    const updateRarity = (input) => {
      store.dispatch("updateRarity", input);
    };
    return {
      isIcon,
      hasImage,
      toggleState,
      isMinnMax,
      isXbox,
      isRare,
      isPS,
      isMilestonne,
      updateMilestone,
      updateRarity,
      activeTab,
      toggleActive,
      radioButtons,
    };
  },
};
</script>
<style lang="scss" scoped>
form {
  background: #ffffff;
  border-radius: 30px;
  @include boxshadow((-3px -3px 9px #eaeaea, 6px 6px 20px #d7d7d7));
  @include flexbox();
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1em auto 3em;
  padding: 3em;
  width: 40em;

  h1 {
    text-align: center;
    width: 100%;
  }

  .image-or-icons {
    @include flexbox();
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @include transition(all 0.3s ease);
    height: min-content;
    width: 20em;

    ul {
      background: #eaeaea;
      border-radius: 30px;
      @include flexbox();
      list-style: none;
      justify-content: center;
      margin: 0 0 1em;
      padding: 0;
      width: auto;

      li {
        color: #666;
        margin: 3px;
        padding: 0.5em;
        width: 5em;
      }

      li.active {
        color: $ps-black;
        border-radius: 30px;
        background: #ffffff;
        box-shadow: 0px 5px 10px #d7d7d7;
      }
    }

    .image-upload {
      background: #f7f7f7;
      border-radius: 30px;
      margin-right: 1em;
      overflow: hidden;
      @include flexbox();
      justify-content: center;
      transition: all 0.3s ease;
      height: 10em;
      width: 10em;
    }

    .icon-picker {
      background: #f7f7f7;
      border-radius: 30px;
      margin-right: 1em;
      overflow: hidden;
      @include flexbox();
      justify-content: center;
      transition: all 0.3s ease;
      height: 15em;
      width: 20em;
    }

    .image-upload:hover {
      background: rgba(#007aff, 0.05);
    }
  }

  .radio-group {
    @include flexbox();
    margin: 1em 0;
    width: 100%;
  }

  .inputs {
    @include flexbox();
    flex-wrap: wrap;
    flex: 2;
  }
}
</style>

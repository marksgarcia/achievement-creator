<template>
  <section class="wrapper" :class="[setBrand, getTheme]">
    <base-achievement id="achievement" :mode="setBrand">
      <minnmax-card v-if="setBrand === 'minnmax'">
        <template v-slot:image
          ><base-achievement-image shape="rounded"></base-achievement-image
        ></template>
        <template v-slot:text>
          <div class="text-wrapper" :class="setBrand">
            <base-achievement-header></base-achievement-header
            ><base-achievement-text></base-achievement-text></div></template
      ></minnmax-card>

      <nintendo-card v-else-if="setBrand === 'nintendo'">
        <template v-slot:image
          ><base-achievement-image></base-achievement-image
        ></template>
        <template v-slot:text>
          <div class="text-wrapper" :class="setBrand">
            <base-achievement-header></base-achievement-header
            ><base-achievement-text></base-achievement-text></div></template
      ></nintendo-card>

      <xbox-card v-else-if="setBrand === 'xbox'">
        <template v-slot:image
          ><base-achievement-image></base-achievement-image
        ></template>
        <template v-slot:text>
          <div class="text-wrapper" :class="setBrand">
            <base-achievement-header></base-achievement-header>
            <span class="desc">
              <base-achievement-text></base-achievement-text
            ></span></div></template
      ></xbox-card>

      <playstation-card v-else-if="setBrand === 'playstation'">
        <template v-slot:image
          ><base-achievement-image shape="square"></base-achievement-image
        ></template>
        <template v-slot:text>
          <div class="text-wrapper" :class="setBrand">
            <base-achievement-header></base-achievement-header
            ><base-achievement-text></base-achievement-text>
          </div>
          <span class="ps-logo">
            <font-awesome-icon
              :icon="['fab', 'playstation']"
            ></font-awesome-icon>
          </span>
        </template>
      </playstation-card>
    </base-achievement>
    <button @click="saveImage" v-if="filled">
      <font-awesome-icon
        :icon="['fad', 'cloud-download-alt']"
      ></font-awesome-icon>
      <span>Download Image File</span>
    </button>
  </section>
</template>
<script>
import * as htmlToImage from "html-to-image";
import FileSaver from "file-saver";
import { computed } from "vue";
import { useStore } from "vuex";
import NintendoCard from "../achievement-cards/NintendoCard";
import MinnmaxCard from "../achievement-cards/MinnmaxCard";
import XboxCard from "../achievement-cards/XboxCard";
import PlaystationCard from "../achievement-cards/PlaystationCard";
export default {
  components: { NintendoCard, MinnmaxCard, XboxCard, PlaystationCard },
  setup() {
    const store = useStore();
    const saveImage = () => {
      htmlToImage
        .toBlob(document.getElementById("achievement"))
        .then(function(blob) {
          FileSaver.saveAs(blob, "achievement.png");
        });
    };

    const setBrand = computed(() => {
      return store.getters.getBrand;
    });

    const getTheme = computed(() => {
      return store.getters.getTheme;
    });

    const filled = computed(() => {
      return store.getters.getHeader !== "" && store.getters.getText !== "";
    });

    return { saveImage, filled, setBrand, getTheme };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  border-radius: 20px;
  padding: 1em;
}

.wrapper.minnmax.light {
  background: #eaeaea;
}

section {
  @include flexbox();
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 670px;

  .text-wrapper {
    @include flexbox();
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
  }

  .text-wrapper.minnmax {
    width: 380px;
  }

  .text-wrapper.nintendo {
    width: 430px;
  }

  .text-wrapper.xbox {
    width: calc(100% - 150px);

    .desc {
      @include flexbox();
      justify-content: flex-start;
      align-items: center;
    }
  }

  .text-wrapper.playstation {
    width: 530px;
  }

  .ps-logo {
    border-radius: 50%;
    @include flexbox();
    justify-content: center;
    align-items: center;
    background: #ffffff;
    padding: 4px;

    svg {
      color: $ps-black;
      font-size: 1.5em;
    }
  }

  button {
    background: #fff;
    border: 3px solid #333333;
    border-radius: 4em;
    color: #333333;
    @include flexbox();
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 3em auto 1em;
    padding: 1.25em;
    transition: all 0.3s ease;

    svg {
      font-size: 2em;
      margin-right: 0.5em;
    }

    span {
      font-size: 1.5em;
      font-weight: 500;
    }
  }

  button:hover {
    border: 3px solid #16c172;
    color: #16c172;
    span {
      font-weight: 500;
    }
  }
}
</style>

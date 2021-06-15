<template>
  <div>
    <keep-alive>
      <span class="upload-button" @click="toggleShow">
        <img
          class="currentImage"
          :src="currentImage"
          v-if="imgUploaded"
          alt="current image"
        />
        <font-awesome-icon :icon="['fad', 'images']" v-if="imgUploaded" />
        <font-awesome-icon :icon="['fad', 'arrow-circle-up']" v-else />
        <p v-if="imgUploaded">Change Image</p>
        <p v-else>Upload Image</p>
      </span>
    </keep-alive>
    <image-upload
      field="img"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :noSquare="true"
      :width="100"
      :height="100"
      url="https://httpbin.org/post"
      langType="en"
      ki="0"
      :params="params"
      :headers="headers"
      img-format="png"
    ></image-upload>
  </div>
</template>
<script>
import myUpload from "vue-image-crop-upload";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    "image-upload": myUpload,
  },
  setup() {
    const store = useStore();
    const imgUploaded = ref(false);
    const show = ref(false);
    const toggleShow = () => {
      show.value = !show.value;
    };

    const params = {
      token: "123456798",
      name: "avatar",
    };
    const headers = {
      smail: "*_~",
    };
    const en = {
      hint: "Click or drag the file here to upload",
      loading: "Uploading…",
      noSupported:
        "Browser is not supported, please use IE10+ or other browsers",
      success: "Upload success",
      fail: "Upload failed",
      preview: "Preview",
      btn: {
        off: "Cancel",
        close: "Close",
        back: "Back",
        save: "Save",
      },
      error: {
        onlyImg: "Image only",
        outOfSize: "Image exceeds size limit: ",
        lowestPx: "Image's size is too low. Expected at least: ",
      },
    };
    const imgDataUrl = ref(null);
    const cropSuccess = (data) => {
      imgDataUrl.value = data;
    };
    const cropUploadSuccess = (data) => {
      const imageInfo = data.files.img;
      imgUploaded.value = true;
      store.dispatch("updateImage", imageInfo);
    };
    const cropUploadFail = (status) => {
      console.log(status);
    };
    const currentImage = computed(() => {
      return store.getters.getImage;
    });

    return {
      imgUploaded,
      params,
      headers,
      show,
      toggleShow,
      en,
      cropSuccess,
      cropUploadSuccess,
      cropUploadFail,
      imgDataUrl,
      currentImage,
    };
  },
};
</script>
<style lang="scss" scoped>
.hidden-upload {
  display: none;
}
div {
  @include flexbox();
}
.upload-button {
  @include flexbox();
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  .currentImage {
    position: absolute;
    top: 0;
    height: 10em;
    width: 10em;
    z-index: 0;
    opacity: 0.2;
    filter: grayscale(100%);
  }

  svg {
    margin: 0.75em calc(50% - 1.5em) 0;
    font-size: 3em;
  }
  svg,
  p {
    transition: all 0.3s ease;
  }
}

.upload-button:hover {
  svg,
  p {
    color: #007aff;
  }

  svg {
    @include transform(translate(0, 5px));
  }

  p {
    @include transform(translate(0, -5px));
  }
}
</style>

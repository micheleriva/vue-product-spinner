<template>
  <div class="vue-product-spinner" ref="componentContainer">
    <img :src="spinner.currentPath" :class="spinnerClass" draggable="false" />
    <input
      type="range"
      min="1"
      :max="spinner.size"
      :value="spinner.current"
      class="vue-product-spinner-slider"
      :class="sliderClass"
      @input="handleSlider"
      v-if="slider"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "VueProductSpinner",

  props: {
    images: {
      type: Array,
      required: true
    },
    slider: {
      type: Boolean,
      required: false
    },
    spinnerClass: {
      type: String,
      required: false
    },
    sliderClass: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      spinner: {
        current: 0,
        size: 0,
        currentPath: null
      }
    };
  },

  mounted() {
    this.$refs.componentContainer.addEventListener(
      "mousewheel",
      this.handleWheel,
      false
    );
  },

  created() {
    this.spinner.size = this.images.length;
    this.spinner.currentPath = this.images[0];
  },

  methods: {
    handleSlider(event) {
      this.spinner.current = parseInt(event.target.value);
      this.spinner.currentPath = this.images[event.target.value - 1];
    },

    handleWheel(event) {
      if (event.deltaY >= 0) {
        if (
          this.spinner.current >= 0 &&
          this.spinner.current < this.spinner.size
        ) {
          this.spinner.current++;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        }
      } else {
        if (this.spinner.current >= 0 && this.spinner.current - 1 > 0) {
          this.spinner.current--;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        }
      }
    }
  }
});
</script>

<style></style>

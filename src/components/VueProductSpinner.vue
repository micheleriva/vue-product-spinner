<template>
  <picture class="vue-product-spinner" ref="componentContainer">
    <template v-if="imagesPreloaded">
      <img
        tabindex="1"
        draggable="false"
        :src="spinner.currentPath"
        @keydown="handleKeydown"
        @mouseup="handleMouseUp"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @touchmove="handleTouchMove"
      />
      <input
        type="range"
        tabindex="1"
        min="1"
        :max="spinner.size"
        :value="spinner.current"
        class="vue-product-spinner-slider"
        :class="sliderClass"
        @input="handleSlider"
        v-if="slider"
      />
    </template>
    <slot v-else>Loading images...</slot>
  </picture>
</template>

<script>
import PreloadImages from "../PreloadImages.js";

export default {
  name: "VueProductSpinner",

  props: {
    images: {
      type: Array,
      required: true
    },
    infinite: {
      type: Boolean,
      required: false,
      default: () => true
    },
    speed: {
      type: Number,
      required: false,
      default: () => 3
    },
    touchDrag: {
      type: Boolean,
      required: false,
      default: () => true
    },
    mouseWheel: {
      type: Boolean,
      required: false,
      default: () => true
    },
    mouseDrag: {
      type: Boolean,
      required: false,
      default: () => true
    },
    slider: {
      type: Boolean,
      required: false,
      default: () => false
    },
    sliderClass: {
      type: String,
      required: false,
      default: () => ""
    }
  },

  data () {
    return {
      imagesPreloaded: false,
      speedController: 0,
      spinner: {
        current: 0,
        size: 0,
        currentPath: null
      },
      mouse: {
        isMoving: false
      },
      touch: {
        isMoving: false,
        initialX: 0
      }
    };
  },

  watch: {
    images: function () {
      this.imagesPreloaded = false;
      this.handlePreload();
      this.initSpinner();
    }
  },

  beforeMount () {
    this.handlePreload();
  },

  mounted () {
    this.$refs.componentContainer.addEventListener(
      "wheel",
      this.handleWheel,
      false
    );
  },

  beforeDestroy () {
    this.$refs.componentContainer.removeEventListener(
      "wheel",
      this.handleWheel
    );
  },

  created () {
    this.initSpinner();
  },

  methods: {
    initSpinner () {
      this.spinner.size = this.images.length;
      this.spinner.currentPath = this.images[0];
    },

    handlePreload () {
      PreloadImages(this.images).then(() => (this.imagesPreloaded = true));
    },

    handleKeydown (event) {
      if (event.keyCode === 39) {
        event.preventDefault();
        this.handleMovement(1);
      }
      if (event.keyCode === 37) {
        event.preventDefault();
        this.handleMovement(-1);
      }
    },

    handleSlider (event) {
      this.spinner.current = parseInt(event.target.value);
      this.spinner.currentPath = this.images[event.target.value - 1];
    },

    handleMouseDown () {
      this.mouse.isMoving = true;
    },

    handleMouseUp () {
      this.mouse.isMoving = false;
    },

    handleMouseMove (event) {
      if (this.mouse.isMoving && this.mouseDrag) {
        this.handleMovement(event.movementX);
      }
    },

    handleTouchStart (event) {
      event.preventDefault();
      this.touch.isMoving = true;
      this.touch.initialX = event.touches[0].pageX;
    },

    handleTouchEnd () {
      this.touch.isMoving = false;
    },

    handleTouchMove (event) {
      if (this.touchDrag) {
        const delta = -(this.touch.initialX - event.touches[0].pageX);
        this.handleMovement(delta);
      }
    },

    handleWheel (event) {
      event.preventDefault();
      if (this.mouseWheel) {
        this.handleMovement(event.deltaY);
      }
    },

    handleMovement (delta) {
      this.speedController++;
      if (this.speedController < this.speed) {
        console.log("ad");
        return;
      }

      if (this.speedController > this.speed) {
        this.speedController = 0;
      }

      if (delta >= 0) {
        /**
         * User is moving forward
         */
        if (
          this.spinner.current >= 0 &&
          this.spinner.current < this.spinner.size
        ) {
          this.spinner.current++;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        } else {
          if (this.infinite) {
            this.spinner.current = 1;
            this.spinner.currentPath = this.images[this.spinner.current - 1];
          }
        }
      } else {
        /**
         * User is moving backward
         */
        if (this.spinner.current >= 0 && this.spinner.current - 1 > 0) {
          this.spinner.current--;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        } else {
          if (this.infinite) {
            this.spinner.current = this.spinner.size;
            this.spinner.currentPath = this.images[this.spinner.current - 1];
          }
        }
      }
    }
  }
};
</script>

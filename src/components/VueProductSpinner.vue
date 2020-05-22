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
      required: true,
    },
    infinite: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    speed: {
      type: Number,
      required: false,
      default: () => 3,
    },
    mouseWheel: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    slider: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    sliderClass: {
      type: String,
      required: false,
      default: () => "",
    },
    animation: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      imagesPreloaded: false,
      speedController: 0,
      spinner: {
        current: 0,
        size: 0,
        currentPath: null,
      },
      mouse: {
        isMoving: false,
        isDragging: false,
      },
      touch: {
        isMoving: false,
        initialX: 0,
        isDragging: false,
      },
      animationRequestID: 0,
      lastPosition: 0,
    };
  },
  watch: {
    images: function() {
      this.imagesPreloaded = false;
      this.handlePreload();
      this.initSpinner();
    }
  },
  created() {
    this.initSpinner();
  },
  beforeMount() {
    this.handlePreload();
  },
  mounted() {
    window.addEventListener(
      'mouseup',
      this.handleMouseDragging,
    );
    window.addEventListener(
      'touchend',
      this.handleTouchDragging,
    );
    if (this.mouseWheel) {
      this.$refs.componentContainer.addEventListener(
        'wheel',
        this.handleWheel,
        false,
      );
    }
  },
  beforeDestroy() {
    if (this.mouseWheel) {
      this.$refs.componentContainer.removeEventListener(
        'wheel',
        this.handleWheel,
      );
    }
    window.removeEventListener(
      'mouseup',
      this.handleMouseDragging,
    );
    window.removeEventListener(
      'touchend',
      this.handleTouchDragging,
    );
  },
  methods: {
    initSpinner() {
      this.spinner.size = this.images.length;
      if (this.animation) {
        this.spinImages(0, this.spinner.size);
      } else {
        this.spinner.currentPath = this.images[0];
      }
    },
    handlePreload() {
      PreloadImages(this.images).then(() => (this.imagesPreloaded = true));
    },
    handleKeydown(event) {
      if (event.keyCode === 39) {
        event.preventDefault();
        this.handleMovement(this.lastPosition + 1);
      }
      if (event.keyCode === 37) {
        event.preventDefault();
        this.handleMovement(this.lastPosition - 1);
      }
    },
    handleWheel(event) {
      if (this.mouseWheel) {
        event.preventDefault();
        this.handleMovement(event.deltaY);
      }
    },
    handleSlider(event) {
      this.spinner.current = Number(event.target.value);
      this.spinner.currentPath = this.images[event.target.value - 1];
    },
    handleMouseDown() {
      if (this.animation) {
        this.stopAnimation();
      }
      this.mouse.isDragging = true;
      this.mouse.isMoving = true;
    },
    handleMouseUp() {
      this.mouse.isMoving = false;
    },
    handleMouseMove(event) {
      if (this.mouse.isMoving && this.mouse.isDragging) {
        this.handleMovement(event.pageX);
      }
    },
    handleMouseDragging() {
      this.mouse.isDragging = false;
    },
    handleTouchDragging() {
      this.touch.isDragging = false;
    },
    handleTouchStart(event) {
      event.preventDefault();
      if (this.animation) {
        this.stopAnimation();
      }
      this.touch.isMoving = true;
      this.touch.isDragging = true;
      this.touch.initialX = event.touches[0].pageX;
    },
    handleTouchEnd() {
      this.touch.isMoving = false;
    },
    handleTouchMove(event) {
      if (this.touch.isDragging) {
        const delta = -(this.touch.initialX - event.touches[0].pageX);
        this.handleMovement(delta);
      }
    },
    spinImages(index, lastIndex) {
      let i = index;
      if (i !== lastIndex) {
        this.spinner.currentPath = this.images[i];
        this.animationRequestID = window.requestAnimationFrame(() => this.spinImages(i, lastIndex));
      } else {
        this.stopAnimation();
        [this.spinner.currentPath] = this.images;
        return;
      }
      i += 1;
    },
    stopAnimation() {
      if (this.animationRequestID) {
        window.cancelAnimationFrame(this.animationRequestID);
        this.animationRequestID = null;
      }
    },
    handleMovement(delta) {
      this.speedController += 1;
      if (this.speedController < this.speed) {
        return;
      }
      if (this.speedController > this.speed) {
        this.speedController = 0;
      }
      if (delta > this.lastPosition) {
        if (this.spinner.current >= 0 && this.spinner.current < this.spinner.size) {
          this.spinner.current += 1;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        } else if (this.infinite) {
          this.spinner.current = 1;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        }
      } else if (delta < this.lastPosition) {
        if (this.spinner.current >= 0 && this.spinner.current - 1 > 0) {
          this.spinner.current -= 1;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        } else if (this.infinite) {
          this.spinner.current = this.spinner.size;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        }
      }
      this.lastPosition = delta;
    },
  },
};
</script>


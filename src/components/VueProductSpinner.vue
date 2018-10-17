<template lang="pug">

  .vue-product-spinner#mainDiv(
    ref="mainDiv"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @tuochend="handleTouchEnd"
  )

    img(:src="currentImg", draggable="false")
    input(
      type="range"
      min="1"
      max="imgsNum"
      step="1"
      :value="currentImg"
      :class="rangeClass"
      @input="handleRange()"
      v-if="showRange"
    )

</template>

<script>
export default {
  name: 'VueProductSpinner',

  props: {
    imgs: Array,
    showRange: Boolean,
    rangeClass: String
  },

  data: function() {
    return {
      capture: {
        enabled: true,
        start:   0,
      },
      drag: {
        x: 0,
      },
      bounds: {
        width:  0,
      },
      imgsNum: this.imgs.length,
      currentImg: this.imgs[0]
    }
  },

  mounted() {
    this.bounds.width  = this.$refs.mainDiv.clientWidth
  },

  methods: {

    handleMouseDown(event) {
      this.capture.enabled = true
      this.capture.start   = event.x
    },

    handleMouseUp() {
      this.capture.enabled = false
    },

    handleMouseMove(event) {
      if (!this.capture.enabled) {
        return
      }
      this.drag.x = event.x
      this.computeCurrentImage()
    },

    handleTouchStart() {
      this.capture       = true
      this.capture.start = event.x
      this.computeCurrentImage()
    },

    handleTouchEnd() {
      this.capture = false
    },

    handleTouchMove(event) {
      if (!this.capture) {
        return
      }
      this.drag.x = event.touches[0].clientX
    },

    computeCurrentImage() {
      const limit        = this.imgsNum
      const currentIndex = this.imgs.indexOf(this.currentImg)
      const range        = Math.floor(this.bounds.width / (this.capture.start - this.drag.x))
      const index        = Math.floor(limit / (this.bounds.width / this.drag.x))
      console.log(range)
      this.currentImg = this.imgs[index]
    }

  }
}

</script>

<style scoped lang="scss">
  .vue-product-spinner {
    user-select: none;
    cursor: default;
  }
</style>

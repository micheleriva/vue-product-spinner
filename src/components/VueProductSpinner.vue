<template lang="pug">

  #VueProductSpinnerImgRef.vue-product-spinner(
    ref="mainDiv"
  )

    img(
      :src="currentImg", 
      draggable="false"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseUp"
      
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @tuochend="handleTouchEnd"
    )
    input(
      type="range"
      min="1"
      :max="imgsNum"
      step="1"
      :value="currentIndex"
      :class="range.class"
      @input="handleRange"
      v-if="range.enable"
    )

</template>

<script>
export default {

  name: 'VueProductSpinner',

  props: {
    imgs:  Array,
    range: Object,
    mode:  String
  },

  data() {
    return {
      capture: {
        enabled: false,
        start:   0,
      },
      drag: {
        x: 0,
      },
      bounds: {
        width:  0,
      },
      currentIndex: 0,
      lastIndex:    0
    }
  },

  mounted() {
    this.bounds.width = this.$refs.mainDiv.clientWidth
  },

  computed: {
    imgsNum() {
      return this.imgs.length
    },

    pixelPerFrame() {
      return Math.floor(this.bounds.width / (this.imgsNum / 2))
    },

    currentImg() {
      return this.imgs[this.currentIndex]
    }
  },

  methods: {

    handleMouseDown(event) {
      this.capture.enabled = true
      this.capture.start   = event.x
    },

    handleMouseUp() {
      this.capture.enabled = false
      this.lastIndex       = this.currentIndex
    },

    handleMouseMove(event) {
      if (!this.capture.enabled) return

      this.drag.x        = event.x
      const startPoint   = this.capture.start
      const currentPoint = this.drag.x

      if (startPoint === currentPoint) return

      const shouldMove = (this.currentIndex >= 0 && this.currentIndex <= this.imgsNum)

      if (currentPoint - startPoint > this.pixelPerFrame) {
        shouldMove && this.currentIndex++
      } else {
        shouldMove && this.currentIndex--
      }

    },

    handleTouchStart(event) {
      this.capture.enabled = true
      this.capture.start   = event.x
      this.computeCurrentImage()
    },

    handleTouchEnd() {
      this.capture.enabled = false
    },

    handleTouchMove(event) {
      if (!this.capture.enabled) {
        return
      }
      this.drag.x = event.touches[0].clientX
      this.computeCurrentImage()
    },

    computeCurrentImage() {
      const limit       = this.imgsNum
      const index       = Math.floor(limit / (this.bounds.width / this.drag.x))
      this.currentIndex = index >= limit ? limit - 1 : index
    },

    handleRange(ev) {
      return this.currentIndex = ev.target.value - 1
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

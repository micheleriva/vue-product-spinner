<template lang="pug">

  .vue-product-spinner#mainDiv(
    ref="mainDiv"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
  )

    img(:src="currentImg", draggable="false")
    input(
      type="range"
      min="1"
      max="imgsNum"
      value="currentImg"
      :class="rangeClass"
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
      capture: false,
      drag: {
        x: 0,
      },
      bounds: {
        width:  0,
      },
      imgsNum: this.imgs.length,
    }
  },

  mounted() {
    this.bounds.width  = this.$refs.mainDiv.clientWidth
  },

  computed: {
    currentImg() {
      const  index = parseInt(this.imgsNum / (this.bounds.width / this.drag.x)) 
      return this.imgs[index]
    }
  },

  methods: {

    handleMouseDown() {
      this.capture = true
    },

    handleMouseUp() {
      this.capture = false
    },

    handleMouseMove(event) {
      if (!this.capture) return
      this.drag.x = event.x
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

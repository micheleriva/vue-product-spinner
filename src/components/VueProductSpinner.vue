<template lang="pug">

  .vue-product-spinner#mainDiv(
    ref="mainDiv"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
  )

    img(:src="currentImg", draggable="false")

</template>

<script>
export default {
  name: 'VueProductSpinner',
  
  props: {
    imgs: Array
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
      this.drag.y = event.y
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

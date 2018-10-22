<template lang="pug">
  #app(:style="{backgroundColor: bgColor}")
    GitHubRibbon
    VueProductSpinner(
      :imgs="images"
      :range="range"
      :mode="mode"
      v-if="imagesAreReady"
    )
    .spinner-cont(v-else)
      Spinner
    .car-selector
      .car(
        v-for="car in availableCars"
        @click="handleCarSelection(car)"
      ) {{ car }}
    .color-selection
      .color(v-for="color in colors", 
            :style="{backgroundColor: color}"
            @click="changeBgColor(color)"
            )

</template>

<script>

import VueProductSpinner from './components/VueProductSpinner.vue'
import GitHubRibbon      from './components/GitHubRibbon.vue'
import Spinner           from './components/Spinner.vue'
import Cars              from './carImgs.js'

export default {
  name: 'app',

  data: function() {
    return {
      imagesAreReady: false,
      bgColor:        Cars.honda.colors[0],
      colors:         Cars.honda.colors,
      imgs:           Cars.honda.imgs,
      availableCars:  Object.keys(Cars),
      mode:           ['drag'],
      range: {
        enable: true,
        class:  'custom-range'
      }
    }
  },

  mounted() {
    this.preloadImages()
  },

  methods: {

    changeBgColor(color) {
      this.bgColor = color
    },

    preloadImages() {

      this.images.forEach(element => {
        const img = new Image()
        img.src = element
      })

      this.imagesAreReady = true
    },

    handleCarSelection(carName) {
      this.bgColor = Cars[carName].colors[0]
      this.colors  = Cars[carName].colors
      this.imgs    = Cars[carName].imgs
      this.imagesAreReady = false
      this.preloadImages()
    }
  },

  computed: {
    images() {
      const prefix = 'https://micheleriva.github.io/vue-product-spinner/'
      return window.location.pathname === '/' ? this.imgs : this.imgs.map(img => prefix+img)
    }
  },

  components: {
    VueProductSpinner,
    GitHubRibbon,
    Spinner
  }
}
</script>

<style lang="scss">

  .car-selector {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5em;
    width: 100%;

    .car {
      margin-left: 2em;
      margin-right: 2em;
      font-family: Arial, Helvetica, sans-serif;
      text-transform: capitalize;
      background: #2196F3;
      padding: 1em;
      border-radius: 12px;
      color: #f5f5f5;
      cursor: pointer;
      transition: ease 0.5s;

      &:hover {
        transform: scale(1.2)
      }
    }
  }

  .custom-range {
    position: fixed;
    bottom: 15em;

    appearance: none;
    width: 50%; 
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    border-radius: 15px;
    transition: opacity .2s;
  
    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 50px;
      border-radius: 15px;
      background: rgb(99, 111, 128);
      cursor: pointer;
    }
  }

  body, #app {
    margin: 0;
    padding: 0;

    .spinner-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .vue-product-spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      max-width: 100vw;
      width: 1000px;
      min-height: 100vh;

      img {
        width: 600px;
        max-width: 100%;
      }
    }

    .color-selection {
      position: fixed;
      display: flex;
      justify-content: space-around;
      width: 100%;
      bottom: 2em;

      .color {
        flex-grow: 0;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: white solid 5px;
        cursor: pointer;
        transition: ease 0.5s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
</style>

<template lang="pug">
  #app(:style="{backgroundColor: bgColor}")
    GitHubRibbon
    VueProductSpinner(
      :imgs="images"
      :showRange="true"
      rangeClass="custom-range"
      v-if="imagesAreReady")
    .spinner-cont(v-else)
      Spinner
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

export default {
  name: 'app',

  data: function() {
    return {
      imagesAreReady: false,
      bgColor: '#319289',
      colors: [
        '#CED2D8',
        '#303337',
        '#A46C00',
        '#A7B8CE',
        '#319289',
        '#3D4856'
      ],
      imgs: [
        '/imgs/1.png',
        '/imgs/2.png',
        '/imgs/3.png',
        '/imgs/4.png',
        '/imgs/5.png',
        '/imgs/6.png',
        '/imgs/7.png',
        '/imgs/8.png',
        '/imgs/9.png',
        '/imgs/10.png',
        '/imgs/11.png',
        '/imgs/12.png',
        '/imgs/13.png',
        '/imgs/14.png',
        '/imgs/15.png',
        '/imgs/16.png',
        '/imgs/17.png',
        '/imgs/18.png',
        '/imgs/19.png',
        '/imgs/20.png',
        '/imgs/21.png',
        '/imgs/22.png',
        '/imgs/23.png',
        '/imgs/24.png',
        '/imgs/25.png',
        '/imgs/26.png',
        '/imgs/27.png',
        '/imgs/28.png',
        '/imgs/29.png',
        '/imgs/30.png',
        '/imgs/31.png',
        '/imgs/32.png',
        '/imgs/33.png',
        '/imgs/34.png',
        '/imgs/35.png',
        '/imgs/36.png',
        '/imgs/37.png',
        '/imgs/38.png',
        '/imgs/39.png',
        '/imgs/40.png',
        '/imgs/41.png',
        '/imgs/42.png',
        '/imgs/43.png',
        '/imgs/44.png',
        '/imgs/45.png',
        '/imgs/46.png',
        '/imgs/47.png',
        '/imgs/48.png',
        '/imgs/49.png',
        '/imgs/50.png',
        '/imgs/51.png',
      ]
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
    }
  },

  computed: {
    images() {
      const prefix = 'https://micheleriva.github.io/vue-product-spinner'
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

  .custom-range {
    position: fixed;
    bottom: 15em;

    appearance: none;
    width: 50%; 
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    border-radius: 10px;
    transition: opacity .2s;
  
    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 100%;
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
      max-width: 100vw;
      min-height: 100vh;

      img {
        max-width: 100vw;
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
      }
    }
  }
</style>

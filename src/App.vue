<template>
  <div id="app">
    <VueProductSpinner :images="productImages" :slider="true" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueProductSpinner from "./components/VueProductSpinner.vue";

const images = (): string[] =>
  [...Array(51)].map((_img: string, i: number) => `/imgs/honda/${i + 1}.png`);

export default Vue.extend({
  name: "app",
  components: {
    VueProductSpinner
  },
  data() {
    return {
      productImages: images()
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

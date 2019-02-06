<template>
  <div id="app">
    <VueProductSpinner
      :images="productImages"
      :slider="true"
      :infinite="true"
    />
    <VueProductSpinner :images="shoeImages" :slider="true" :infinite="true" />
  </div>
</template>

<script>
import VueProductSpinner from "./components/VueProductSpinner.vue";

const images = () =>
  [...Array(51)].map((_img, i) => `/imgs/honda/${i + 1}.png`);

const shoe = () =>
  [...Array(71)].map((_img, i) => `/imgs/shoe/UnderArmour-${i + 1}.jpg`);

export default {
  name: "app",
  components: {
    VueProductSpinner
  },
  data() {
    return {
      productImages: images(),
      shoeImages: shoe()
    };
  }
};
</script>

<style lang="postcss">
#app {
  background: #000;
}
</style>

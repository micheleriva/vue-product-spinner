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

<script lang="ts">
import Vue from "vue";
import VueProductSpinner from "./components/VueProductSpinner.vue";

const images = (): string[] =>
  [...Array(51)].map((_img: string, i: number) => `/imgs/honda/${i + 1}.png`);

const shoe = (): string[] =>
  [...Array(71)].map(
    (_img: string, i: number) => `/imgs/shoe/UnderArmour-${i + 1}.jpg`
  );

export default Vue.extend({
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
});
</script>

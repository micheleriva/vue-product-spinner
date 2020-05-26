<template>
  <div id="app">
    <Ribbon />
    <DemoCommands />
    <div class="demo demo-1">
      <VueProductSpinner
        :images="productImages"
        :slider="props.slider"
        :infinite="props.infinite"
        :mouseWheel="props.mouseWheel"
        :animation="props.animation"
        sliderClass="demo-slider"
      >
        <PulseLoader color="#3f51b5" />
      </VueProductSpinner>
    </div>
    <div class="demo demo-2">
      <VueProductSpinner
        :images="shoeImages"
        :slider="props.slider"
        :infinite="props.infinite"
        :mouseWheel="props.mouseWheel"
        :animation="props.animation"
        sliderClass="demo-slider"
      >
        <PulseLoader color="#3f51b5" />
      </VueProductSpinner>
    </div>
  </div>
</template>

<script>
import VueProductSpinner from "./components/VueProductSpinner.vue";
import DemoCommands from "./components/DemoCommands.vue";
import Ribbon from "./components/Ribbon.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { EventBus } from "./EventBus.js";

const production = window.location.hostname !== "localhost";

const images = () =>
  [...Array(51)].map(
    (_img, i) =>
      `${production ? "/vue-product-spinner" : ""}/imgs/honda/${i + 1}.png`
  );

const shoe = () =>
  [...Array(71)].map(
    (_img, i) =>
      `${production ? "/vue-product-spinner" : ""}/imgs/shoe/UnderArmour-${i +
        1}.jpg`
  );

export default {
  name: "app",
  components: {
    VueProductSpinner,
    Ribbon,
    DemoCommands,
    PulseLoader
  },
  data() {
    return {
      productImages: images(),
      shoeImages: shoe(),
      props: {
        slider: true,
        infinite: true,
        mouseWheel: true,
        animation: true,
      }
    };
  },
  methods: {
    handleCommands(commands) {
      for (let command of commands) {
        this.props[command.name] = command.value;
      }
    }
  },
  mounted() {
    EventBus.$on("newCommand", this.handleCommands);
  },
  beforeDestroy() {
    EventBus.$off("newCommand", this.handleCommands);
  }
};
</script>

<style lang="postcss">
body {
  margin: 0;
  font-family: sans-serif;
}

.vue-product-spinner img {
  width: 90%;
  margin-left: 5%;
}

.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.demo-1 {
  background-image: linear-gradient(135deg, #f97794 10%, #623aa2 100%);
}

.demo-slider {
  -webkit-appearance: none;
  width: 90%;
  height: 15px;
  margin-left: 5%;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.demo-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #3f51b5;
  cursor: pointer;
}

.demo-slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #3f51b5;
  cursor: pointer;
}
</style>

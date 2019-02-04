import Vue from "vue";
import VueProductSpinner from "./VueProductSpinner.vue";

const components = {
  VueProductSpinner
};

Object.keys(components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default components;

import Vue from "vue";
import VueProductSpinner from "./VueProductSpinner.vue";

const components = {
  VueProductSpinner
};

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

export default components;

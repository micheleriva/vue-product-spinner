module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4027":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "586b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueProductSpinner_vue_vue_type_style_index_0_id_1904afa5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4027");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueProductSpinner_vue_vue_type_style_index_0_id_1904afa5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueProductSpinner_vue_vue_type_style_index_0_id_1904afa5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueProductSpinner_vue_vue_type_style_index_0_id_1904afa5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78502720-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueProductSpinner.vue?vue&type=template&id=1904afa5&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"mainDiv",staticClass:"vue-product-spinner",attrs:{"id":"VueProductSpinnerImgRef"}},[_c('img',{attrs:{"src":_vm.currentImg,"draggable":"false"},on:{"mousedown":_vm.handleMouseDown,"mouseup":_vm.handleMouseUp,"mousemove":_vm.handleMouseMove,"mouseleave":_vm.handleMouseUp,"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove,"tuochend":_vm.handleTouchEnd}}),(_vm.range.enable)?_c('input',{class:_vm.range.class,attrs:{"type":"range","min":"1","max":_vm.imgsNum,"step":"1"},domProps:{"value":_vm.currentIndex},on:{"input":_vm.handleRange}}):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueProductSpinner.vue?vue&type=template&id=1904afa5&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueProductSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VueProductSpinnervue_type_script_lang_js_ = ({
  name: 'VueProductSpinner',
  props: {
    imgs: Array,
    range: Object,
    mode: String
  },
  data: function data() {
    return {
      capture: {
        enabled: false,
        start: 0
      },
      drag: {
        x: 0
      },
      bounds: {
        width: 0
      },
      currentIndex: 0,
      lastIndex: 0
    };
  },
  mounted: function mounted() {
    this.bounds.width = this.$refs.mainDiv.clientWidth;
  },
  computed: {
    imgsNum: function imgsNum() {
      return this.imgs.length;
    },
    pixelPerFrame: function pixelPerFrame() {
      return Math.floor(this.bounds.width / (this.imgsNum / 2));
    },
    currentImg: function currentImg() {
      return this.imgs[this.currentIndex];
    }
  },
  methods: {
    handleMouseDown: function handleMouseDown(event) {
      this.capture.enabled = true;
      this.capture.start = event.x;
    },
    handleMouseUp: function handleMouseUp() {
      this.capture.enabled = false;
      this.lastIndex = this.currentIndex;
    },
    handleMouseMove: function handleMouseMove(event) {
      if (!this.capture.enabled) return;
      this.drag.x = event.x;
      var startPoint = this.capture.start;
      var currentPoint = this.drag.x;
      if (startPoint === currentPoint) return;
      var shouldMove = this.currentIndex > 0 && this.currentIndex < this.imgsNum - 1;

      if (currentPoint - startPoint > this.pixelPerFrame) {
        shouldMove && this.currentIndex++;
      } else {
        shouldMove && this.currentIndex--;
      }
    },
    handleTouchStart: function handleTouchStart(event) {
      this.capture.enabled = true;
      this.capture.start = event.x;
      this.computeCurrentImage();
    },
    handleTouchEnd: function handleTouchEnd() {
      this.capture.enabled = false;
    },
    handleTouchMove: function handleTouchMove(event) {
      if (!this.capture.enabled) {
        return;
      }

      this.drag.x = event.touches[0].clientX;
      this.computeCurrentImage();
    },
    computeCurrentImage: function computeCurrentImage() {
      var limit = this.imgsNum;
      var index = Math.floor(limit / (this.bounds.width / this.drag.x));
      this.currentIndex = index >= limit ? limit - 1 : index;
    },
    handleRange: function handleRange(ev) {
      return this.currentIndex = ev.target.value - 1;
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueProductSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueProductSpinnervue_type_script_lang_js_ = (VueProductSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VueProductSpinner.vue?vue&type=style&index=0&id=1904afa5&scoped=true&lang=scss&
var VueProductSpinnervue_type_style_index_0_id_1904afa5_scoped_true_lang_scss_ = __webpack_require__("586b");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VueProductSpinner.vue






/* normalize component */

var component = normalizeComponent(
  components_VueProductSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1904afa5",
  null
  
)

component.options.__file = "VueProductSpinner.vue"
/* harmony default export */ var VueProductSpinner = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js

/* harmony default export */ var components = ({
  VueProductSpinner: VueProductSpinner
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ });
//# sourceMappingURL=vue-product-spinner.common.js.map
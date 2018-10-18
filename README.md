# 🚗 Vue Product Spinner (Under Active Development, still buggy)

<div style="text-align:center">

  <img src ="/artwork/VueProductSpinner.png" />

[![Build Status](https://travis-ci.org/micheleriva/vue-product-spinner.svg?branch=master)](https://travis-ci.org/micheleriva/vue-product-spinner)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue Version](https://img.shields.io/badge/vue-2.5.17-green.svg)](https://vuejs.org/)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=An%20amazing%20vue%20js%20component&url=https://github.com/micheleriva/vue-product-spinner&hashtags=vuejs,vue,spinner,3D,component)


A 3D product spinner with no dependencies built for Vue.js

</div>

# Demo

Live demo [here](https://micheleriva.github.io/vue-product-spinner/)

![Vue Product Spinner](/docs/VueProductSpinner.gif)

# Installation

**npm**
```sh
npm i vue-product-spinner
```

**yarn**
```sh
yarn add vue-product-spinner
```

**UMD build**
```html
<script src="https://cdn.jsdelivr.net/npm/vue-product-spinner@0.0.7-dev/dist/vue-product-spinner.umd.js" type="text/javascript"></script>
```

# Usage

```html
<template>
  <VueProductSpinner :imgs="imgs" />
</template>

<script>
  import VueProductSpinner from 'vue-product-spinner'

  export default {
    data() {
      return {
        imgs: [
          'img1.jpg',
          'img2.jpg',
          'img3.jpg'
        ]
      }
    },

    components: {
      VueProductSpinner
    }
  }
</script>

```

# Running the tests
We are still writing our tests. Once they will be ready, simply run them by typing:

```sh
$ yarn test
```

# Built With
- [Vue Cli](https://cli.vuejs.org/) - Project Bootstrap
- [Pug](https://pugjs.org) - Template Engine
- [Scss](https://sass-lang.com/) - CSS Preprocessor

# Versioning
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/micheleriva/vue-product-spinner/tags).

# Authors

- **Michele Riva**

See also the list of [contributors](https://github.com/micheleriva/vue-product-spinner/graphs/contributors) who participated in this project.


# Roadmap

- [ ] Solve basic bugs
- [x] Add slider support
- [x] Add touchscreen support
- [ ] Add "mouse move" support

# License
This project is licensed under the MIT License - see the [LICENSE.md]((/LICENSE.md)) file for details.
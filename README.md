# 🚗 Vue Product Spinner (Under Active Development, still buggy)

A 3D product spinner with no dependencies built for Vue.js

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

# Roadmap

- [ ] Solve basic bugs
- [x] Add slider support
- [ ] [Add touchscreen support](#1)
- [ ] Add "mouse move" support

# License
[MIT](/LICENSE.md)
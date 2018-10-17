# Vue Product Spinner (Under Active Development)
# STILL UNDER DEVELOPMENT! DO NOT USE IN PRODUCTION!

Bootstrapped with Vue Cli. No regrets.

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

# License
[MIT](/LICENSE.md)
module.exports = {
  chainWebpack: config => {
    config.module
          .rule("json")
          .test(/\.json$/)
          .use("json-loader")
            .loader("json-loader")
            .end()
  },
  baseUrl: process.env.NODE_ENV === 'production'
           ? '/vue-product-spinner/'
           : '/'
}

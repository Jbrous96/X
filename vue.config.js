const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.optimization.minimize(false)
    config.optimization.minimizer('terser').tap((args) => {
      const opts = args[0]
      opts.terserOptions = {
        ...opts.terserOptions,
        keep_classnames: true,
        keep_fnames: true
      }
      return args
    })
  },
  productionSourceMap: false,
  css: {
    sourceMap: false
  }
})
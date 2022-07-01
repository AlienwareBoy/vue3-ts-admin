const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const env = process.env.NODE_ENV
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  configureWebpack: config => {
    if (env === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://192.168.0.142:5001',
        ws: false,
        changeOrigin: true
      },
      '/text': {
        target: 'http://172.29.102.146:8081',
        ws: false,
        changeOrigin: true
      }
    }
  }
})

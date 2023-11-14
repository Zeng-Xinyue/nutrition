const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    proxy: {
      ['/api']: {
        target: `http://124.221.104.7:8700`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + '/api']: ''
        }
      },
    },
    historyApiFallback: true,
    allowedHosts: "all",
  },
})

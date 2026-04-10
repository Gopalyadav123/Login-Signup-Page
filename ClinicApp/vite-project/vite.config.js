export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://187.77.187.109:7073',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
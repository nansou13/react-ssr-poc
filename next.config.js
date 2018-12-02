const withImages = require('next-images')
module.exports = withImages()
module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    },
  }
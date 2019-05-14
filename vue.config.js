const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@app/constants', resolve('src/shared/constants'))
  }
}

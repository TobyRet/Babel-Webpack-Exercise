module.exports = {
  entry: [
    __dirname + '/src/components/main.js'
  ],
  module: {
    test: /\.js$/,
    loaders: [{
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
}

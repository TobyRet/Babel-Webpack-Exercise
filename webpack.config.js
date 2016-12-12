module.exports = {
  entry: [
    __dirname + '/src/components/app.jsx'
  ],
  module: {
    test: /\.jsx$/,
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

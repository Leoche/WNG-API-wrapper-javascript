const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: {
   main: './src/lib/Wng.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "./release"),
    filename: "wng.min.js"
  }
};
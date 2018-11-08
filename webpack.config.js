var path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  watch: true,
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Util: path.resolve(__dirname, 'src/util/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      }
    ]
  }
}
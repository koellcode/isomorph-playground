const path = require("path");
const webpackMerge = require("webpack-merge");
const webpackCommon = require("./webpack.common");

// webpack plugins
const webpack = require("webpack");

module.exports = webpackMerge(webpackCommon, {
  entry: {
    app: ["./src/desktop/Page.jsx"]
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "../build/client"),
    filename: "[name].js",
    sourceMapFilename: "[name].map",
    chunkFilename: "[id]-chunk.js",
    publicPath: "/"
  },

  externals: {
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    cheerio: "window"
  },

  module: {
    rules: []
  },

  plugins: []
});

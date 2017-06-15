const path = require("path");
const webpackMerge = require("webpack-merge");
const webpackCommon = require("./webpack.common");
var nodeExternals = require("webpack-node-externals");

// webpack plugins
const webpack = require("webpack");

module.exports = webpackMerge(webpackCommon, {
  target: "node",
  externals: ["express", "express-http-proxy"],
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    bundle: "./src/server/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../build/server"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: []
  },
  plugins: []
});

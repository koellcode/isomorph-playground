const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".svg", ".png", ".jpg"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      react: "inferno-compat",
      "react-dom": "inferno-compat"
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: []
};

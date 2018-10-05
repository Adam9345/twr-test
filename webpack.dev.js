const merge = require("webpack-merge");
const webpack = require("webpack");
const tslintWebpackPlugin = require("tslint-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: {
    app: ["./src/index.tsx", "webpack-hot-middleware/client"]
  },
  output: {
    publicPath: "/"
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new tslintWebpackPlugin({
      files: ["./src/**/*.ts", "./src/**/*.tsx"]
    })
  ]
});

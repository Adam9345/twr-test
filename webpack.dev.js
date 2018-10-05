const merge = require("webpack-merge");
const webpack = require("webpack");
const tslintWebpackPlugin = require("tslint-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new tslintWebpackPlugin({
      files: ["./src/**/*.ts", "./src/**/*.tsx"]
    })
  ]
});

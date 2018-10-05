const merge = require("webpack-merge");
const webpack = require("webpack");
const tslintWebpackPlugin = require("tslint-webpack-plugin");
const common = require("./webpack.common.js");

process.env.NODE_ENV = "development";

module.exports = merge(common, {
  entry: {
    app: ["./src/index.tsx", "webpack-hot-middleware/client"]
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

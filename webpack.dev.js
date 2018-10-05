const merge = require("webpack-merge");
const webpack = require("webpack");
const tslintWebpackPlugin = require("tslint-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: {
    app: ["./src/index.tsx", "webpack-hot-middleware/client"]
  },
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new tslintWebpackPlugin({
      files: ["./src/**/*.ts", "./src/**/*.tsx"]
    })
  ]
});

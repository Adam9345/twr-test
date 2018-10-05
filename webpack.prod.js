const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  entry: {
    app: ["./src/index.tsx"]
  },
  optimization: {
    minimizer: [new uglifyjsWebpackPlugin()]
  },
  mode: "production",
  devtool: "source-map"
});

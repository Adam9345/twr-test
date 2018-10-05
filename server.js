const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

const compiler = webpack(webpackConfig);

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  })
);

app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.resolve(__dirname, "dist")));

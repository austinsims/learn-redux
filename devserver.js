const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev')
const devMiddlewareFactory = require('webpack-dev-middleware');
const hotMiddlewareFactory = require('webpack-hot-middleware');

const PORT = 9990;

const app = express();
const compiler = webpack(config);

const devMiddlewareOpts = {
  noInfo: true,
  publicPath: config.output.publicPath,
};
const devMiddleware = devMiddlewareFactory(compiler, devMiddlewareOpts);
app.use(devMiddleware);

const hotMiddleware = hotMiddlewareFactory(compiler);
app.use(hotMiddleware);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
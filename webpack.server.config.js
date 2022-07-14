const path = require('path');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');
const nodeExternals = require('webpack-node-externals');

let config = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist-server'),
    filename: 'index.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['file-loader'],
      },
    ]
  }
};

module.exports = merge(sharedConfig(), config)
// const path = require('path')
// const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
}

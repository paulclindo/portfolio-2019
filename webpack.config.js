const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TersetJSPlugin = require('terser-webpack-plugin');
const FaviconWebPackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: './',
  },
  resolve: {
    // extensions: ['*', '.js', '.jsx'],
  },
  optimization: {
    minimizer: [new TersetJSPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jp(e)?g|png|svg|mp4|webm|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              // publicPath: './dist/' //disabled for productions
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public'}
      ]
    }),
    new FaviconWebPackPlugin('./public/favicon-32x32.png')
  ],
};

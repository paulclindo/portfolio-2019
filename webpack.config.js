const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TersetJSPlugin = require('terser-webpack-plugin');

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
  // devServer: {
  //   historyApiFallback: true,
  // },
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
              publicPath: './dist/'
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
    // new CopyWebpackPlugin([
    //   { from: 'public' }
    // ]),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }),
  ],
};

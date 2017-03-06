const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin');

const PATHS = Object.freeze({
  APP: path.resolve(__dirname, 'app'),
  BUILD: path.resolve(__dirname, 'dist')
})

module.exports = {
  entry: {
    app: PATHS.APP
  },
  output: {
    path: PATHS.BUILD,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  devtool: '#source-map',
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Typescript Tryout',
      inject: false,
      template: require('html-webpack-template'),
      links: [
        '/node_modules/hack/dist/hack.css',
        '/node_modules/hack/dist/standard.css',
        '/app/styles.css'
      ],
      appMountId: 'app',
    }),
    new DashboardPlugin(),
  ],
}

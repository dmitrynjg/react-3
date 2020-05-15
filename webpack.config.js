const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { sourceMap: false }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: false, config: { path: 'postcss.config.js' } }
        }]
      },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'app.min.css'
    })
  ]
};
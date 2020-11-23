const path = require("path");
const PATHS = require("./path.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /* 入口文件 */
  entry: "./src/index.js",
  /* 出口文件 */
  output: {
    path: path.resolve(__dirname, PATHS["dist"]),
    filename: "js/[name].[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        use: [
          {
            loader: "babel-loader", // options 在 .babelrc 定义
          },
          {
            loader: "eslint-loader",
            options: {
              fix: true,
              enforce: true,
            },
          },
        ],
      },
      {
        //字体
        test: /\.(eot|woff2|woff|ttf|svg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name][fullhash].[ext]",
              outputPath: "dist/assets/fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "测试标题",
      template: path.resolve(PATHS["public"], "index.html"),
      hash: true,
      minify: {
        removeAttributeQuotes: true, // 去除多余引号
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
      },
    }),
  ],
};

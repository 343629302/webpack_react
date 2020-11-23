const PATHS = require("./path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  /* 模式 */
  mode: "development",
  /* sorce-map */
  devtool: "cheap-module-source-map",
  /* 本地服务 */
  devServer: {
    inline: true, //实时刷新
    hot: true, //开启热更新
  },
  module: {
    /* 规则 */
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      },
    ],
  },
  /* 插件 */
  plugins: [],
};

module.exports = merge(commonConfig, devConfig);

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
  /* 生产模式 */
  mode: "production",
  module: {
    /* 规则 */
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          //单独抽离图片
          {
            loader: "url-loader",
            options: {
              name: "[name].[hash].[ext]",
              // 小于 5kb 的图片用 base64 格式产出
              // 否则，依然延用 file-loader 的形式，产出 url 格式
              limit: 5 * 1024,
              //打包到 image 目录下
              outputPath: "/assets/image",
            },
          },
        ],
      },
    ],
  },

  /* 插件 */
  plugins: [
    new CleanWebpackPlugin(),
    /* 抽离css文件 */
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].css",
    }),
  ],

  optimization: {
    minimizer: [
      /* 压缩js */
      new TerserPlugin(),
      /* 压缩css */
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      chunks: "all",
      /* 混存 */
      cacheGroups: {
        /* 第三方模块 */
        vendor: {
          name: "vendor", // chunk 名称
          priority: 1, // 权限更高，优先抽离
          test: /node_modules/,
          minSize: 0, // 大小限制
          minChunks: 1, // 最少复用过几次
        },

        /* 公共模块 */
        common: {
          name: "common",
          priority: 0,
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },
};

module.exports = merge(commonConfig, prodConfig);

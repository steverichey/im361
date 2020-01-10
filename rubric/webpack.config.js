const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  // see: https://stackoverflow.com/a/42731618/1944212
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js'
    }
  },
  // this is for serving
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'IM 361 Rubric',
      // ensure output HTML has some meta tags
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      // inline all JS and CSS into the output HTML
      inlineSource: '.(js|css)$',
      // remove newlines from HTML on production builds
      minify: {
        collapseWhitespace: argv.mode === 'production'
      }
    }),
    // allow using "inlineSource" above
    new HtmlWebpackInlineSourcePlugin(),
    // see: https://github.com/DustinJackson/html-webpack-inline-source-plugin/issues/27
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ["*.js"]
    })
  ],
  module: {
    rules: [
      // embed src CSS into the output JS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // embed src HTML into the output JS
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ]
      }
    ]
  },
  // this removes the Vue.js header
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  }
});

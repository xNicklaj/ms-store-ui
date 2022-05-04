const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const themePlugin = require('postcss-theme');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  entry: './src/main.js',
  externals: [nodeExternals()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ms-store-ui',
    libraryTarget: 'commonjs'
  },
  plugins: [
    new CleanWebpackPlugin(),
    require('postcss-dark-theme-class')({
      darkSelector: '[data-theme="dark"]',
      lightSelector: '[data-theme="light"]'
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
          }
        ]
      }
    ]
  },
  postcss: function () {
    return [
      theme({ themePath: './src/themes' }),
    ]
  }
}

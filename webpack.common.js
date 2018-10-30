const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'ggtool.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ggtool',
    libraryTarget: 'umd'
  },
  resolve: {
    // 自动补全的扩展名
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve('src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),

  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }]
  }
};

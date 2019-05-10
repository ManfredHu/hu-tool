const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'hu-tool.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'hu-tool',
    libraryTarget: 'umd',
    // https://webpack.js.org/configuration/output/#outputglobalobject
    // To make UMD build available on both browsers and Node.js, set output.globalObject option to 'this'.
    globalObject: 'this'
  },
  resolve: {
    // 自动补全的扩展名
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve('src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['lib']),

  ],
  module: {
    rules: []
  }
};

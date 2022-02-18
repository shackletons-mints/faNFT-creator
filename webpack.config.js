const path = require('path')


const SRC_DIR = path.join(__dirname, '/src')
const DIST_DIR = path.join(__dirname, '/dist')

module.exports = {
  entry: `${SRC_DIR}/main.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    pathinfo: false,
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  optimization: {
    runtimeChunk: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: [
          'babel-loader',
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
}

const path = require('path')

const SRC_DIR = path.join(__dirname, '/src')
const DIST_DIR = path.join(__dirname, '/dist')

module.exports = {
  entry: `${SRC_DIR}/main.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: [
          'style-loader',
          'css-loader'
        ],
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}

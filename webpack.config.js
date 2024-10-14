const path = require('path');

module.exports = {
  entry: {
    application: './app/javascript/packs/application.js',
    styles: './app/javascript/stylesheets/application.scss',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/packs'),
  },
  resolve: {
    modules: [path.resolve(__dirname, 'app/javascript'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  mode: 'production',
};
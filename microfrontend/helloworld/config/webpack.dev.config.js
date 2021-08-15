const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), './dist'),
    publicPath: 'http://localhost:9000/',
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(process.cwd(), './dist'),
    index: 'index.html',
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello world',
      description: 'Hello world',
      template: 'src/page-template.hbs',
    }),
    new ModuleFederationPlugin({
      name: 'HelloWorldApp',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWorldButton':
          './src/components/hello-world-button/hello-world-button.js',
      },
    }),
  ],
};

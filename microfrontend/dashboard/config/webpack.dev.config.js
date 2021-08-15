const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const PORT = 9002;
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), './dist'),
    publicPath: `http://localhost:${PORT}/`,
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(process.cwd(), './dist'),
    index: 'index.html',
    port: PORT,
    historyApiFallback: true,
  },
  module: {
    rules: [
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
      title: 'Dashboard',
      description: 'Dashboard',
      template: 'src/page-template.hbs',
    }),
    new ModuleFederationPlugin({
      name: 'DashboardApp',
      remotes: {
        HelloWorldApp: 'HelloWorldApp@http://localhost:9000/remoteEntry.js',
        KiwiApp: 'KiwiApp@http://localhost:9001/remoteEntry.js',
      },
    }),
  ],
};

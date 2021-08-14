const path = require('path');
// minify JS bundle files
// const TerserPlugin = require('terser-webpack-plugin');

// extract and minimize css bundle file
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// clean folders for every building time
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// html with enjected bundled resources such as css, js
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack requires an object configuration
module.exports = {
  // entry file for webpack process
  entry: './src/index.js',

  // where is store the output
  output: {
    // the name of file
    // the name of file will change once js content changed
    filename: 'bundle.[contenthash].js',

    // the folder we store output files, webpack needs an absolute path
    path: path.resolve(__dirname, './dist'),

    // URL | relative path
    // publicPath: 'dist/', // relative path
    publicPath: '',
  },
  mode: 'production',

  // add module to tell webpack how to import asset
  module: {
    // each rule has at least two properties: test and type
    rules: [
      {
        // the resource matches the test expression
        test: /\.(png|jpe?g)$/,

        // copy file to the output folder(dist)
        // type: 'asset/resource',

        // images are bundled as base64 format and embedded into js files directly.
        // type: 'asset/inline',

        // general, default: >=8Kb -> resource, othewise inline, you can change the default config if you want.
        type: 'asset',

        // image size >= 10kB -> files, inline for others
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 1Kb
          },
        },
      },
      {
        // import content of txt file as source type
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        use: [
          // 1. take output of css-loader and inject it into places using them
          // 2. bundle your css into a single file called bundle.js

          // 'style-loader',
          // use MiniCssExtractPlugin.loader instead of `style-loader` to mimimize css file
          MiniCssExtractPlugin.loader,
          // only read the content of css files and then return the content. it does nothing esle
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // the order of loader execution is: right to left
          // 'style-loader', // 3
          // use MiniCssExtractPlugin.loader instead of `style-loader` to mimimize css file
          MiniCssExtractPlugin.loader,
          'css-loader', // 2
          'sass-loader', // 1
        ],
      },
      // this rule apply for all js files exclude node_modules.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // tell webpack use babel-loader for all js files
          loader: 'babel-loader',
          // add more options for babel-loader
          options: {
            presets: [
              // all syntax from ES6 or higher will be transpiled to ES5
              // or all latest syntax defined in ECMAScript
              '@babel/env',
            ],

            // we need other plugins to support the features of ECMASCript
            plugins: [
              // you can find out what plugin supports the features of ECMAScript and also use how many plugins as you might want
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },

  // plugins, you can add how many plugins as you want
  plugins: [
    // minimize bundle js files
    // this plugin is added automatically in production mode
    // new TerserPlugin(),

    // minimize a separate css bundle file
    new MiniCssExtractPlugin({
      // name of file, it will change once css content changed
      filename: 'app.[contenthash].css',
    }),

    // clean up every build
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        // default clean all files and subfolders in dist folders
        '**/*',

        // remove all files and subfolders inside build folder
        path.resolve(process.cwd() + '/build/**/*'),
      ],
    }),

    // genereate or use the existing template html file and enject bundled resources
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};

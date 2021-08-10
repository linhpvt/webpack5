const path = require('path');

// webpack requires an object configuration
module.exports = {
  // entry file for webpack process
  entry: './src/index.js',

  // where is store the output
  output: {
    // the name of file
    filename: 'bundle.js',

    // the folder we store output files, webpack needs an absolute path
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'none',

  // add module to tell webpack how to import asset
  module: {
    // each rule has at least two properties: test and type
    rules: [
      {
        // the resource matches the test expression
        test: /\.(png|jp?eg)$/,
        // copy file to the output folder, in this case: dist folder
        type: 'asset/resource',
      },
    ],
  },
};

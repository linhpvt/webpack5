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
};

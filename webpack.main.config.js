module.exports = {
  entry: './src/main.ts',

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: require('./webpack.rules'),
  },
};

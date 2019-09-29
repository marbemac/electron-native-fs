const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },

  module: {
    rules,
  },
};

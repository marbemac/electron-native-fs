module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },

  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },

  {
    test: /\.ts(x?)$/,
    exclude: /(node_modules)/,
    loaders: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },

  {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
  },
];

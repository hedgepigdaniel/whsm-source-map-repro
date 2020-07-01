export const webpackConfig = {
  entry: {
    main: ['source-map-support/register', './src/makeRequestHandler.js'],
  },
  name: 'server',
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    strictExportPresence: true, // If you import something that isn't exported
    rules: [
      {
        test: /\.js$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: 'babel-loader',
      },
    ],
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
};

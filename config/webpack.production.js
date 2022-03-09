const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const minimizer = [
  new TerserPlugin({
    terserOptions: {
      ecma: 6,
    },
  }),
];

minimizer.push(new CssMinimizerPlugin());

module.exports = () => ({
  devtool: false,
  optimization: {
    minimizer,
    splitChunks: {
      automaticNameDelimiter: '-',
      cacheGroups: {
        commons: {
          test(module) {
            return (
              module.resource &&
              module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
            );
          },
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [],
});
import fs from 'fs';
import webpack from 'webpack';

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = `commonjs ${mod}`);

export default {
  entry: './s_src.js',
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: __dirname,
    filename: 's.js'
  },
  target: 'node',
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  devtool: 'sourcemap',
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [
            'react', ['env', {
              modules: false
            }]
          ]
        }
      }]
  },
};

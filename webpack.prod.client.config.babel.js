export default {
  entry: ['./src/App.jsx'],
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    rules: [{
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          plugins: ['transform-function-bind'],
          presets: [
            'react', ['env', {
              modules: false
            }]
          ]
        }
      }]
  },
};

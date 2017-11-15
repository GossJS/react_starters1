import HtmlWebpackPlugin from 'html-webpack-plugin';
const WDS_PORT = 1234;
const myTitle = 'Demo React Awesome 15-11-2017';

export default {
  "entry": "./src/App.jsx",
  "resolve" : {"extensions": [".js", ".jsx"]},
  "output": {
    "publicPath": "/",
    "filename": "./dist/bundle.js"
  },
  "devtool": "sourcemap",
  "module": {
    "rules": [{
 	  "test": /\.jsx$/,
    "loader": "babel-loader"
    }]
  },
  "plugins": [new HtmlWebpackPlugin({
    "title": myTitle,
    "template": "./src/my-index.ejs",
    "h2": myTitle
  })],
  "devServer": {
    "port": WDS_PORT,
    "host": "0.0.0.0"
  }

};
// this file: webpack.config.babel.js fork from https://kodaktor.ru/j/min_react_webpack

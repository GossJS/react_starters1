import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';

const WDS_PORT = 1234;
const myTitle = 'back to SSR';

export default {
  "entry": ["react-hot-loader/patch", "./src/App.jsx"],
  "resolve" : {"extensions": [".js", ".jsx"]},
  "output": {
    "publicPath": "/",
    "filename": "./bundle.js"
  },
  "devtool": "sourcemap",
  "module": {
    "rules": [{
        "test": /\.jsx$/,
        "loader": "babel-loader",
        "query": {
          "babelrc": false,
          "plugins": ["transform-function-bind"],
          "presets": [
            "react", ["env", {
              "modules": false
            }]
          ]
        }
      }]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      "title": myTitle,
      "template": "./src/my-index.ejs",
      "h2": myTitle
    }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin()
  ],
  "devServer": {
    "port": WDS_PORT,
    "hot": true,
    "host": "0.0.0.0",
    "historyApiFallback": true
  }

};

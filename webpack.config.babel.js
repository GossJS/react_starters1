import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';

const WDS_PORT = 1234;
const myTitle = 'My Material Router 14-11-2017';

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
  ]
};

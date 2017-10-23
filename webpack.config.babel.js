export default {
  "entry": "./src/App.jsx",
  "output": {
    "publicPath": "/dist",
    "filename": "bundle.js"
  },
  "devtool": "sourcemap",
  "module": {
    "rules": [{
      "loader": "babel-loader"
    }]
  }
};
// this files: webpack.config.babel.js
// .babelrc should contain {"presets":["env","react"]}
// package.json should contain "scripts": {"build":"webpack-dev-server"}
// https://gist.github.com/gossoudarev/f75b3c8f060d7d7947108ac9f2ef044c 
// can configure devServer port: можно ещё настроить порт девсервера "devServer":{"port":WDS_PORT}

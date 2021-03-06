const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./src/app.css", to: "app.css" }, 
      { from: "./src/index.html", to: "index.html" },
      { from: "./src/addreview.html", to: "addreview.html" },
      { from: "./src/editreview.html", to: "editreview.html" },
      { from: "./src/deleteuserreview.html", to: "deleteuserreview.html" },
      { from: "./src/header.html", to: "header.html" },
      { from: "./src/userreviews.html", to: "userreviews.html" },
      { from: './src/posters/', to: "posters/" },
      { from: './src/images/', to: "images/" }
      ]),
  ],
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};


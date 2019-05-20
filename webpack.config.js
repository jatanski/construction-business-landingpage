const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "./img",
            outputPath: "./img"
            // useRelativePaths: true
          }
        }
      }
    ]
  }
};

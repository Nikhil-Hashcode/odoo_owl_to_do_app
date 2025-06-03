const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    mode: argv.mode || "development",
    entry: "./src/main.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true, // clean dist folder before build
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "public"),
      },
      compress: true,
      hot: true,
      host: "localhost",
      port: 3000,
      open: true, // opens browser on start
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, "public/index.html"),
      }),
    ],
  };
};

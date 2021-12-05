import path from "path";
import { Configuration, DefinePlugin, ProvidePlugin, webpack } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
const CopyWebPlugin = require("copy-webpack-plugin");

const webpackConfig = (): Configuration => ({
  entry: "./src/index.tsx",
  ...(process.env.production || !process.env.development
    ? {}
    : { devtool: "eval-source-map" }),

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    alias: {
      "react-native-svg": "react-native-svg-web",
    },
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /build/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
        include: path.join(__dirname, "public"),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    port: 4000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
      template: "./public/index.html",
    }),
    // DefinePlugin allows you to create global constants which can be configured at compile time
    new DefinePlugin({
      "process.env": process.env.production || !process.env.development,
    }),
    new ForkTsCheckerWebpackPlugin({
      // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}",
      },
    }),
    new ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
    new CopyWebPlugin({
      patterns: [
        {
          from: "node_modules/@iota/identity-wasm/web/identity_wasm_bg.wasm",
          to: "identity_wasm_bg.wasm",
        },
      ],
    }),
  ],
});

// Add the copy plugin to the `plugins` array of your webpack config:

export default webpackConfig;

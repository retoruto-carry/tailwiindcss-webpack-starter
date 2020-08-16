const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/index.html"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.(sa|c|sc)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("tailwindcss"),
                require("autoprefixer"),
                ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
              ],
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};

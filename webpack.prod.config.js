const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlPages = (pages) => {
  pluginItems = [];
  if (pages) {
    pages.forEach((page) => {
      pluginItems.push(
        new HtmlWebpackPlugin({
          filename: `pages/${page.template}.html`,
          template: `./pages/${page.template}.html`,
          chunks: [page.scriptName ? page.scriptName : 'main'],
          inject: "body",
          minify: false
        }))
    })
  }
  return pluginItems;
}

/*
Об'єкт, який потрібно передати:
  template - посилання на html-шаблон
  scriptName - назва js-скрипту (якщо не передавати, буде дефолтне значення "main")
{
  template: "template",
  scriptName: "script"
}
*/

const pages = HtmlPages([]);

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, "src"),
  entry: {
    main: './js/main.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `./index.html`,
      inject: "body",
      minify: false
    }),
    ...pages
  ]
}

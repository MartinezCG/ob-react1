const path = require('path');
// PLUGINS Y MINIFICADORES DE CSS Y SCSS Y SASS
// Para reducir el tama;o de las hojas de estilo de nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para el template del HTML que va a usar Webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Reducir los CSS
const { SourceMapDevToolPlugin } = require('webpack'); // Para conocer el Source Map de nuestro proyecto

// Configuracion del puerto
const port = process.env.PORT || 3000;

// Exportar configuracion de WebPack
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  context: path.resolve(__dirname),
  devServer: {
    port,
    inline: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      // Reglas para archivos de JS y JSX
      // Tienen que pasar el LINTING para poder pasar
      {
        enforce: 'pre',
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
          'source-map-loader',
        ],
      },
      // Reglas para archivos JS y JSX
      // Reglas de Babel ES y JSX
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/env',
            '@babel/react',
          ],
        },
      },
      // Reglas para archivos CSS, SASS y SCSS para minificarlos y cargarlos en el bundle
      {
        test: /(\.css|\.scss|\.sass)$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // Reglas para los archivos de imagenes
      {
        test: /(\.png|\.jpe?g|\.gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // Template HTML
    new HtmlWebpackPlugin(
      {
        template: './index.html',
      },
    ),
    new MiniCssExtractPlugin(
      {
        filename: './css/styles.css',
      },
    ),
    new SourceMapDevToolPlugin(
      {
        filename: '[file].map',
      },
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    modules: [
      'node_modules',
    ],
  },
};

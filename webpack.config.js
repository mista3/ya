const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],

  entry: './src/index.tsx',

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
    cacheWithContext: false,
  },

  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff2$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  devtool: 'inline-source-map',

  devServer: {
    static: './public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
}
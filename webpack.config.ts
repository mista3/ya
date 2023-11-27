import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import 'webpack-dev-server'

const config: webpack.Configuration = {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      publicPath: 'auto',
    }),
  ],

  entry: './src/index.tsx',

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      'store': path.resolve(__dirname, 'src/store'),
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'types': path.resolve(__dirname, 'src/types'),
      'service': path.resolve(__dirname, 'src/service'),
      'public': path.resolve(__dirname, 'src/../public'),
      'helpers': path.resolve(__dirname, 'src/helpers'),
    }
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
        test: /\.ttf$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|gif)$/i,
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
      index: '/'
    },
  },
}

export default config
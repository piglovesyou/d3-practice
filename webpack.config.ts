import * as webpack from 'webpack';
import { join as pathJoin } from 'path';

const outdir = pathJoin(__dirname, 'public');
const config: webpack.Configuration = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/main',
  output: {
    path: outdir,
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outdir,
    port: 3000,
  },
};

export default config;

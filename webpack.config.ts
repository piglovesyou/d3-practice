import * as webpack from 'webpack';
import { join as pathJoin } from 'path';

const outdir = pathJoin(__dirname, 'public');
const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/main',
  output: {
    path: outdir,
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
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
  }
};

export default config;

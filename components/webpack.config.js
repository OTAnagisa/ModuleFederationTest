const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => ({
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.vue', '.jsx', '.js', '.json', '.ts'],
    },
    module:{
        rules:[
            {
              test: /\.vue$/,
              use: 'vue-loader',
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'index.html'),
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname),
      },
      compress: true,
      port: 3002,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    },
});
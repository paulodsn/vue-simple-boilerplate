const path = require('path')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './index.html'),
    }),
    new CopyPlugin([
        { from: path.resolve(__dirname, '..', './static'), to: 'static' },
    ]),]
});
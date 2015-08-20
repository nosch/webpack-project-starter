'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var sourceDir = path.resolve(__dirname, './src');
var outputDir = path.resolve(__dirname, './build');
var vendorEntry = ['react'];
var appEntry = [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    sourceDir + '/index'
];

var config = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        app: appEntry,
        vendor: vendorEntry
    },

    output: {
        path: outputDir,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/, // matches all *.js and *.jsx files
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            title: 'Webpack Project Starter',
            favicon: sourceDir + '/images/favicon.ico',
            template: sourceDir + '/html/index.tpl.html',
            inject: true
        })
    ]
};

module.exports = config;

'use strict';

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

var sourceDir = path.resolve(__dirname, './src');
var outputDir = path.resolve(__dirname, './build');
var appEntry = ['webpack/hot/dev-server', sourceDir + '/index.js'];
var vendorEntry = ['react'];

var config = {
    entry: {
        app: appEntry,
        vendor: vendorEntry
    },

    output: {
        path: outputDir,
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.jsx?$/, // matches all *.js and *.jsx files
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?optional[]=runtime'
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },

    plugins: [
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

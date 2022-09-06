const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');


const Config = {

    // Inform that its nodeJS
    target: 'node',

    // Entry file
    entry: './src/index.js',

    // where to put the build bundel file
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig,Config);
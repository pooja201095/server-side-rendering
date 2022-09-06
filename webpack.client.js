const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const Config = {
    // Entry file
    entry: './src/client/client.js',

    // where to put the build bundel file
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public')
    }
}

module.exports = merge(baseConfig,Config);
const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env && process.env.NODE_ENV && process.env.NODE_ENV.trim().toString() == 'local';

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react-native$': 'react-native-web'
        }
    },
    entry: { 'index': './src/lib/index.ts' },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    /src/
                ],
                use: 'awesome-typescript-loader?silent=true'
            },
            require('./webpack.shared.js').babelLoader,
        ]
    },
    output:
        {
            path: path.join(__dirname, '../lib'),
            filename: '[name].js',
            publicPath: '../lib/', // Webpack dev middleware, if enabled, handles requests for this URL prefix
            libraryTarget: 'umd'
        },
    plugins: [
        new CheckerPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative('../lib', '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        })
    ],
    mode: 'development'
};
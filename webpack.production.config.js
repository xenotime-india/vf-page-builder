const { resolve } = require('path');
const webpack = require('webpack');

const config = {
    devtool: 'cheap-module-source-map',

    entry: {
        app: './src/scripts/app.js',
        onload: './src/scripts/onload.js'
    },

    context: resolve(__dirname, 'outsideExtension'),

    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname ,'outsideExtension','dist'),
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
};

module.exports = config;
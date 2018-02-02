var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: './outsideExtension/src/scripts/app.js',
        onload: './outsideExtension/src/scripts/onload.js'
    },
    output: {
        path: path.resolve(__dirname,'outsideExtension' ,'build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
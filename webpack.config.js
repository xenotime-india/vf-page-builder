const { resolve } = require('path');

const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/scripts/app.js'
    ],
    output: {
        path: resolve(__dirname ,'outsideExtension','build'),
        filename: 'app.bundle.js'
    },
    context: resolve(__dirname, 'outsideExtension'),

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'outsideExtension','build'),
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            test: /\.js$/,
            options: {
                eslint: {
                    configFile: resolve(__dirname, '.eslintrc'),
                    cache: false,
                }
            },
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true)
        }),
    ],
    stats: {
        colors: true
    }
};
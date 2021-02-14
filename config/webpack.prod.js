const { mergeWithCustomize, customizeArray, customizeObject } = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
    mode: 'production',
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true,
        allowedHosts: [
            'localhost'
        ],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: [path.resolve(__dirname, '../src/styles/')],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
};

module.exports = mergeWithCustomize({
    customizeArray: customizeArray({
        'module.rules': 'append',
    }),
    customizeObject: customizeObject({
        devServer: 'append',
        module: 'append',
    }),
})(commonConfig, prodConfig);

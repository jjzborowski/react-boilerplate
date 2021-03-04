const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
    },
    devServer: {
        contentBase: '../dist',
    },
    module: {
        rules: [
            {
                test: /\.(eot|gif|otf|jpg|png|ttf|woff|woff2)(\?[a-zA-Z0-9.=]+)?$/,
                use: ['file-loader'],
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: false,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, '../src/styles/')],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    '@svgr/webpack',
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    resolve: {
        alias: {
            assets: path.resolve(__dirname, '../src/assets/'),
            commons: path.resolve(__dirname, '../src/commons/'),
            components: path.resolve(__dirname, '../src/components/'),
            constants: path.resolve(__dirname, '../src/constants/'),
            interfaces: path.resolve(__dirname, '../src/interfaces/'),
            modules: path.resolve(__dirname, '../src/modules/'),
            store: path.resolve(__dirname, '../src/store/'),
            styles: path.resolve(__dirname, '../src/styles/'),
        },
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
        ],
    },
};

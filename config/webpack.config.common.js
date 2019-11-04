const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const commonConfig = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '..', './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '..', 'src'),
            '@assets': path.resolve(__dirname, '..', 'src', 'assets'),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    { 
                        loader: 'css-loader',
                        options: { 
                            sourceMap: true 
                        } 
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    { 
                        loader: 'css-loader',
                        options: { 
                            sourceMap: true 
                        } 
                    },
                    { 
                        loader: "sass-loader", 
                        options: { 
                            sourceMap: true 
                        } 
                    }
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}

module.exports = commonConfig;
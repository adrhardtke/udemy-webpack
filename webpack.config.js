const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // yarn add style-loader css-loader -D
            },
            // image loader
            {
                test: /\.(png|jpg|jpeg)$/,
                use: ['file-loader'] // yarn add file-loader -D
            },
            // sass loader
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] //yarn add sass-loader node-sass -D
            },
            // loaders para novas funcionalidades JS
            {
                test: '/\.(js|jsx)$/',
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread', // yarn add @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-object-rest-spread -D
                            '@babel/plugin-proposal-decorators'
                        ] 
                    }
                }
            },
            // Html Loader
            {
                test: /\.html$/,
                use: 'html-loader' // yarn add html-loader -D
            },
            // Text Loader
            {
                test: /\.txt$/,
                use: 'raw-loader', // yarn add raw-loader -D
            }
        ]
    }
}
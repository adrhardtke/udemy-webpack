const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            // Loader de fonts
            {
                test: /\.(ttf|woff|woff2)$/,
                loader: 'url-loader' // yarn add url-loader -D
            }          
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}
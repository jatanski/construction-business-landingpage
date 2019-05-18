const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(js)$/,
            loader: ['babel-loader'],
            exclude: /node_modules/
        }]
    }
}
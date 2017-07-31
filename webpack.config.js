var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginOpt = new HtmlWebpackPlugin({
    title: 'Regular Template',
    filename: path.resolve(__dirname, './index.html'),
});

module.exports = {
    entry: './src/components/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        //HtmlWebpackPluginOpt
    ],
    module: {
        rules: [
            {test: /\.html$/, use: ["html-loader"]}
        ]
    }
}
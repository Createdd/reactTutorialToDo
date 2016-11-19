var path = require('path');//add the path module from node.js

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/index.js',//set the entry point to the file index.js
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },//output all JS files into 1 bundle.js
    module: {
        loaders: [
            {
                test: /\.js$/,//look for all .js files
                include: path.resolve(__dirname, 'src'),//choose the directory to be tested
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }//handle babel and css
};//export the settings for webpack

// webpack.config.js

module.exports = {
    entry: './src/main.js',
    output: {
      //publicPath: "/TN/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8081
    }
};

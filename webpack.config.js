module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        './src/app.js'
    ],
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-source-map',
    devServer: {
      historyApiFallback: true
  }
};
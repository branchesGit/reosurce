var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/app.tsx',
        index: './src/styles/index.less'
    },

    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].js',
        publicPath: '/dist/',
        // the url to the output directory resolved relative to the HTML page.
        chunkFilename: '[name]' + (+new Date) + ".js"
    },
    
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    preset: [ "es2015" ]
                }
            },
            {
	    		test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
	    	},
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallbackLoader:'style-loader', loader:'css-loader!less-loader'})
            }
        ]
    },

    devtool: 'source-map',
    context: __dirname, // string( absoulute path ),
    externals:{
        jquery: 'jQuery',
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'antd': 'antd'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("[name].css"),
        /*new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),*/
        new webpack.DefinePlugin({
            __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        })
    ]
}
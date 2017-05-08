var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.dev.js')

var compiler = webpack( config );

var app = new webpackDevServer( compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    inline:true,
    open: true,
})

app.listen(9000, "localhost", function(err){
    if( err ){
        console.log( err );
    }
})

console.log("listen at http://localhost:9000");
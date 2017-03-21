//yo phil..while you are at it copy the packge.json if you like. npm install will
//install the correct versions :-)Oh ok then no problem. we will stcik to the plan then
//yo tan...
//I'm afraid it may have different dependencies, this bookmark is a completely different
//project than this...he just said to do webpack config only.

//*** Copied from github/velocity-360 --> bookmark/webpack.config.js
var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: {
		app: "./src/app.js"
	},
	output: {
		filename:"/build/bundle.js",
        sourceMapFilename: "/build/bundle.map"
	},
    devtool: '#source-map',	
	// plugins: [
 //    	new webpack.optimize.UglifyJsPlugin({minimize: true}),
	// ],	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	}
}
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry : [
		'./src/index.js',
		'webpack-dev-server/client?http://0.0.0.0:4000',
		'webpack/hot/only-dev-server'
	],

	output: {
		path : '/',
		filename : 'bundle.js'
	},

	devServer : {
		hot : true,
		filename : 'bundle.js',
		publicPath : '/',
		historyApiFallback : true,
		contentBase : './public',
		proxy : {
			"*" : "http://localhost:3000"
		},
		stats : {
			assets: false,
			colors : true,
			version : true,
			hash : true,
			timings : true,
			chunks : false,
			chunkModules : true
		}
	},

	plugins : [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	module: {
		loaders: [
			{
				test : /\.js$/,
				loaders : ['react-hot', 'babel?' + JSON.stringify({
					cacheDirectory : true,
					presets : ['es2015', 'react']
				})],
				exclude: /node_modules/,
			}
		]
	},

	resolve : {
		root: path.resolve('./src')
	}
}

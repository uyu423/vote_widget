var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool : 'cheap-module-eval-source-map',

	entry : ['webpack-hot-middleware/client', './app/App'],

	output : {
//		path: path.join( __dirname, 'assets', 'js'),
		path : __dirname + "/assets/js",
		filename : 'bundle.js',
		publicPath: '/assets/js'
	},

	plugins : [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	],

	devServer : {
		inline : true,
		port : 3000,
		contentBase : __dirname + '/views/'
	},

	module : {
		loaders : [{
			test : /\.js$/,
			loader : 'babel-loader',
			exclude : /node_modules/,
			query : {
				plugins: [
					['react-transform', {
						transforms: [
							{
								transform : 'react-transform-hmr',
								imports: ['react'],
								locals: ['module']
							}, {
								transform: 'react-transform-catch-errors',
								imports: ['react', 'redbox-react']
							}
						],
					}
					]]
			}
		}]
	}
};


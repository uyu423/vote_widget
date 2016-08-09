module.exports = {
	entry : './app/index.js',

	output : {
		path : __dirname,
		filename: 'bundle.js'
	},

	devServer : {
		inline: true,
		port : 3000,
		contentBase : __dirname + '/views/'
	},

	module : {
		loaders : [
			{
				test : /\.js$/,
				loader : 'babel-loader',
				exclude : /node_modules/,
				query : {
					cacheDirectory: true,
					presets : ['es2015', 'react']
				}
			}
		]
	}
}

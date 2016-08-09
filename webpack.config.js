module.exports = {
	entry : './src/index.js',

	output : {
		path : __dirname + '/public',
		filename: 'bundle.js'
	},

	module : {
		loaders : [
		{
			test : /\.js$/,
			exclude : /node_modules/,
			loaders : [
				'babel?' + JSON.stringify({
					cacheDirectory: true,
					presets : ['es2015', 'react']
				})]
		}
		]}
}

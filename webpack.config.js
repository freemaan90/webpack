const path = require('path');

module.exports = {
	entry: {
		home: path.resolve('./src', 'js', 'index.js')
	},
	output: {
		path: path.resolve('src', 'dist'),
		filename: 'js/[name].js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
};

const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		path: path.resolve('src', 'dist'),
		filename: 'bundle.js'
	}
};
const path = require('path');

module.exports = {
	entry: {
		home: path.resolve('src', 'js', 'index.js'),
		precios: path.resolve('src', 'js', 'precios.js'),
		contacto: path.resolve('src', 'js', 'contacto.js')
	},
	mode: 'development',
	output: {
		path: path.resolve('src', 'dist'),
		filename: 'js/[name].js'
	}
};

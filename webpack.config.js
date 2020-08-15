const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		home: path.resolve('./src', 'js', 'index.js')
	},
	output: {
		path: path.resolve('dist'),
		filename: 'js/[name].js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Mi Primera Pagina con WebPack'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		})
	]
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Mi Primera Pagina con WebPack'
		})
	],
	devServer: {
		hot: true,
		open: true,
		port: 9000
	}
};

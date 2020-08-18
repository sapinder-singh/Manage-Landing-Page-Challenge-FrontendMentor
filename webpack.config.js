const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js|\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.(png|jp(e*)g)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000,
							name: 'images/[name].[ext]'
						}
				}]
			},
			{
				test: /\.(svg)$/,
				use: ['@svgr/webpack',
				{
					loader: 'url-loader',
					options: {
						limit: 8000,
						name: 'images/[name].[ext]'
					}
				}]
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin(),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [ autoprefixer() ]
			}
		})
	]
}

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: false,
			removeRedundantAttributes: true,
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new CopyWebpackPlugin([{ from: './static', to: './static' }])
	]
};

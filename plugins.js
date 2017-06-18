const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecachePlugin = require('sw-precache-webpack-plugin');

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
	].concat(
		process.env.NODE_ENV === 'production'
			? [
					new SWPrecachePlugin({
						filename: 'service-worker.js',
						staticFileGlobs: [
							'static/**/*' //cache all static files by default
						],
						runtimeCaching: [
							// sw-toolbox feature; caches runtime requests
							{
								handler: 'fastest',
								urlPattern: /[.](css|png|jpg)/
							},
							{
								handler: 'networkFirst',
								urlPattern: /^http*/
							}
						]
					})
				]
			: []
	)
};

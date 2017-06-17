const path = require('path');
const { plugins } = require('./plugins');

module.exports = {
	entry: {
		app: ['./src/index.js', './src/scroll.js']
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: '[name].[hash:8].js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: /src/
			}
		]
	},
	plugins,
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		contentBase: './',
		historyApiFallback: true
	}
};

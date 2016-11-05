var path = require("path");
var postcssimport = require('postcss-import');
var autoprefixer = require('autoprefixer')({browsers: ['> 1%','ie >= 9']});
var postcssnested = require('postcss-nested');
var webpack = require('webpack');
module.exports = {
	entry: {
		upper: './src/upper.js',
		upper_1: './src/upper.js'
	},
	output: {
		path: path.resolve("./"),
		filename: 'upper.js',
		libraryTarget: 'amd',
		library: 'app',
		publicPath: 'test'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css!postcss'
			},
			{
				test: /\.(png|jpg|jpeg|gif|woff)$/,
				loader: 'file?name=[path][name].[ext]'
			},
			{
				test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
				loader: 'url?limit=999999'
			},
			{
				test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
				loader: 'file'
			},
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				query: {
					compact: false,
					presets: [
						require.resolve('babel-preset-es2015')
						// require.resolve('babel-preset-stage-0'),
						// require.resolve('babel-preset-stage-3')
					],
					plugins: [
						require.resolve('babel-plugin-transform-react-jsx'),
						require.resolve('babel-plugin-add-module-exports')
					]
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		})
	],
	extensions: [],
	postcss: function postcssPlugins() { return [postcssimport, autoprefixer, postcssnested]; }
};

const path = require("path");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "dev_bundle.js",
		path: path.resolve(__dirname, "./dist"),
	},
	mode: "development",
	devServer: {
		open: true,
		port: 8080,
		hot: true,
		writeToDisk: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-proposal-object-rest-spread"],
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false,
		}),
	]
};

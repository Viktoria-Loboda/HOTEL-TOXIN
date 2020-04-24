const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './production'),
	assets: 'assets/'
}

module.exports = {
	entry: {
		colorsFonts: `${PATHS.src}/pages/colorsFonts/colorsFonts.js`,
		formElements: `${PATHS.src}/pages/formElements/formElements.js`,
		cards: `${PATHS.src}/pages/cards/cards.js`
	},
	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		},{
			test: /\.pug$/,
      loader: 'pug-loader?pretty=true'
		},{
			test: /\.scss$/,
			use: [
				{
          loader: MiniCssExtractPlugin.loader,
          options: {}
        },
				{
					loader: 'css-loader',
					options: { 
            url: false
          }
				},{
					loader: 'postcss-loader',
					options: { 
					  config: {path: './postcss.config.js'}
					}
				},{
					loader: 'sass-loader',
					options: { sourceMap: true }
				}
			]
		},]
	},
	devServer: {
		port: 8081
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}style/[name].css`
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/pages/colorsFonts/colorsFonts.pug`,
			filename: 'colorsFonts.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/pages/formElements/formElements.pug`,
			filename: 'formElements.html',
			inject: false
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/pages/cards/cards.pug`,
			filename: 'cards.html',
			inject: false
		}),
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
			{ from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts`},
			{ from: `${PATHS.src}/static`, to: `${PATHS.dist}/static`,}
		]),
		new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
	]
}
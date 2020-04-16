const path = require('path')

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './production'),
	assets: 'assets/'
}

module.exports = {
	entry: {
		ColorsFonts: `${PATHS.src}/pages/ColorsFonts/colors-fonts.js` 
	},
	output: {
		filename: `${PATHS.assets}js/[name].js`,
		path: PATHS.dist,
		publicPath: ''
	}
}
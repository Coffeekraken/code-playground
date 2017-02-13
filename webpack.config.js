module.exports = {
	entry: {
		'public/assets/js/app.js' : './public/assets-src/js/app.js'
	},
	output: {
		path: '.',
		filename: '[name]',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			use: [{
				loader: 'babel-loader'
			}]
		}]
	},
	resolve : {
		alias : {
			// 'coffeekraken-s-interactive-demo-component' : '/Users/olivierbossel/data/web/coffeekraken/s-interactive-demo-component/dist/index.js',
			// 'coffeekraken-sugar' : '/Users/olivierbossel/data/web/coffeekraken/sugar/dist'
		}
	},
	devtool: 'source-map'
}

module.exports = {
	entry: {
		'public/assets/js/app.js' : './public/assets-src/js/app.js'
	},
	output: {
		path: '.',
		filename: '[name]',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			loader: 'babel-loader'
		}]
	},
	resolve : {
		alias : {
			// 'coffeekraken-s-dialog-component' : '/Users/olivierbossel/data/web/coffeekraken/s-dialog-component/dist/index.js',
			// 'coffeekraken-s-interactive-demo-component' : '/Users/olivierbossel/data/web/coffeekraken/s-interactive-demo-component/dist/index.js',
			// 'coffeekraken-s-codemirror-component' : '/Users/olivierbossel/data/web/coffeekraken/s-codemirror-component/dist/index.js',
			// 'coffeekraken-sugar' : '/Users/olivierbossel/data/web/coffeekraken/sugar/dist'
		}
	}
}

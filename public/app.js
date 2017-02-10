const _get = require('lodash/get');
const _set = require('lodash/set');
const _extend = require('lodash/extend');
const __express = require('express');
const __expressHandlebars = require('express-handlebars');
const __path = require('path');
const __fs = require('fs');

module.exports = function(config) {

	// creating the app
	const app = __express();

	// handlebars
	app.engine('handlebars', __expressHandlebars({
		layoutsDir : __dirname + '/views/layouts',
		defaultLayout : 'main'
	}));
	app.set('views',__dirname + '/views');
	app.set('view engine', 'handlebars');

	// static files
	app.use('/assets', __express.static(__dirname + '/assets'));

	// load package.json
	let packageJson = {};
	if (__fs.existsSync(process.env.PWD + '/package.json')) {
		packageJson = require(process.env.PWD + '/package.json');
	}

	// middleware
	app.use((req, res, next) => {
		if (/^\/assets\//.test(req.url)) return;
		next();
	});

	// global route
	app.get(/.*/, function (req, res) {
		// exclude .map files
		if (req.url.match('.js.map')) return;

		// settings
		const settings = _extend({}, config);

		// editors
		if (config.editors.html) {
			settings.editors.html.language = config.editors.html.language || 'html';
			settings.editors.html.title = config.editors.html.title || config.editors.html.language;
			if (settings.editors.html.file && __fs.existsSync(process.env.PWD + '/' + settings.editors.html.file)) {
				settings.editors.html.data = __fs.readFileSync(process.env.PWD + '/' + settings.editors.html.file, 'utf8');
			} else {
				settings.editors.html.data = config.editors.html.data;
			}
			settings.editors.html.aceept = config.editors.html.accept;
			settings.editors.html.updateOn = config.editors.html.updateOn || (config.editors.html.language !== 'html') ? 'run' : null;
		}
		if (config.editors.css) {
			settings.editors.css.language = config.editors.css.language || 'css';
			settings.editors.css.title = config.editors.css.title || config.editors.css.language;
			if (settings.editors.css.file && __fs.existsSync(process.env.PWD + '/' + settings.editors.css.file)) {
				settings.editors.css.data = __fs.readFileSync(process.env.PWD + '/' + settings.editors.css.file, 'utf8');
			} else {
				settings.editors.css.data = config.editors.css.data;
			}
			settings.editors.css.aceept = config.editors.css.accept;
			settings.editors.css.updateOn = config.editors.css.updateOn || (config.editors.css.language !== 'css') ? 'run' : null;
		}
		if (config.editors.js) {
			settings.editors.js.language = config.editors.js.language || 'js';
			settings.editors.js.title = config.editors.js.title || config.editors.js.language;
			if (settings.editors.js.file && __fs.existsSync(process.env.PWD + '/' + settings.editors.js.file)) {
				settings.editors.js.data = __fs.readFileSync(process.env.PWD + '/' + settings.editors.js.file, 'utf8');
			} else {
				settings.editors.js.data = config.editors.js.data;
			}
			settings.editors.js.aceept = config.editors.js.accept;
			settings.editors.js.updateOn = config.editors.js.updateOn || (config.editors.js.language !== 'js') ? 'run' : null;
		}

		// render the page
		res.render('home', {
			title : config.title || 'Code Playground',
			logo : config.logo,
			config : config,
			packageJson : packageJson,
			compileServerSettings : JSON.stringify(config.compileServer),
			editors : {
				html : config.editors.html,
				css : config.editors.css,
				js : config.editors.js
			}
		});
	});

	// start demo server
	app.listen(config.port, function () {
		console.log('Demo up and running on port ' + config.port + '!');
	});
}

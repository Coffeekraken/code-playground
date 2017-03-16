const _get = require('lodash/get');
const _set = require('lodash/set');
const _extend = require('lodash/extend');
const __merge = require('lodash/merge');
const __clone = require('lodash/cloneDeep');
const __express = require('express');
const __expressHandlebars = require('express-handlebars');
const __path = require('path');
const __fs = require('fs');
const __md5 = require('MD5');
const __Cryptr = require('cryptr');

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

	// cryptr instance
 	let cryptr;
	if (config.secret) {
		cryptr = new __Cryptr(config.secret);
	}

	// protect
	app.use((req, res, next) => {
		if (/^\/assets\//.test(req.url)) return;
		if (req.url.match('favicon.ico')) return;
		if (req.url.match('.js.map')) return;
		next();
	});

	// static files
	app.use((req, res, next) => {
		if (__fs.existsSync(process.env.NODE_ENV + req.url)) {
			return res.sendFile(process.env.NODE_ENV + req.url);
		} else if (__fs.existsSync(__path.resolve(__dirname + '/../') + req.url)) {
			return res.sendFile(__path.resolve(__dirname + '/../') + req.url);
		}
		next();
	});

	// attach config to request
	app.use((req, res, next) => {
		req.config = __clone(config);

		// layout parameter
		if (req.query.layout) {
			req.config.layout = req.query.layout;
		}

		next();
	});

	// pwd
	app.use((req, res, next) => {
		let pwd = process.env.PWD;
		let app = req.path.split('/')[1] || req.query.app;

		// if an app query parameter is found
		if (app) {
			// check if the node env exist
			let apps = req.config.apps;
			if (process.env.NODE_ENV && req.config.apps[process.env.NODE_ENV]) {
				apps = req.config.apps[process.env.NODE_ENV];
			}
			if ( ! apps[app]) {
				throw `The app ${app} is not defined in the code-playground.config.js file...`
			}
			pwd = apps[app];
		} else if (req.query.cwd) {
			if (cryptr) {
				if ( req.query.cwd.match(/\//)) {
					// a secret is provided but the pwd passed is not an encrypted string
					throw `The passed req.query.cwd parameter is not a valid one...`;
				} else {
					pwd = cryptr.decrypt(req.query.cwd);
				}
			} else {
				pwd = req.query.cwd;
			}
		} else if (req.config.cwd) {
			pwd = req.config.cwd;
		}

		// resolve path
		pwd = pwd.replace('~', process.env.HOME);

		// check that the PWD is valid
		if ( ! __fs.existsSync(pwd)
			|| ! __fs.existsSync(`${pwd}/code-playground.config.js`)
		) {
			// either the pwd passed does not exist, or no code-playground.config.js file
			// has been found at this emplacement...
			throw `The passed req.query.cwd parameter is not a valid one...`;
		}

		// set pwd in config
		req.config.pwd = pwd;

		// next
		next();
	});

	// apps
	app.use((req, res, next) => {
		if ( ! req.config.apps) {
			next();
			return;
		}

		// check if the node env exist
		let apps = req.config.apps;
		if (process.env.NODE_ENV && req.config.apps[process.env.NODE_ENV]) {
			apps = req.config.apps[process.env.NODE_ENV];
		}

		for (let key in apps) {

			if ( ! req.apps) req.apps = {};

			const appPath = apps[key].replace('~', process.env.HOME);;
			const appObj = {};
			// check if a package json exist
			if (__fs.existsSync(`${appPath}/package.json`)) {
				appObj.packageJson = require(`${appPath}/package.json`);

			}
			// check if a package json exist
			if (__fs.existsSync(`${appPath}/code-playground.config.js`)) {
				appObj.config = require(`${appPath}/code-playground.config.js`);

			}
			req.apps[key] = appObj;
		}
		next();
	});

	// read config if a req.query.cwd is passed
	app.use((req, res, next) => {
		if ( ! req.query.cwd && ! req.query.app && ! req.path.split('/')[1]) {
			next();
			return;
		}

		// read the config file
		const _config = require(`${req.config.pwd}/code-playground.config.js`);

		// remove some settings that can not be overrided like port, etc...
		delete _config.port;
		delete _config.apps;
		delete _config.compileServer.port;

		// merge configs
		req.config = __merge(req.config, _config);

		// next
		next();
	});

	// package json
	app.use((req, res, next) => {

		let packageJson;
		// load package.json
		if (__fs.existsSync(req.config.pwd + '/package.json')) {
			packageJson = require(req.config.pwd + '/package.json');
			if (packageJson.contributors) {
				packageJson.contributors = packageJson.contributors.map((contributor) => {
					contributor.gravatar = `https://www.gravatar.com/avatar/${__md5(contributor.email)}`;
					return contributor;
				});
			}
			// attach packageJson to req
			req.packageJson = packageJson;
		}
		// next
		next();
	});

	// global route
	app.get(/.*/, function (req, res) {

		// editors
		if (req.config.editors.html) {
			req.config.editors.html.language = req.config.editors.html.language || 'html';
			req.config.editors.html.title = req.config.editors.html.title || req.config.editors.html.language;
			if (req.config.editors.html.file && __fs.existsSync(req.config.pwd + '/' + req.config.editors.html.file)) {
				req.config.editors.html.data = __fs.readFileSync(req.config.pwd + '/' + req.config.editors.html.file, 'utf8');
			} else {
				req.config.editors.html.data = req.config.editors.html.data;
			}
			req.config.editors.html.aceept = req.config.editors.html.accept;
			req.config.editors.html.updateOn = req.config.editors.html.updateOn || (req.config.editors.html.language !== 'html') ? 'run' : null;
		}
		if (req.config.editors.css) {
			req.config.editors.css.language = req.config.editors.css.language || 'css';
			req.config.editors.css.title = req.config.editors.css.title || req.config.editors.css.language;
			if (req.config.editors.css.file && __fs.existsSync(req.config.pwd + '/' + req.config.editors.css.file)) {
				req.config.editors.css.data = __fs.readFileSync(req.config.pwd + '/' + req.config.editors.css.file, 'utf8');
			} else {
				req.config.editors.css.data = req.config.editors.css.data;
			}
			req.config.editors.css.aceept = req.config.editors.css.accept;
			req.config.editors.css.updateOn = req.config.editors.css.updateOn || (req.config.editors.css.language !== 'css') ? 'run' : null;
		}
		if (req.config.editors.js) {
			req.config.editors.js.language = req.config.editors.js.language || 'js';
			req.config.editors.js.title = req.config.editors.js.title || req.config.editors.js.language;
			if (req.config.editors.js.file && __fs.existsSync(req.config.pwd + '/' + req.config.editors.js.file)) {
				req.config.editors.js.data = __fs.readFileSync(req.config.pwd + '/' + req.config.editors.js.file, 'utf8');
			} else {
				req.config.editors.js.data = req.config.editors.js.data;
			}
			req.config.editors.js.aceept = req.config.editors.js.accept;
			req.config.editors.js.updateOn = req.config.editors.js.updateOn || 'run';
		}

		// delete the secret from the compileServerSettings to not expose sensible infos
		delete req.config.compileServer.secret;

		// render the page
		res.render('home', {
			title : req.config.title || 'Code Playground',
			logo : req.config.logo,
			config : req.config,
			apps : req.apps,
			pwd : (cryptr) ? cryptr.encrypt(req.config.pwd) : req.config.pwd,
			packageJson : req.packageJson,
			compileServerSettings : JSON.stringify(req.config.compileServer),
			editors : {
				html : req.config.editors.html,
				css : req.config.editors.css,
				js : req.config.editors.js
			}
		});
	});

	console.log(`Code Playground : ...starting on port ${config.port}...`);

	// start demo server
	app.listen(config.port, function () {
		console.log('Code Playground : ✓ running on port ' + config.port + '!');
		console.log(`Code Playground : access interface on http://localhost:${config.port}`);
	});
}

import compileServer from 'coffeekraken-compile-server'
import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'

// setting up compile server
const compileServerSettings = Object.assign({
	api_url : `${document.location.protocol}//${document.location.hostname}:4000`
}, JSON.parse(window.app.compileServer));
compileServer.setup(compileServerSettings);

// default properties
SWebComponent.setDefaultProps({
	mountDependencies : [() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			});
		});
	}]
}, [
	's-codemirror',
	's-interactive-demo'
]);
SWebComponent.setDefaultProps({
	theme : 'material',
	compile: compileServer.compile
}, 's-codemirror');

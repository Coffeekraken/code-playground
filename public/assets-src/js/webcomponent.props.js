import compileServer from 'coffeekraken-compile-server'
import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'

// setting up compile server
let compileServerSettings = JSON.parse(window.app.compileServer);
const port = compileServerSettings.port || 4000;
compileServerSettings = Object.assign({
	apiUrl : `${document.location.protocol}//${document.location.hostname}:${port}`
}, compileServerSettings);
if (window.app.pwd) {
	compileServerSettings.queryString = `cwd=${window.app.pwd}`;
}
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

require('webcomponents.js/webcomponents-lite');
require('codemirror/mode/sass/sass.js');
require('codemirror/mode/css/css.js');
require('codemirror/mode/coffeescript/coffeescript.js');
require('codemirror/mode/haml/haml.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/stylus/stylus.js');
require('./golden-layout.js');
require('./webcomponent.props.js');
require('./webcomponent.imports.js');
import SNotificationComponent from 'coffeekraken-s-notification-component/dist/class'

// codemirror aliases
const CodeMirror = require('codemirror');
CodeMirror.modes.js = CodeMirror.modes.javascript;
CodeMirror.modes.html = CodeMirror.modes.htmlmixed;
CodeMirror.modes.coffee = CodeMirror.modes.coffeescript;

// listen for compilation error
document.body.addEventListener('compileError', (e) => {
	SNotificationComponent.notify({
		type : 'error',
		title : 'Woups...',
		body : e.detail.error,
		timeout : 20000
	});
});

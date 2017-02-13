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

// codemirror aliases
const CodeMirror = require('codemirror');
CodeMirror.modes.js = CodeMirror.modes.javascript;
CodeMirror.modes.html = CodeMirror.modes.htmlmixed;

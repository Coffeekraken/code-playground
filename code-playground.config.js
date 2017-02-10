module.exports = {
	// server port
	port : 3000,

	// title
	title : 'Code Playground',

	// logo
	logo : null,

	// layout
	layout : 'right',

	// compile server configurations
	compileServer : {
	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<div class="tf vr">
					<h1>Hello world</h1>
					<h2>Hello world</h2>
					<h3>Hello world</h3>
					<h4>Hello world</h4>
					<h5>Hello world</h5>
					<h6>Hello world</h6>
					<p class="lead">
						Sed elit erat, sollicitudin et elit nec, sodales gravida risus. Aenean enim justo, tincidunt ac posuere suscipit, lobortis id leo. Nunc lacinia pellentesque viverra. Aenean at commodo est, at dignissim.
					</p>
					<p>
						Sed elit erat, sollicitudin et elit nec, sodales gravida risus. Aenean enim justo, tincidunt ac posuere suscipit, lobortis id leo. Nunc lacinia pellentesque viverra. Aenean at commodo est, at dignissim.
					</p>
				</div>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
			`
		},
		js : {
			language : 'js',
			data : `
				import SAtvCardComponent from 'coffeekraken-s-atv-card-component'
			`
		}
	}
}

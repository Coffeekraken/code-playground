# ```code-playground.config.js``` reference

Here's the full reference of options available for the ```code-playground.config.js``` file :

```js
module.exports = {
	// server port
	port : 3000,

	// secret used to encrypt and decrypt vars
	// like the req.query.cwd, etc...
	// DON'T FORGET TO CHANGE THAT IN YOUR CONFIG
	secret : null,

	// map some app names to some cwd on the server.
	// by setting this up you will be able to target different apps on the same code-playground server
	// with the query string ?app={appname} or by /{appname},
	// format : {appname} : {cwd}
	// other : {NODE_ENV} : {...}
	apps : {},

	// set the working directory if you want to target an app that lives in
	// another folder that the code-playground installation one
	cwd : null,

	// logo url
	logo : null,

	// title
	title : 'Code Playground',

	// layout to use (top, right, bottom, left, vertical, horizontal)
	layout : 'right',

	// google tag manager id
	gtm : null,

	// compile server options
	// see https://github.com/coffekraken/compile-server for full options reference
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {

		// html editor
		html : {
			language : 'html',
			data : `
				<div class="container">
					<s-atv-card>
						<article class="card">
	 						<figure class="ratio-16-9">
								<img class="abs-cover" src="http://coffeekraken.io/dist/img/contribute-issues.jpg" />
							</figure>
							<div class="card__content">
								<h1 class="h3 m-b">
									Hello World
								</h1>
								<p class="p">
									This is the code-playground demo of the code-playground tool.
								</p>
							</div>
						</article>
					</s-atv-card>
				</div>
			`
		},

		// css editor
		css : {
			language : 'sass', // available : css / sass / scss / stylus
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@include s-init();
				@include s-classes();
				@include s-typography-classes();
				body {
					background: linear-gradient(to left, #f46b45 , #eea849);
				}
				.container {
					@include s-position(absolute, middle, center);
				}
				.card {
					max-width : 400px;
					@include s-depth(2);
					background: white;

					&:hover {
						@include s-depth(20);
					}
				}
				.card__content {
					padding: s-rem(40px);
					transform:translate3d(0,0,20px);
				}
			`
		},

		// js editor
		js : {
			language : 'js', // available : js / coffeescript / typescript
			data : `
				import 'webcomponents.js/webcomponents-lite'
			`
		}
	}
}
```

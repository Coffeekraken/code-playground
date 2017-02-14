module.exports = {
	// server port
	port : 3000,

	// logo
	logo : null,

	// title
	title : 'Code Playground',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4000

	},

	// editors
	editors : {
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
									In tempus leo eu semper gravida. Sed molestie ex porta fermentum imperdiet. Vivamus nec libero at tellus suscipit fermentum sit amet sed nibh. Lorem ipsum dolor sit amet, consectetur adipiscing.
								</p>
							</div>
						</article>
					</s-atv-card>
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
		js : {
			language : 'js',
			data : `
				import 'webcomponents.js/webcomponents-lite'
			`
		}
	}
}

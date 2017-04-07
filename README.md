# Coffeekraken Code Playground <img src="/.resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<a href="https://travis-ci.org/Coffeekraken/code-playground">
		<img src="https://img.shields.io/travis/Coffeekraken/code-playground.svg?style=flat-square" />
	</a>
	<a href="https://www.npmjs.com/package/coffeekraken-code-playground">
		<img src="https://img.shields.io/npm/v/coffeekraken-code-playground.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/code-playground/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-code-playground.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/code-playground">
		<img src="https://img.shields.io/npm/dt/coffeekraken-code-playground.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/code-playground">
		<img src="https://img.shields.io/github/forks/coffeekraken/code-playground.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/code-playground">
		<img src="https://img.shields.io/github/stars/coffeekraken/code-playground.svg?style=social&label=Star&style=flat-square" />
	</a>-->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
</p>

Provide a nice code playground that let you play with some html, javascript (coffee, typescript, etc...) and css (sass, scss, stylus, etc...)

![Carpenter screenshot](/.resources/code-playground-screenshot.png)


* **Demo**: [http://components.coffeekraken.io](http://components.coffeekraken.io)
* Homepage: [http://coffeekraken.io](http://coffeekraken.io)
* Source: [https://github.com/coffeekraken/code-playground](https://github.com/coffeekraken/code-playground)
* Twitter: [https://twitter.com/coffeekrakenio](https://twitter.com/coffeekrakenio)

## Quick start

### Install

```
npm install git+ssh://git@github.com/coffeekraken/code-playground#0.0.1 --save
```

### Create config file

Create a ```code-playground.config.js``` file at the root of your project like this one:

```js
module.exports = {
	title : 'Hello World',
	port : 3000,
	editors : {
		html : {
			data : `
				<h1>Hello World</h1>
			`
		},
		css : {
			language : 'sass',
			data : `
				body {
					background: red;
				}
			`
		},
		js : {
			data : `
				console.log('hello world');
			`
		}
	}
};
```

See [documentation](doc/) for full ```code-playground.config.js``` file reference

### Add an NPM script

Add in your ```package.json``` file a demo script like so:

```json
{
	"scripts": {
		"demo": "coffeekraken-code-playground"
	}
}
```

### Launch your code-playground

Launch the NPM script to start your code-playground server like so:

```
npm run demo
```

## Features

- Nice web interface to play with your code live
- Support sass/stylus/es6/coffeescript/typescript compilation through the [compile-server package](https://github.com/coffeekraken/compile-server)
- Nicely display information from the ```package.json``` file
- Support multiple "apps" that run on the same code-playground server
- Support multiple layouts like : top / right / bottom / left / vertical / horizontal

## Documentation

- [code-playground.config.js file reference](doc/code-playground.config.md)
- [query string parameters availables](doc/query-string.md)
- [CLI](doc/cli.md)

## Browser support

* Chrome *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 10+
* Opera *(latest 2)*
* Safari *(latest 2)*

## License

The code is available under the [MIT license](LICENSE.txt).

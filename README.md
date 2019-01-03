# Coffeekraken Code Playground <img src="/.resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/Coffeekraken/code-playground">
		<img src="https://img.shields.io/travis/Coffeekraken/code-playground.svg?style=flat-square" />
	</a> -->
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
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

<p class="lead">Provide a nice code playground that let you play with some html, javascript (coffee, typescript, etc...) and css (sass, scss, stylus, etc...)</p>

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-atv-card-component)

## Features

- Nice web interface to play with your code live
- Support sass/stylus/es6/coffeescript/typescript compilation through the [compile-server package](https://github.com/coffeekraken/compile-server)
- Nicely display information from the ```package.json``` file
- Support multiple "apps" that run on the same code-playground server
- Support multiple layouts like : top / right / bottom / left / vertical / horizontal / embed

## Table of content

1. **Demo**: [http://components.coffeekraken.io](http://components.coffeekraken.io)
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Documentation](#readme-documentation)
5. [Browsers support](#readme-browsers-support)
6. [Contribute](#readme-contribute)
7. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
8. [Licence](#readme-license)


<a name="readme-install"></a>
## Install

```
npm install coffeekraken-code-playground --save-dev
```

<a name="readme-get-started"></a>
## Get Started

#### Config file

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

#### Add an NPM script

Add in your ```package.json``` file a demo script like so:

```json
{
	"scripts": {
		"demo": "coffeekraken-code-playground"
	}
}
```

#### Launch your code-playground

Launch the NPM script to start your code-playground server like so:

```
npm run demo
```

<a name="readme-documentation"></a>
## Documentation

- [code-playground.config.js file reference](doc/code-playground.config.md)
- [query string parameters availables](doc/query-string.md)
- [CLI](doc/cli.md)

<a id="readme-browsers-support"></a>
## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| --------- | --------- | --------- | --------- |
| IE11+ | last 2 versions| last 2 versions| last 2 versions

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...

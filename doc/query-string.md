# Supported query string

Here the list of supported query string parameters

## layout

Specify the layout to use

```
...?layout=top
```

> **Available values** : top | right | bottom | left | vertical | horizontal

## cwd

Set the working directory for the code-playground to look for the ```code-playground.config.js``` file etc...

```
...?cwd=/Users/cooluser/cool-project
```

> If you have specify the ```config.secret``` config, this parameter has to be passed encrypted and will be decrypted by the server. This is made in order to not expose your server folder structure to the public.
> The encryption/decryption is made with the [cryptr npm package](https://www.npmjs.com/package/cryptr).

## demo

Specify the demo in the current app that you want to display. The demo need to be registered through the ```config.demos``` config like so:

```
...?demo=demo1
```

```js
module.exports = {
	demos: {
		demo1: {
			title: 'Demo #1',
			editors: {
				html: {
					language: 'html',
					data: `<h1>My cool demo</h1>`
				}
			}
		}
	}
}
```

## app

Specify the app that you want to target. The app has to be registered through the ```config.apps``` config like so:

```
...?app=my-cool-app
```

```js
module.exports = {
	apps : {
		'my-cool-app' : '/Users/cooluser/my-cool-app'
	}
};
```
